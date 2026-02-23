import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function RioPinarLogo({
  className = "",
  compact = false,
  ...props
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()} {...props}>
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10 shrink-0">
        <defs>
          <linearGradient id="rioPinarBg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0ea5a5" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#rioPinarBg)" />
        <path
          d="M32 16c-6 0-12 5-12 11 0 5 2 8 4 11 1 2 2 4 2 7 0 3 2 5 6 5s6-2 6-5c0-3 1-5 2-7 2-3 4-6 4-11 0-6-6-11-12-11Z"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="45" cy="18" r="4" fill="#fb923c" />
        <path
          d="M17 43c8 3 17 2 28-4"
          fill="none"
          stroke="#bae6fd"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M27 27h10m-10 5h7m-7 5h5"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {compact ? null : (
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold text-slate-900">
            Rio Pinar
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
            Dental Care
          </p>
        </div>
      )}
    </div>
  );
}
