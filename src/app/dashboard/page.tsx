import Link from "next/link";
import { Activity, ArrowLeft, BarChart3 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/50 bg-slate-950/80 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            Back to home
          </Link>
          <div className="flex items-center gap-2 text-slate-100">
            <Activity className="h-6 w-6 text-cyan-400" aria-hidden />
            <span className="text-lg font-semibold">Whale Watcher</span>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <BarChart3 className="h-16 w-16 text-cyan-500/60" aria-hidden />
          <h1 className="mt-4 text-2xl font-bold text-slate-100">
            Dashboard coming soon
          </h1>
          <p className="mt-2 max-w-md text-slate-400">
            Volume alerts, whale activity, and watchlists will live here. Stay
            tuned.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
