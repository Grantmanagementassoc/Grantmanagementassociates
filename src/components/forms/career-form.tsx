"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function CareerForm({ roleSlug = "general" }: { roleSlug?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, roleSlug }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      setSuccess(true);
    } catch (err) {
      setError("An error occurred while submitting your application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="glass rounded-2xl p-8 md:p-12 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-4">Application Submitted!</h3>
        <p className="text-muted">Thank you for your interest in joining Grant Management Associates. Our team will review your application and be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8 md:p-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Join our team</h2>
        <p className="mt-2 text-muted">Fill out the form below to apply. We are always looking for talented individuals.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name *</label>
            <input required type="text" id="fullName" name="fullName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
            <input required type="email" id="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="jane@example.com" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="(555) 123-4567" />
          </div>
          <div className="space-y-2">
            <label htmlFor="linkedinUrl" className="text-sm font-medium text-foreground">LinkedIn Profile</label>
            <input type="url" id="linkedinUrl" name="linkedinUrl" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="https://linkedin.com/in/janedoe" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="resumeUrl" className="text-sm font-medium text-foreground">Resume / Portfolio Link *</label>
          <input required type="url" id="resumeUrl" name="resumeUrl" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Link to Google Drive, Dropbox, or Personal Website" />
          <p className="text-xs text-muted">Please provide a link to your resume as we currently do not accept direct file uploads.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="coverLetter" className="text-sm font-medium text-foreground">Cover Letter / Note</label>
          <textarea id="coverLetter" name="coverLetter" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Tell us why you'd be a great fit..."></textarea>
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
            {error}
          </div>
        )}

        <button disabled={isSubmitting} type="submit" className="w-full btn-primary flex justify-center py-4">
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
