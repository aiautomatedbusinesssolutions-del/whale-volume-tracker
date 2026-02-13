import { ScanSearch, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-32 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
          <ScanSearch className="h-4 w-4" aria-hidden />
          Track large-volume moves in real time
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
          See what the{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            whales
          </span>{" "}
          are doing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
          Whale Watcher surfaces unusual volume and big-ticket trades so you can
          spot momentum before it trends. Built for traders who follow the flow.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30 sm:w-auto"
          >
            <BarChart3 className="h-5 w-5" aria-hidden />
            Open dashboard
          </Link>
          <Link
            href="#features"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-6 py-3.5 text-base font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
          >
            <TrendingUp className="h-5 w-5" aria-hidden />
            See features
          </Link>
        </div>
      </div>
    </section>
  );
}
