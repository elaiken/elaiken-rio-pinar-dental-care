import type { HTMLAttributes } from "react";
import Image from "next/image";

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
      <Image
        src="/rio-pinar-tooth-logo.png"
        alt=""
        aria-hidden="true"
        width={851}
        height={1847}
        className={`${compact ? "h-12 w-12" : "h-14 w-14"} shrink-0 object-contain`}
        sizes={compact ? "48px" : "56px"}
        priority
      />
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
