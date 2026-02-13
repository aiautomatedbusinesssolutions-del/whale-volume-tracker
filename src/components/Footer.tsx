import Link from "next/link";
import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 text-slate-400">
            <Activity className="h-6 w-6 text-cyan-500" aria-hidden />
            <span className="font-semibold text-slate-300">Whale Watcher</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            <Link
              href="#features"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              Pricing
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-400 hover:text-cyan-400"
            >
              Terms
            </Link>
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Whale Watcher. Volume analysis for
          traders.
        </p>
      </div>
    </footer>
  );
}
