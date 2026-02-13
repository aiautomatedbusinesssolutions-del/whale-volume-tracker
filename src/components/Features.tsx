import {
  Activity,
  Bell,
  Zap,
  BarChart3,
  Shield,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time volume alerts",
    description:
      "Get notified when volume spikes above normal so you never miss a big move.",
  },
  {
    icon: BarChart3,
    title: "Whale trade detection",
    description:
      "Spot large single orders and accumulation patterns across symbols.",
  },
  {
    icon: LineChart,
    title: "Volume profile & context",
    description:
      "Compare current volume to historical averages and identify breakouts.",
  },
  {
    icon: Bell,
    title: "Custom watchlists",
    description:
      "Track only the symbols you care about with configurable thresholds.",
  },
  {
    icon: Zap,
    title: "Fast & lightweight",
    description:
      "Streaming updates and minimal latency so you act on data, not lag.",
  },
  {
    icon: Shield,
    title: "Privacy-first",
    description:
      "We don’t sell your data. Your watchlists and alerts stay yours.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-slate-800/50 bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Built for volume-focused traders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Everything you need to follow large-volume activity and act with
            confidence.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700 hover:bg-slate-900/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">
                {title}
              </h3>
              <p className="mt-2 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
