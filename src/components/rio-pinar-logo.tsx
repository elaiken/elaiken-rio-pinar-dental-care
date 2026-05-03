import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function RioPinarLogo({
  className = "",
  compact = false,
  ...props
}: LogoProps) {
  const outline = compact ? "#e6fffb" : "#c7d2da";
  const shadow = compact ? "rgba(255,255,255,0.12)" : "#dff7f5";
  const body = "#ffffff";
  const blush = compact ? "#ccfbf1" : "#d9faf5";
  const face = compact ? "#dffcf8" : "#1f2937";
  const accent = compact ? "#99f6e4" : "#14b8a6";

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()} {...props}>
      <svg
        aria-hidden="true"
        viewBox="0 0 84 84"
        className={`${compact ? "h-12 w-12" : "h-14 w-14"} shrink-0`}
      >
        <ellipse cx="42" cy="69" rx="20" ry="7" fill={shadow} />
        <path
          d="M42 14c-9.4 0-17 4.6-19.1 13-1.6 6.3.5 11.8 3.8 15.7 2.9 3.4 4.7 6.1 5.3 9.8l1.1 6c.4 2.4 2.3 4.1 4.8 4.1 2 0 3.8-1.3 4.4-3.2l1.8-6 1.8 6c.6 1.9 2.4 3.2 4.4 3.2 2.5 0 4.4-1.7 4.8-4.1l1.1-6c.6-3.7 2.4-6.4 5.3-9.8 3.3-3.9 5.4-9.4 3.8-15.7C59 18.6 51.4 14 42 14Z"
          fill={body}
          stroke={outline}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <path
          d="M28 38c-3.4 1.8-5.3 4.7-5.8 8.8m33.8-8.8c3.4 1.8 5.3 4.7 5.8 8.8"
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          strokeWidth="2.1"
          opacity="0.7"
        />
        <path
          d="M24.5 49c-3.1-.2-5.2 1-6.5 3.7m44-3.7c3.1-.2 5.2 1 6.5 3.7"
          fill="none"
          stroke={outline}
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <circle cx="34.5" cy="44.5" r="1.9" fill={face} />
        <circle cx="49.5" cy="44.5" r="1.9" fill={face} />
        <ellipse cx="30" cy="49.5" rx="2.6" ry="1.6" fill={blush} />
        <ellipse cx="54" cy="49.5" rx="2.6" ry="1.6" fill={blush} />
        <path
          d="M37.5 52.5c1.5 2.1 3.1 3 4.5 3s3-.9 4.5-3"
          fill="none"
          stroke={face}
          strokeLinecap="round"
          strokeWidth="2.3"
        />
        <path
          d="M34 31.5c2-1.6 4.1-2.3 6.3-2.1"
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.85"
        />
        <path
          d="M58.5 20.5l1.1 2.5 2.5 1.1-2.5 1.1-1.1 2.5-1.1-2.5-2.5-1.1 2.5-1.1 1.1-2.5Z"
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
