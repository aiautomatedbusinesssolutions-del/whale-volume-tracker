"use client";

import { useState, useEffect } from "react";
import { X, Eye } from "lucide-react";

interface WatchlistProps {
  onSelect: (ticker: string) => void | Promise<void>;
  activeTicker: string;
}

export function Watchlist({ onSelect, activeTicker }: WatchlistProps) {
  const [items, setItems] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("whale-watchlist");
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("whale-watchlist", JSON.stringify(items));
  }, [items]);

  function addTicker(ticker: string) {
    if (ticker && !items.includes(ticker)) {
      setItems((prev) => [...prev, ticker]);
    }
  }

  function removeTicker(ticker: string) {
    setItems((prev) => prev.filter((t) => t !== ticker));
  }

  const canAdd = activeTicker && !items.includes(activeTicker);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
          <Eye className="h-5 w-5 text-slate-400" />
          Watchlist
        </h2>
        {canAdd && (
          <button
            onClick={() => addTicker(activeTicker)}
            className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
          >
            + Add {activeTicker}
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-slate-500">
          No stocks in your watchlist yet. Search a ticker and add it here to
          track it.
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((ticker) => (
            <div
              key={ticker}
              className="flex items-center justify-between rounded-lg bg-slate-800/50 px-4 py-2.5"
            >
              <button
                onClick={() => onSelect(ticker)}
                className={`font-medium transition-colors ${
                  ticker === activeTicker
                    ? "text-emerald-400"
                    : "text-slate-100 hover:text-emerald-400"
                }`}
              >
                {ticker}
              </button>
              <button
                onClick={() => removeTicker(ticker)}
                className="text-slate-500 transition-colors hover:text-rose-400"
                aria-label={`Remove ${ticker} from watchlist`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
