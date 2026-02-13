import { StockData, DayData } from "../types";

const API_KEY = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY ?? "";
const BASE_URL = "https://www.alphavantage.co/query";

interface AlphaQuote {
  "Global Quote": {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": string;
    "10. change percent": string;
  };
}

interface AlphaDailyEntry {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface AlphaDaily {
  "Time Series (Daily)": Record<string, AlphaDailyEntry>;
}

export async function fetchStockData(ticker: string): Promise<StockData> {
  const symbol = ticker.toUpperCase();

  // Fetch current quote and daily history in parallel
  const [quoteRes, dailyRes] = await Promise.all([
    fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    ),
    fetch(
      `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`
    ),
  ]);

  if (!quoteRes.ok) {
    throw new Error(`API request failed (${quoteRes.status})`);
  }

  const quoteData: AlphaQuote = await quoteRes.json();
  const quote = quoteData["Global Quote"];

  if (!quote || !quote["05. price"]) {
    throw new Error(
      `No data found for "${symbol}". Check the ticker and try again.`
    );
  }

  const currentPrice = parseFloat(quote["05. price"]);
  const priceChange = parseFloat(quote["09. change"]);
  const priceChangePercent = parseFloat(
    quote["10. change percent"].replace("%", "")
  );
  const volume = parseInt(quote["06. volume"], 10);

  // Build history and calculate average volume from daily data
  let history: DayData[] = [];
  let avgVolume = volume; // fallback

  if (dailyRes.ok) {
    const dailyData: AlphaDaily = await dailyRes.json();
    const timeSeries = dailyData["Time Series (Daily)"];

    if (timeSeries) {
      const dates = Object.keys(timeSeries).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime()
      );

      // Use up to 30 days to calculate average volume
      const volumeDays = dates.slice(0, 30);
      const totalVol = volumeDays.reduce(
        (sum, date) => sum + parseInt(timeSeries[date]["5. volume"], 10),
        0
      );
      avgVolume = Math.round(totalVol / volumeDays.length);

      // Build 5-day history (skip the most recent day — that's "today")
      const historyDates = dates.slice(1, 6);
      history = historyDates
        .map((date) => {
          const entry = timeSeries[date];
          return {
            date,
            open: parseFloat(entry["1. open"]),
            high: parseFloat(entry["2. high"]),
            low: parseFloat(entry["3. low"]),
            close: parseFloat(entry["4. close"]),
            volume: parseInt(entry["5. volume"], 10),
          };
        })
        .reverse(); // chronological order
    }
  }

  return {
    ticker: symbol,
    currentPrice,
    priceChange,
    priceChangePercent,
    volume,
    avgVolume,
    history,
  };
}
