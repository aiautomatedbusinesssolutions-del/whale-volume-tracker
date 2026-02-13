export interface DayData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface StockData {
  ticker: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;
  volume: number;
  avgVolume: number;
  history: DayData[];
}

export interface VolumeSignal {
  status: "green" | "yellow" | "red";
  confidence: number;
  message: string;
  isWhale: boolean;
  volumeRatio: number;
  priceConfirmed: boolean;
  trendAlignment: boolean;
}
