import type { HTMLAttributes } from "react";
import { useId } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function RioPinarLogo({
  className = "",
  compact = false,
  ...props
}: LogoProps) {
  const gradientId = useId();
  const shadowId = useId();

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()} {...props}>
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10 shrink-0">
        <defs>
          <linearGradient id={gradientId} x1="0.15" x2="0.82" y1="0.1" y2="0.9">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="55%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <filter
            id={shadowId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="5"
              stdDeviation="4"
              floodColor="#042f2e"
              floodOpacity="0.28"
            />
          </filter>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="28"
          fill={compact ? "rgba(255,255,255,0.08)" : `url(#${gradientId})`}
        />
        <circle
          cx="32"
          cy="32"
          r="27"
          fill="none"
          stroke={compact ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.4)"}
        />
        <path
          d="M32 12.5c-7.7 0-13.8 4.2-15.4 12-1.1 5 .4 9.5 3.2 13 2.9 3.7 5.1 6.5 5.8 10.9l.7 4.2c.4 2.6 2.6 4.6 5.2 4.6 2.2 0 4.2-1.5 4.8-3.7l1-4.1 1 4.1c.6 2.2 2.6 3.7 4.8 3.7 2.6 0 4.8-2 5.2-4.6l.7-4.2c.7-4.4 2.9-7.2 5.8-10.9 2.8-3.5 4.3-8 3.2-13-1.6-7.8-7.7-12-15.4-12Z"
          fill="#ffffff"
          filter={`url(#${shadowId})`}
        />
        <path
          d="M32 16.5c-5.6 0-10.1 3-11.5 8.6-1 4-.1 7.5 2.1 10.5 2.4 3.3 4.4 5.8 5 9.7l.5 2.8c.2 1.1 1.1 1.8 2.2 1.8.9 0 1.7-.6 2-1.5l1.5-5.9c.2-.8 1.4-.8 1.6 0l1.5 5.9c.3.9 1.1 1.5 2 1.5 1.1 0 2-.7 2.2-1.8l.5-2.8c.6-3.9 2.6-6.4 5-9.7 2.2-3 3.1-6.5 2.1-10.5-1.4-5.6-5.9-8.6-11.5-8.6Z"
          fill={compact ? "#dffcf8" : "#ccfbf1"}
        />
        <path
          d="M24.5 23.3c1.5-2.6 4.1-4.6 7.9-5.2"
          fill="none"
          stroke={compact ? "rgba(255,255,255,0.95)" : "#0f766e"}
          strokeLinecap="round"
          strokeWidth="2.4"
          opacity="0.5"
        />
        <path
          d="M47.2 16.3l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1 1-2.4Z"
          fill={compact ? "#b8f3ff" : "#ffffff"}
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
