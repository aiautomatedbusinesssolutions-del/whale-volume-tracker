import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="border-b border-slate-800/50 bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Ready to follow the flow?
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Create a free account and start watching volume in minutes.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
        >
          Get started
          <ArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
