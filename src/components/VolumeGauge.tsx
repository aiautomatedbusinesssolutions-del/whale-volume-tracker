"use client";

import { VolumeSignal } from "@/lib/types";
import { EducationalTooltip } from "@/components/EducationalTooltip";

interface VolumeGaugeProps {
  signal: VolumeSignal;
  ticker: string;
}

const STATUS_CONFIG = {
  green: {
    color: "text-emerald-400",
    stroke: "stroke-emerald-400",
    bg: "bg-emerald-400/10",
    label: "BUY SIGNAL",
  },
  yellow: {
    color: "text-amber-400",
    stroke: "stroke-amber-400",
    bg: "bg-amber-400/10",
    label: "CAUTION",
  },
  red: {
    color: "text-rose-400",
    stroke: "stroke-rose-400",
    bg: "bg-rose-400/10",
    label: "SELL SIGNAL",
  },
};

export function VolumeGauge({ signal, ticker }: VolumeGaugeProps) {
  const config = STATUS_CONFIG[signal.status];
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (signal.confidence / 100) * circumference;
  const offset = circumference - progress;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Gauge */}
      <div className="relative">
        <svg width="200" height="200" className="-rotate-90">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            className="text-slate-800"
          />
          {/* Progress arc */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`${config.stroke} transition-all duration-700 ease-out`}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${config.color}`}>
            {signal.confidence}%
          </span>
          <span className="text-sm text-slate-400">confidence</span>
        </div>

        {/* Whale emoji */}
        {signal.isWhale && (
          <span className="absolute -right-2 -top-2 animate-bounce text-3xl">
            🐋
          </span>
        )}
      </div>

      {/* Status label */}
      <div
        className={`rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider ${config.bg} ${config.color}`}
      >
        {config.label}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-100">{ticker}</h3>
        <p className="mt-1 max-w-sm text-sm text-slate-400">{signal.message}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
          <EducationalTooltip term="volume-ratio">
            <span>Vol ratio: {signal.volumeRatio.toFixed(1)}x</span>
          </EducationalTooltip>
          <span>Price: {signal.priceConfirmed ? "✓" : "✗"}</span>
          <EducationalTooltip term="divergence">
            <span>Trend: {signal.trendAlignment ? "✓" : "✗"}</span>
          </EducationalTooltip>
        </div>
      </div>
    </div>
  );
}
