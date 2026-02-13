"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle } from "lucide-react";

const TOOLTIPS: Record<string, { title: string; body: string }> = {
  volume: {
    title: "What is trading volume?",
    body: "Volume is the total number of shares traded during a given period. High volume means lots of buyers and sellers are active, which usually makes price moves more meaningful and trustworthy.",
  },
  "volume-matters": {
    title: "Why does volume matter?",
    body: "Volume confirms price moves. A price increase on high volume suggests real demand, while a price increase on low volume could be unreliable. Think of volume as the conviction behind a move.",
  },
  divergence: {
    title: "What's volume divergence?",
    body: "Divergence happens when price moves one direction but volume tells a different story. For example, if a stock keeps rising but volume is dropping, it could mean the rally is losing steam and may reverse soon.",
  },
  "fake-breakout": {
    title: "How to spot fake breakouts?",
    body: "A fake breakout happens when price breaks above resistance or below support but quickly reverses. The key clue is volume — real breakouts are backed by high volume. If volume is low during the breakout, it's more likely to fail.",
  },
  "volume-ratio": {
    title: "What is volume ratio?",
    body: "Volume ratio compares today's volume to the stock's average volume. A ratio of 2.0x means twice the normal trading activity. Ratios above 1.5x are noteworthy, and 3x+ can signal whale (institutional) activity.",
  },
  whale: {
    title: "What is a whale?",
    body: "In trading, a 'whale' is a large institutional investor (hedge fund, bank, etc.) whose trades are big enough to move the market. Whale activity is detected when volume surges 3x+ above average with strong price confirmation.",
  },
};

interface EducationalTooltipProps {
  term: string;
  children?: React.ReactNode;
}

export function EducationalTooltip({ term, children }: EducationalTooltipProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const tooltip = TOOLTIPS[term];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!tooltip) return <>{children}</>;

  return (
    <span className="relative inline-flex items-center gap-1" ref={ref}>
      {children}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex text-slate-500 transition-colors hover:text-slate-300"
        aria-label={`Learn about ${tooltip.title}`}
      >
        <HelpCircle className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 w-72 -translate-x-1/2 rounded-lg border border-slate-700 bg-slate-800 p-3 shadow-xl">
          <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-slate-700 bg-slate-800" />
          <p className="mb-1 text-xs font-semibold text-slate-200">
            {tooltip.title}
          </p>
          <p className="text-xs leading-relaxed text-slate-400">
            {tooltip.body}
          </p>
        </div>
      )}
    </span>
  );
}
