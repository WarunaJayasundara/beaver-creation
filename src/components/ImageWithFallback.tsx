"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc: string;
};

/**
 * Shows main image; if it fails to load (e.g. not uploaded), shows fallback. Always works in browser.
 */
export function ImageWithFallback({ src, fallbackSrc, alt, ...rest }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (!failed) {
      setFailed(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt ?? ""}
      onError={handleError}
      unoptimized
    />
  );
}
