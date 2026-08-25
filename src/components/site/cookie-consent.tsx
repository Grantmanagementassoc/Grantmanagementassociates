"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("gma-cookie-consent");
    if (!hasConsented) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gma-cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-[env(safe-area-inset-bottom)] pointer-events-none">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/95 backdrop-blur-md border border-glass-border shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-white font-medium mb-1">We respect your privacy</h3>
            <p className="text-sm text-slate-400">
              We use cookies to improve your experience and analyze site traffic. By continuing to use our site, you agree to our use of cookies and our{" "}
              <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleAccept}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Accept & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
