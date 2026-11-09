"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Link as LinkIcon, Share2, Check } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

interface ShareButtonsProps {
  title: string;
  date: string;
}

export function ShareButtons({ title, date }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const getShareUrl = () => {
    return typeof window !== "undefined" ? window.location.href : "";
  };

  const handleEmailShare = () => {
    const url = getShareUrl();
    const subject = encodeURIComponent(`GMA Weekly Funding Digest: ${title} (${date})`);
    const body = encodeURIComponent(
      `Hello,\n\nI thought you might find this funding digest useful:\n\n${title} — ${date}\n${url}\n\nGrant Management Associates`
    );
    sendGAEvent({ event: "share", method: "email", content_type: "newsletter" });
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleCopyLink = async () => {
    const url = getShareUrl();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      sendGAEvent({ event: "share", method: "copy_link", content_type: "newsletter" });
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleNativeShare = async () => {
    const url = getShareUrl();
    const shareData = {
      title: `${title} - ${date}`,
      text: `GMA Weekly Funding Digest (${date}) - Grant Management Associates`,
      url: url,
    };

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        sendGAEvent({ event: "share", method: "native_share", content_type: "newsletter" });
        return;
      } catch (err: any) {
        if (err.name === "AbortError") return; // User closed share sheet
      }
    }

    // Fallback: toggle dropdown menu on desktop / unsupported browsers
    setShowMenu((prev) => !prev);
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(getShareUrl());
    sendGAEvent({ event: "share", method: "linkedin", content_type: "newsletter" });
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer,width=600,height=600");
    setShowMenu(false);
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(`GMA Weekly Funding Digest: ${date}`);
    sendGAEvent({ event: "share", method: "twitter", content_type: "newsletter" });
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer,width=600,height=600");
    setShowMenu(false);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Share Digest:</span>
      <div className="flex items-center gap-2 relative">
        {/* Email Button */}
        <button
          onClick={handleEmailShare}
          className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          title="Share via Email"
          aria-label="Share via Email"
        >
          <Mail className="h-4 w-4" />
        </button>

        {/* Copy Link Button */}
        <div className="relative">
          <button
            onClick={handleCopyLink}
            className={`h-10 w-10 rounded-full bg-white dark:bg-slate-800 border flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
              copied
                ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400"
            }`}
            title={copied ? "Link Copied!" : "Copy Link"}
            aria-label="Copy Link"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> : <LinkIcon className="h-4 w-4" />}
          </button>
          
          {/* Toast / Tooltip */}
          {copied && (
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-white dark:bg-emerald-600 text-xs font-semibold rounded-md shadow-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
              Copied!
            </div>
          )}
        </div>

        {/* Share Button (Web Share API with Fallback Menu) */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={handleNativeShare}
            className={`h-10 w-10 rounded-full bg-white dark:bg-slate-800 border flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
              showMenu
                ? "border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400"
                : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400"
            }`}
            title="Share"
            aria-label="Share"
          >
            <Share2 className="h-4 w-4" />
          </button>

          {/* Fallback Share Menu */}
          {showMenu && (
            <div className="absolute right-0 bottom-full mb-3 w-52 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-1.5 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Share this digest
              </div>
              <button
                onClick={handleLinkedInShare}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-left"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
                <span>Share to LinkedIn</span>
              </button>
              <button
                onClick={handleTwitterShare}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-left"
              >
                <svg className="w-4 h-4 fill-current text-slate-900 dark:text-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Share to X (Twitter)</span>
              </button>
              <button
                onClick={() => {
                  handleCopyLink();
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-left border-t border-slate-100 dark:border-slate-700/50 mt-1 pt-1.5"
              >
                <LinkIcon className="w-4 h-4 text-slate-500" />
                <span>Copy Link</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

