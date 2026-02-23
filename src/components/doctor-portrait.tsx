"use client";

import Image from "next/image";
import { useState } from "react";

type DoctorPortraitProps = {
  src: string;
  alt: string;
  initials: string;
  className?: string;
  priority?: boolean;
};

export function DoctorPortrait({
  src,
  alt,
  initials,
  className = "",
  priority = false,
}: DoctorPortraitProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={`flex items-center justify-center rounded-full bg-gradient-to-br from-teal-700 to-cyan-600 text-white ${className}`.trim()}
      >
        <span className="text-4xl font-semibold">{initials}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-full ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 220px, 320px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
