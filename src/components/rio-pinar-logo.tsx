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
    <div
      className={`flex items-center gap-2.5 ${className}`.trim()}
      {...props}
    >
      <Image
        src="/rio-pinar-tooth-logo.png"
        alt=""
        aria-hidden="true"
        width={1254}
        height={1254}
        className={`${compact ? "h-11 w-11" : "h-[3.8rem] w-[3.8rem]"} shrink-0 object-contain`}
        sizes={compact ? "44px" : "61px"}
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
