const STATS = [
  { value: "30+", label: "Languages supported" },
  { value: "iOS & Android", label: "Available on" },
  { value: "100%", label: "Free forever" },
];

export default function StatStrip() {
  return (
    <div className="border-y border-white/5 bg-surface py-6">
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 px-6">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{s.value}</span>
            <span className="text-xs text-text-muted mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
