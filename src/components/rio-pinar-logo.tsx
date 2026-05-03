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
            <stop offset="0%" stopColor="#1e3a6e" />
            <stop offset="100%" stopColor="#060b12" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#rioPinarBg)" />
        <path
          d="M32 13c-8 0-15 4-17 11-2 7 0 13 3 17 2 3 4 6 5 8l1 7c0 2 2 3 4 3s3-1 4-3l1-4 1 4c1 2 2 3 4 3s4-1 4-3l1-7c1-2 3-5 5-8 3-4 5-10 3-17-2-7-9-11-17-11z"
          fill="white"
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
