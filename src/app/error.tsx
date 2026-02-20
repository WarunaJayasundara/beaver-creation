"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-bebas text-4xl text-white mb-4">Something went wrong</h1>
      <p className="text-white/70 mb-6 max-w-md">{error.message}</p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 rounded-md bg-[#31BB95] text-white font-syne font-bold text-sm uppercase"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-md border border-white/30 text-white font-syne font-bold text-sm uppercase no-underline"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
