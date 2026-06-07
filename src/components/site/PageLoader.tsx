import { useEffect, useState } from "react";
import kumoraLogo from "@/assets/kumora-logo.png.asset.json";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeT = setTimeout(() => setFading(true), 1100);
    const hideT = setTimeout(() => setVisible(false), 1700);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(hideT);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background pointer-events-none"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 600ms ease",
      }}
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-3"
        style={{
          animation: "loader-pop 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        }}
      >
        <img src={kumoraLogo.url} alt="" className="h-10 w-auto" />
      </div>
      <span
        className="absolute bottom-16 block h-[2px] w-40 overflow-hidden bg-foreground/10"
      >
        <span
          className="block h-full"
          style={{
            background: "var(--primary)",
            animation: "loader-bar 1.4s ease-in-out both",
          }}
        />
      </span>
      <style>{`
        @keyframes loader-pop {
          0% { opacity: 0; transform: translateY(8px) scale(0.96); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes loader-bar {
          0% { width: 0%; }
          60% { width: 85%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
