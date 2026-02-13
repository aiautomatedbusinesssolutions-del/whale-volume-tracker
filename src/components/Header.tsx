import Link from "next/link";
import { Activity, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-slate-100">
          <Activity className="h-8 w-8 text-cyan-400" aria-hidden />
          <span className="text-xl font-semibold tracking-tight">
            Whale Watcher
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Launch app
          </Link>
        </nav>
        <button
          type="button"
          className="rounded p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
