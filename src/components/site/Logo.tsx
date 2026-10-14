export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--gold-soft)" />
            <stop offset="1" stopColor="var(--gold)" />
          </linearGradient>
        </defs>
        <path d="M17 2 L32 17 L17 32 L2 17 Z" fill="none" stroke="url(#lg)" strokeWidth="1.5" />
        <path d="M11 11 H23 M11 17 H20 M11 23 H23 M11 11 V23" stroke="url(#lg)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <span className="text-[1.05rem] font-extrabold tracking-[0.28em]">
        ELITE<span className="text-gold-gradient"> DRIVE</span>
      </span>
    </span>
  );
}
