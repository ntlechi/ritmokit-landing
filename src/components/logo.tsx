export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rk-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="var(--accent-from)" />
          <stop offset="100%" stopColor="var(--accent-to)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="8" fill="url(#rk-gradient)" />
      {/* Sound-wave / rhythm bars */}
      <rect x="8" y="13" width="3" height="6" rx="1.5" fill="white" opacity="0.9" />
      <rect x="13" y="9" width="3" height="14" rx="1.5" fill="white" />
      <rect x="18" y="6" width="3" height="20" rx="1.5" fill="white" />
      <rect x="23" y="11" width="3" height="10" rx="1.5" fill="white" opacity="0.9" />
    </svg>
  );
}
