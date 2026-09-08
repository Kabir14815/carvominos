export default function LaptopMock() {
  return (
    <div className="mx-auto w-full max-w-lg" aria-hidden>
      <div className="rounded-t-2xl border border-ink/10 bg-ink px-3 pt-3 shadow-[0_24px_60px_rgba(26,26,26,0.18)]">
        <div className="flex items-center gap-1.5 pb-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
            Lead desk
          </span>
        </div>
        <div className="overflow-hidden rounded-t-lg bg-cloud">
          <div className="flex items-center justify-between border-b border-hairline bg-canvas px-4 py-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-brand">
                New lead
              </p>
              <p className="font-display text-sm font-semibold text-ink">Maria G. · Used Camry</p>
            </div>
            <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-semibold text-primary-deep">
              Opt-in
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-hairline">
            {[
              ["Clicked", "Weekend rate offer"],
              ["Channel", "Spanish Meta ads"],
              ["Next", "Call within 15 min"],
              ["Intent", "Used sedan · $2k down"],
            ].map(([label, value]) => (
              <div key={label} className="bg-canvas px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-graphite">{label}</p>
                <p className="mt-0.5 text-xs font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2 bg-canvas px-4 py-4">
            <p className="text-[10px] uppercase tracking-[0.14em] text-graphite">Tasks</p>
            {["BDC callback assigned", "Creative receipt attached", "Route: Midtown rooftop"].map(
              (task) => (
                <div key={task} className="flex items-center gap-2 text-xs text-charcoal">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-brand" />
                  {task}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="h-3 rounded-b-xl bg-ink" />
      <div className="mx-auto h-2 w-32 rounded-b-md bg-ink/80" />
    </div>
  )
}
