"use client";

export function SurveyTrigger() {
  return (
    <button 
      onClick={() => window.dispatchEvent(new Event("open-survey"))}
      className="btn-primary"
    >
      GMA Funding Interest Survey →
    </button>
  );
}
