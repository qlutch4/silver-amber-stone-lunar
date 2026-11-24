export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 28 28" className="size-7 shrink-0" aria-hidden="true">
        <rect width="28" height="28" rx="7" className="fill-graphite" />
        <path
          d="M8 18.5V9.5h7.2c2.4 0 3.9 1.3 3.9 3.35 0 2.1-1.55 3.4-3.95 3.4H11.2V18.5H8Zm3.2-5.05h3.55c.95 0 1.5-.45 1.5-1.15s-.55-1.1-1.5-1.1H11.2v2.25Z"
          className="fill-paper"
        />
        <rect x="18.2" y="16.2" width="3.2" height="3.2" rx="0.6" className="fill-green" />
      </svg>
      <span className="text-base font-semibold tracking-widest text-graphite">ЛАДОМ</span>
    </span>
  );
}
