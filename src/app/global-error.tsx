"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0d0d0d", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Something went wrong</h1>
        <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>{error.message}</p>
        <button
          type="button"
          onClick={() => reset()}
          style={{ padding: "0.5rem 1rem", background: "#31BB95", border: "none", borderRadius: "4px", color: "#fff", fontWeight: "bold", cursor: "pointer" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
