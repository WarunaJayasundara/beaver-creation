"use client";

import { useState, useEffect } from "react";

/**
 * Tries to use local image URL. If it fails to load (e.g. not uploaded), returns the dummy URL.
 */
export function useBackgroundImage(localUrl: string, dummyUrl: string): string {
  const [url, setUrl] = useState(localUrl);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const img = new window.Image();
      img.onload = () => setUrl(localUrl);
      img.onerror = () => setUrl(dummyUrl);
      img.src = localUrl;
    } catch {
      setUrl(dummyUrl);
    }
  }, [localUrl, dummyUrl]);

  return url;
}
