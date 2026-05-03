import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function RioPinarLogo({
  className = "",
  compact = false,
  ...props
}: LogoProps) {
  const ringStroke = compact ? "rgba(255,255,255,0.18)" : "#cbd5e1";
  const badgeFill = compact ? "rgba(255,255,255,0.08)" : "#f0fdfa";
  const badgeStroke = compact ? "rgba(153,246,228,0.42)" : "#99f6e4";
  const toothFill = compact ? "#ffffff" : "#ffffff";
  const toothStroke = compact ? "#dffcf8" : "#0f172a";
  const accent = compact ? "#99f6e4" : "#0f766e";

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()} {...props}>
      <svg
        aria-hidden="true"
        viewBox="0 0 72 72"
        className={`${compact ? "h-12 w-12" : "h-14 w-14"} shrink-0`}
      >
        <circle cx="36" cy="36" r="31" fill={badgeFill} stroke={ringStroke} />
        <circle cx="36" cy="36" r="26" fill="none" stroke={badgeStroke} />
        <path
          d="M36 15c-7.9 0-14 4.2-15.8 11.7-1.2 5.1.2 9.7 3.1 13.2 2.6 3.2 4.4 5.9 5.1 9.4l.9 5.1c.4 2.2 2.2 3.7 4.3 3.7 1.8 0 3.4-1.1 3.9-2.8l1.5-5.1 1.5 5.1c.5 1.7 2.1 2.8 3.9 2.8 2.1 0 3.9-1.5 4.3-3.7l.9-5.1c.7-3.5 2.5-6.2 5.1-9.4 2.9-3.5 4.3-8.1 3.1-13.2C50 19.2 43.9 15 36 15Z"
          fill={toothFill}
          stroke={toothStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.8"
        />
        <path
          d="M29.5 26.5c1.8-2.5 4.3-3.8 7.2-3.8"
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          strokeWidth="2.4"
          opacity="0.75"
        />
        <path
          d="M49.5 18.5l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2 1.2-2.8Z"
          fill={compact ? "#b8f3ff" : "#14b8a6"}
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
