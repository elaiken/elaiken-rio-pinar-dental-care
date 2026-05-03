import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function RioPinarLogo({
  className = "",
  compact = false,
  ...props
}: LogoProps) {
  const stroke = compact ? "#dffcf8" : "#0f172a";
  const accent = compact ? "#99f6e4" : "#14b8a6";
  const toothFill = compact ? "#ffffff" : "#fffdf8";

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()} {...props}>
      <svg
        aria-hidden="true"
        viewBox="0 0 110 110"
        className={`${compact ? "h-12 w-12" : "h-14 w-14"} shrink-0`}
      >
        <g
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M31 27 72 19l8 3-2 4 5 1-2 6-9-2"
            stroke={accent}
            strokeWidth="4"
          />
          <path d="m69 20 3 15" stroke={accent} strokeWidth="4" />
          <path d="m63 22 3 16" stroke={accent} strokeWidth="4" />
          <path d="m57 23 2 16" stroke={accent} strokeWidth="4" />
          <path d="M21 64 51 43" stroke={accent} strokeWidth="6" />
          <path
            d="m15 70 8-6 5 7-8 6c-4 3-9 2-11-1-3-4-2-8 6-14Z"
            strokeWidth="4.5"
          />
          <path
            d="M31 52c-5 0-9 3-11 9-1 5 1 10 3 14 1 2 3 5 5 11l2 10c1 3 4 5 7 5 3 0 5-2 6-5l3-12h2l3 12c1 3 3 5 6 5s6-2 7-5l2-10c2-6 4-9 5-11 2-4 4-9 3-14-2-6-6-9-11-9-3 0-6 1-8 3-2 2-3 2-5 2s-3 0-5-2c-2-2-5-3-8-3Z"
            fill={toothFill}
            strokeWidth="4.5"
          />
          <path
            d="M29 52c-3 1-5 3-6 7-1 4 0 8 3 12m32-19c3 1 5 3 6 7 1 4 0 8-3 12"
            stroke={accent}
            strokeWidth="3"
          />
          <path d="M32 59c-5 2-8 7-8 15" strokeWidth="4" />
          <path d="M28 70c2-2 4-3 6 0" strokeWidth="4" />
          <path d="M60 59c5 2 8 7 8 15" strokeWidth="4" />
          <path d="M58 70c2-2 4-3 6 0" strokeWidth="4" />
          <path d="M36 80c6 6 15 6 21 0" strokeWidth="4" />
          <path
            d="M37 76c4 5 18 5 22 0 1 7-5 13-11 13-7 0-12-6-11-13Z"
            fill={compact ? "#99f6e4" : "#ffffff"}
            strokeWidth="4"
          />
          <path d="M43 84c2 0 4 1 5 3m6-3c-2 0-4 1-5 3" strokeWidth="3" />
          <path d="M31 44c3-2 6-3 10-2m15 2c-3-2-6-3-10-2" strokeWidth="4" />
          <path
            d="M31 62c-4-2-8-1-11 3m-2 3c2-3 5-4 8-3m40-3c4-2 8-1 11 3m2 3c-2-3-5-4-8-3"
            strokeWidth="4"
          />
          <path
            d="M77 73c4-3 7-2 10 0 2 2 3 6 1 8-2 3-5 4-9 3l-2 6"
            strokeWidth="4.5"
          />
          <path
            d="M78 72c4 1 7 3 8 7m-9-2c4 1 6 2 7 5"
            stroke={accent}
            strokeWidth="3"
          />
        </g>
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
