"use client";

import { useState, useEffect } from "react";

/**
 * Uses local image URL when the file exists (e.g. after you upload to public/images/).
 * If the request fails (file not uploaded or 404), falls back to dummyUrl.
 * After uploading a new image, hard-refresh (Ctrl+F5) if it doesn’t appear (browser cache).
 */
export function useBackgroundImage(localUrl: string, dummyUrl: string): string {
  const [url, setUrl] = useState(dummyUrl);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = new window.Image();
    img.onload = () => setUrl(localUrl);
    img.onerror = () => setUrl(dummyUrl);
    img.src = localUrl;
  }, [localUrl, dummyUrl]);

  return url;
}
