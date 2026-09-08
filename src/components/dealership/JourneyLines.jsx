export default function JourneyLines() {
  return (
    <svg viewBox="0 0 640 180" className="h-40 w-full" role="img" aria-label="Lead journey lines converging">
      <defs>
        <linearGradient id="journey" x1="0" x2="1">
          <stop offset="0%" stopColor="#c9e0fc" />
          <stop offset="100%" stopColor="#296ef9" />
        </linearGradient>
      </defs>
      {[40, 70, 100, 130, 160].map((y, i) => (
        <path
          key={y}
          d={`M20 ${y} C 180 ${y - 20 + i * 4}, 320 90, 620 90`}
          fill="none"
          stroke="url(#journey)"
          strokeWidth="2.2"
          opacity={0.45 + i * 0.1}
        />
      ))}
      <circle cx="620" cy="90" r="7" fill="#296ef9" />
    </svg>
  )
}
