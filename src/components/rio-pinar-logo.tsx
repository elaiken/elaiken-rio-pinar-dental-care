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
  const glowId = useId();

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()} {...props}>
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10 shrink-0">
        <defs>
          <linearGradient id={gradientId} x1="0.12" x2="0.88" y1="0.08" y2="0.94">
            <stop offset="0%" stopColor="#dff8fb" />
            <stop offset="52%" stopColor="#7dd3cf" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <filter
            id={glowId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f766e" floodOpacity="0.2" />
          </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill={compact ? "rgba(255,255,255,0.12)" : `url(#${gradientId})`} />
        <circle
          cx="32"
          cy="32"
          r="27"
          fill="none"
          stroke={compact ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.65)"}
        />
        <path
          d="M46.3 23.6c-1.9-8-7.6-11.9-14.3-11.9s-12.4 3.9-14.3 11.9c-1.1 4.8-.4 9.1 1.8 12.9 2.3 4 5.4 7.3 6.2 11.3l1 5.1c.5 2.3 2.5 4 4.9 4 2.1 0 3.9-1.4 4.5-3.5l1-3.6 1 3.6c.6 2.1 2.4 3.5 4.5 3.5 2.4 0 4.4-1.7 4.9-4l1-5.1c.8-4 3.9-7.3 6.2-11.3 2.2-3.8 2.9-8.1 1.8-12.9Z"
          fill="#ffffff"
          filter={`url(#${glowId})`}
        />
        <path
          d="M32 18.5c-4.8 0-8.9 2.8-10.3 7.6-1 3.5-.4 6.7 1.4 9.8 1.4 2.4 3.2 4.6 4.1 7.5l.9 3.8c.3 1.2 1.4 2.1 2.7 2.1s2.4-.8 2.7-2l1.5-5.5 1.5 5.5c.3 1.2 1.4 2 2.7 2s2.4-.9 2.7-2.1l.9-3.8c.9-2.9 2.7-5.1 4.1-7.5 1.8-3.1 2.4-6.3 1.4-9.8-1.4-4.8-5.5-7.6-10.3-7.6Z"
          fill={compact ? "#ffffff" : "#effcfb"}
          opacity="0.7"
        />
        <path
          d="M23.7 22.5c1.3-2.2 3.2-3.6 5.5-4.5"
          fill="none"
          stroke={compact ? "rgba(255,255,255,0.88)" : "#0f766e"}
          strokeLinecap="round"
          strokeWidth="2.1"
          opacity="0.45"
        />
        <path
          d="M47.5 17.2l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9Z"
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
