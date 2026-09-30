"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#051428] to-[#051428]">
      <div className="flex flex-col items-center">

        <img
            src="/fluxbridge-loader.png"
            alt="FluxBridge"
            className="w-[320px] max-w-[80vw] object-contain"
        />

        <div className="mt-6 h-10 w-10 animate-spin rounded-full border-4 border-white border-t-[#051428] border-r-[#051428]" />

        <p className="mt-4 text-sm tracking-wide text-white/40">
          Loading...
        </p>

      </div>
    </div>
  );
}