"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const GA_ID = "G-F228CZMQ4G";
const CONSENT_KEY = "gma-cookie-consent";

function updateConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const win = window as any;
  if (typeof win.gtag === "function") {
    win.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }
}

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check Global Privacy Control
    const isGpcActive = typeof navigator !== "undefined" && (navigator as any).globalPrivacyControl === true;
    const consent = localStorage.getItem(CONSENT_KEY);

    if (consent === "accepted") {
      (window as any)[`ga-disable-${GA_ID}`] = false;
      updateConsent(true);
      setShow(false);
    } else if (consent === "rejected" || isGpcActive) {
      (window as any)[`ga-disable-${GA_ID}`] = true;
      updateConsent(false);
      setShow(false);
    } else {
      setShow(true);
    }

    // Listen for footer "Cookie Settings" trigger
    const handleReopen = () => setShow(true);
    window.addEventListener("open-cookie-settings", handleReopen);
    return () => window.removeEventListener("open-cookie-settings", handleReopen);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    (window as any)[`ga-disable-${GA_ID}`] = false;
    updateConsent(true);
    setShow(false);
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    (window as any)[`ga-disable-${GA_ID}`] = true;
    updateConsent(false);
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-[env(safe-area-inset-bottom)] pointer-events-none">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border border-cyan-500/20 shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-white font-medium mb-1">Your privacy choices</h3>
            <p className="text-sm text-slate-300">
              We use analytics cookies (Google Analytics 4) to understand site usage and improve performance. Analytics cookies are disabled until you consent. You may accept or reject them, or review our{" "}
              <Link href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleReject}
              type="button"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 transition-colors whitespace-nowrap"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleAccept}
              type="button"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shadow-lg shadow-cyan-500/20"
            >
              Accept Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
