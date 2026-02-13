import { StockData, VolumeSignal } from "./types";

export function analyzeVolume(stock: StockData): VolumeSignal {
  const volumeRatio = stock.volume / stock.avgVolume;
  const priceConfirmed = stock.priceChange > 0;
  const trendAlignment = volumeRatio > 1.5 && priceConfirmed;

  // Whale detection: 3x+ volume with positive price action
  const isWhale = volumeRatio >= 3 && priceConfirmed;

  if (isWhale) {
    return {
      status: "green",
      confidence: 95,
      message: `Whale detected on ${stock.ticker}! Volume is ${volumeRatio.toFixed(1)}x average with strong price confirmation.`,
      isWhale: true,
      volumeRatio,
      priceConfirmed,
      trendAlignment: true,
    };
  }

  // Green signal: 70-100% confidence
  // High volume (1.5x+) with price confirmation and trend alignment
  if (volumeRatio >= 1.5 && priceConfirmed && trendAlignment) {
    const confidence = Math.min(70 + (volumeRatio - 1.5) * 20, 100);
    return {
      status: "green",
      confidence: Math.round(confidence),
      message: `Strong buy signal on ${stock.ticker}. Volume ${volumeRatio.toFixed(1)}x above average with bullish price action.`,
      isWhale: false,
      volumeRatio,
      priceConfirmed,
      trendAlignment,
    };
  }

  // Yellow signal: 30-70% confidence
  // Elevated volume but mixed signals
  if (volumeRatio >= 1.2 || (volumeRatio >= 1.0 && priceConfirmed)) {
    const base = priceConfirmed ? 50 : 35;
    const volumeBonus = (volumeRatio - 1.0) * 30;
    const confidence = Math.min(Math.max(base + volumeBonus, 30), 70);
    return {
      status: "yellow",
      confidence: Math.round(confidence),
      message: `Caution on ${stock.ticker}. Volume is ${volumeRatio.toFixed(1)}x average — ${priceConfirmed ? "price rising but needs confirmation" : "price action is mixed"}.`,
      isWhale: false,
      volumeRatio,
      priceConfirmed,
      trendAlignment,
    };
  }

  // Red signal: 0-30% confidence
  // Low volume, no price confirmation, or bearish divergence
  const confidence = Math.max(volumeRatio * 30, 0);
  return {
    status: "red",
    confidence: Math.round(Math.min(confidence, 30)),
    message: `Weak signal on ${stock.ticker}. Volume is ${volumeRatio.toFixed(1)}x average${!priceConfirmed ? " with negative price action" : ""}.`,
    isWhale: false,
    volumeRatio,
    priceConfirmed,
    trendAlignment,
  };
}
