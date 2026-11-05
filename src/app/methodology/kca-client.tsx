"use client";
import { useState } from "react";
import { ShieldCheck, Download, CheckCircle2, AlertTriangle, FileText, Lock, Sparkles, Printer, ArrowRight } from "lucide-react";

export function KcaClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [optIn, setOptIn] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const [renderedAt] = useState(() => Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "factors" | "scorecard">("scorecard");
  const [error, setError] = useState("");

  async function handleDownload(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name || !email) {
      setError("Please provide your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid work email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/resources/kca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization: org,
          optInNewsletter: optIn,
          _website_hp: honeypot,
          _rendered_at: renderedAt,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to process request");
      setUnlocked(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-16">
      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab("scorecard")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "scorecard"
              ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              : "bg-white/5 text-muted hover:text-foreground hover:bg-white/10"
          }`}
        >
          Redacted Sample Scorecard
        </button>
        <button
          onClick={() => setActiveTab("factors")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "factors"
              ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              : "bg-white/5 text-muted hover:text-foreground hover:bg-white/10"
          }`}
        >
          The 22 Evaluation Factors
        </button>
        <button
          onClick={() => setActiveTab("summary")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "summary"
              ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              : "bg-white/5 text-muted hover:text-foreground hover:bg-white/10"
          }`}
        >
          Methodology Principles
        </button>
      </div>

      {/* TAB 1: REDACTED SCORECARD */}
      {activeTab === "scorecard" && (
        <div className="glass rounded-3xl p-6 md:p-10 border border-glass-border shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Lock className="w-3.5 h-3.5" /> Confidential · Client Name Redacted
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                GMA Key Considerations Analysis™ Sample Scorecard
              </h3>
              <p className="text-sm text-muted mt-1">
                Project Evaluation: <span className="font-mono text-cyan-300">[REDACTED OEM — SEC 48C / MESC]</span> · Federal Award Ceiling: $160,000,000
              </p>
            </div>
            <div className="text-right bg-black/40 px-6 py-3 rounded-2xl border border-glass-border">
              <div className="text-xs uppercase tracking-widest text-muted">Final KCA Composite</div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 font-display">93.4 / 100</div>
              <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Verdict: UNCONDITIONAL GO</div>
            </div>
          </div>

          {/* 4 PILLARS BREAKDOWN */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-black/30 border border-glass-border">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" /> 1. Strategic Alignment (Weight: 30%)
                </h4>
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded">29.1 / 30</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                Scoring against published agency FOA rubrics, statutory executive priorities (Justice40, domestic manufacturing content), and program officer focus areas.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-muted">
                  <span>Direct rubric keyword alignment</span>
                  <span className="text-emerald-400 font-semibold">10/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Economic benefit & job creation metrics</span>
                  <span className="text-emerald-400 font-semibold">9.5/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Priority geography & community impact</span>
                  <span className="text-emerald-400 font-semibold">9.6/10</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-black/30 border border-glass-border">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" /> 2. Technical Posture (Weight: 25%)
                </h4>
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded">23.8 / 25</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                Evaluation of technology readiness level (TRL 7+), operational milestones, environmental/NEPA permitting timeline, and engineering defensibility.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-muted">
                  <span>TRL verification and pilot testing data</span>
                  <span className="text-emerald-400 font-semibold">9.8/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>NEPA permitting risk timeline</span>
                  <span className="text-amber-400 font-semibold">8.2/10 (Mitigated)</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Intellectual property & patent protection</span>
                  <span className="text-emerald-400 font-semibold">10/10</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-black/30 border border-glass-border">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 3. Cost-Share & Financials (Weight: 25%)
                </h4>
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded">23.5 / 25</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                Audit track record, 2 CFR 200 indirect rate structure, and verification of required 50% non-federal matching commitments.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-muted">
                  <span>Matching fund commitment binding letters</span>
                  <span className="text-emerald-400 font-semibold">10/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Single audit compliance history</span>
                  <span className="text-emerald-400 font-semibold">9.5/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Budget justification cost realism</span>
                  <span className="text-emerald-400 font-semibold">9.0/10</span>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-2xl bg-black/30 border border-glass-border">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" /> 4. Reviewer Competitive Surface (Weight: 20%)
                </h4>
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded">17.0 / 20</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                Scoring against historical peer awardees, likely competitor proposals, political considerations, and anticipated reviewer panel biases.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-muted">
                  <span>Unique differentiation vs. 3 likely rebids</span>
                  <span className="text-emerald-400 font-semibold">9.0/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Letters of community & labor support</span>
                  <span className="text-emerald-400 font-semibold">8.5/10</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Supply chain resilience read</span>
                  <span className="text-amber-400 font-semibold">8.0/10</span>
                </div>
              </div>
            </div>
          </div>

          {/* REDACTED MEMO CONCLUSION */}
          <div className="mt-8 p-6 rounded-2xl bg-black/50 border border-white/10">
            <div className="text-xs uppercase tracking-widest text-cyan-300 font-semibold mb-2">
              Executive Debrief & Mitigation Roadmap
            </div>
            <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-mono">
              &quot;Project demonstrates tier-one merit suitability under Title III MESC guidelines. Primary vulnerability identified in Section 4.2 (NEPA Categorical Exclusion timeline). Action required: Pre-engage NEPA liaison 45 days prior to final volume lock. Proceed to Volume I narrative architecture immediately.&quot;
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: THE 22 FACTORS */}
      {activeTab === "factors" && (
        <div className="glass rounded-3xl p-6 md:p-10 border border-glass-border shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
            The 22 Weighted Key Considerations
          </h3>
          <p className="text-sm text-muted max-w-2xl mb-8 leading-relaxed">
            Every competitive grant proposal requires between 200 and 600 hours of executive and engineering effort. GMA&apos;s 22 factors ensure resources are only committed when the probability of award justifies the investment.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "01", name: "Statutory Eligibility Check", cat: "Eligibility", desc: "Rigorous verification against authorizing legislative language and FOA applicant categories." },
              { id: "02", name: "Evaluation Rubric Alignment", cat: "Scoring", desc: "Line-by-line mapping of proposal scope to published scoring percentages and reviewer criteria." },
              { id: "03", name: "Technology Readiness Level (TRL)", cat: "Technical", desc: "Audit of empirical pilot data and demonstrable prototype operational maturity." },
              { id: "04", name: "Non-Federal Match Capacity", cat: "Financial", desc: "Documented availability of required cost-share funds (cash or unencumbered third-party in-kind)." },
              { id: "05", name: "Prior Award Audit Record", cat: "Compliance", desc: "Single Audit (A-133/2 CFR 200 Subpart F) history, active SAM.gov status, and past performance." },
              { id: "06", name: "Permitting & NEPA Pathway", cat: "Execution", desc: "Realistic review of Environmental Assessments, SHPO approvals, and local site control." },
              { id: "07", name: "Competitor Landscape Scan", cat: "Competitive", desc: "Identification of incumbents, previous cohort awardees, and probable competing consortiums." },
              { id: "08", name: "Community Benefits Plan (CBP)", cat: "Policy", desc: "Quality of engagement with disadvantaged communities, local labor, and DEI commitments." },
              { id: "09", name: "Indirect Cost Structure", cat: "Financial", desc: "Federally Negotiated Indirect Cost Rate (NICRA) or acceptable de minimis cost justification." },
              { id: "10", name: "Key Personnel & SME Bench", cat: "Execution", desc: "Qualifications, biosketches, and committed time allocations of principal investigators and leads." },
              { id: "11", name: "Partnership & Subrecipient Posture", cat: "Strategic", desc: "Binding Memoranda of Understanding (MOUs), teaming agreements, and commercial letters of intent." },
              { id: "12", name: "Job Creation & Economic Multiplier", cat: "Impact", desc: "Quantifiable direct, indirect, and induced economic output modeled for reviewer defensibility." },
              { id: "13", name: "Domestic Sourcing & Buy America", cat: "Compliance", desc: "Adherence to Build America, Buy America (BABA) rules and domestic supply chain requirements." },
              { id: "14", name: "Budget Realism & Allowability", cat: "Financial", desc: "Detailed breakdown verifying no unallowable costs under 2 CFR 200.420-475." },
              { id: "15", name: "Commercialization / Offtake Path", cat: "Market", desc: "Demonstration of sustained revenue model, commercial offtake contracts, and market demand." },
              { id: "16", name: "Program Office Track Record", cat: "Agency", desc: "Analysis of agency division award preferences, discretionary patterns, and debrief transcripts." },
              { id: "17", name: "Milestone & Risk Schedule", cat: "Execution", desc: "Defensible Work Breakdown Structure (WBS) with built-in contingency buffers." },
              { id: "18", name: "Cybersecurity & Data Management", cat: "Security", desc: "NIST 800-171 / CMMC compliance posture for defense, energy, and infrastructure awards." },
              { id: "19", name: "Environmental Justice / Justice40", cat: "Policy", desc: "Specific measurement of direct benefits directed toward federally designated DAC communities." },
              { id: "20", name: "Downstream Capital Stack", cat: "Financial", desc: "Feasibility of subsequent loan guarantees (e.g. DOE LPO, USDA), tax credits, or equity financing." },
              { id: "21", name: "Internal Executive Runway", cat: "Capacity", desc: "Availability of client technical leads to participate in red-team reviews and data turnarounds." },
              { id: "22", name: "Post-Award Management Burden", cat: "Operations", desc: "Capacity to handle federal reporting, drawdowns, Davis-Bacon compliance, and grant closeout." },
            ].map((factor) => (
              <div key={factor.id} className="p-4 rounded-2xl bg-black/25 border border-glass-border">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono text-cyan-300 font-bold">FACTOR {factor.id}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-muted text-[11px]">{factor.cat}</span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mt-1 mb-1.5">{factor.name}</h4>
                <p className="text-xs text-muted leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: METHODOLOGY PRINCIPLES */}
      {activeTab === "summary" && (
        <div className="glass rounded-3xl p-6 md:p-10 border border-glass-border shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
            Why GMA Refuses to Write Grants Blind
          </h3>
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <div className="p-6 rounded-2xl bg-black/20 border border-glass-border">
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-display">01</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Eliminate Lost Causes</h4>
              <p className="text-sm text-muted leading-relaxed">
                Applying for federal grants where you lack required cost-share or statutory alignment burns hundreds of hours. A definitive &quot;No-Go&quot; saves six figures in proposal costs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-black/20 border border-glass-border">
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-display">02</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Score from the Reviewer&apos;s Chair</h4>
              <p className="text-sm text-muted leading-relaxed">
                Federal peer reviewers score using published point rubrics. The KCA reverse-engineers the rubric into a checklist your proposal must satisfy in every paragraph.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-black/20 border border-glass-border">
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-display">03</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Mitigate Before Drafting</h4>
              <p className="text-sm text-muted leading-relaxed">
                If the KCA reveals a weak community partnership or missing letter of support, we resolve it during the 5-day assessment window—not 48 hours before the deadline.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LEAD CAPTURE: DOWNLOAD THE 1-PAGE KCA GUIDE */}
      <div id="guide-download" className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/40 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {!unlocked ? (
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Download className="w-3.5 h-3.5" /> Free Strategic Executive Asset
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
                Download the Official 1-Page KCA Decision Guide
              </h3>
              <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">
                A concise executive reference summarizing the 22-factor Go/No-Go evaluation framework, scoring weights, and red-team checklist for leadership and grant committees.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs md:text-sm text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>The 22 Go/No-Go evaluation criteria condensed into 1 page</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Red-team reviewer scoring checklist for grant committees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Cost-share and compliance pre-flight checks</span>
                </li>
              </ul>
            </div>

            {/* FORM */}
            <form onSubmit={handleDownload} className="p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <input
                type="text"
                name="_website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label className="text-xs uppercase tracking-widest text-muted block mb-1.5 font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kristin Cooper"
                  className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted block mb-1.5 font-medium">Work Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted block mb-1.5 font-medium">Organization / Agency</label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. Apex Energy Partners"
                  className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>

              <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="mt-0.5 accent-cyan-400 w-4 h-4 rounded cursor-pointer"
                />
                <span className="text-xs text-muted leading-tight">
                  <strong className="text-foreground">Weekly Funding Digest:</strong> Receive GMA&apos;s curated analysis of newly opened federal/state funding opportunities every Tuesday.
                </span>
              </label>

              {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary text-sm py-3 font-semibold disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
              >
                {submitting ? "Processing Request…" : "Get Instant Access to 1-Page KCA Guide →"}
              </button>
              <p className="text-[11px] text-muted text-center mt-2">
                Instant digital access. No sales calls unless requested.
              </p>
            </form>
          </div>
        ) : (
          /* UNLOCKED 1-PAGE GUIDE VIEWER */
          <div className="relative z-10 animate-fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4" /> Download Authorized & Email Dispatched
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">
                  GMA 1-Page Key Considerations Analysis (KCA) Guide
                </h3>
                <p className="text-xs text-muted mt-1">A copy has also been sent to {email}. You can print or save this reference sheet below.</p>
              </div>
              <button
                onClick={() => window.print()}
                className="btn-secondary text-sm flex items-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print / Save as PDF
              </button>
            </div>

            {/* PRINTABLE ONE-PAGE DOCUMENT DISPLAY */}
            <div className="p-6 md:p-8 rounded-2xl bg-white text-zinc-900 shadow-2xl space-y-6 print:m-0 print:p-0">
              <div className="border-b-2 border-zinc-900 pb-4 flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-950 font-display">
                    GRANT MANAGEMENT ASSOCIATES
                  </h1>
                  <p className="text-xs uppercase tracking-widest text-zinc-600 font-semibold mt-0.5">
                    Proprietary Key Considerations Analysis (KCA) Decision Matrix · Since 2009
                  </p>
                </div>
                <div className="text-right text-xs text-zinc-600">
                  <div className="font-semibold text-zinc-900">Over $2.5B Secured</div>
                  <div>info@grantmanagementassoc.com</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="font-bold text-zinc-950 uppercase mb-1">1. Alignment (30%)</div>
                  <ul className="list-disc list-inside text-zinc-700 space-y-0.5">
                    <li>NOFO rubric points</li>
                    <li>Statutory priorities</li>
                    <li>Community benefits</li>
                    <li>Agency past awards</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="font-bold text-zinc-950 uppercase mb-1">2. Technical (25%)</div>
                  <ul className="list-disc list-inside text-zinc-700 space-y-0.5">
                    <li>TRL verified</li>
                    <li>NEPA permitting</li>
                    <li>SME capability bench</li>
                    <li>Patent/IP ownership</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="font-bold text-zinc-950 uppercase mb-1">3. Financial (25%)</div>
                  <ul className="list-disc list-inside text-zinc-700 space-y-0.5">
                    <li>20%-50% match bound</li>
                    <li>Single Audit clean</li>
                    <li>Cost realism budget</li>
                    <li>Downstream capital</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="font-bold text-zinc-950 uppercase mb-1">4. Reviewer (20%)</div>
                  <ul className="list-disc list-inside text-zinc-700 space-y-0.5">
                    <li>Likely re-bid threats</li>
                    <li>Regional politics</li>
                    <li>Labor support letters</li>
                    <li>Peer reviewer panel</li>
                  </ul>
                </div>
              </div>

              <div className="border border-zinc-300 p-4 rounded-lg bg-zinc-50 text-xs">
                <h4 className="font-bold text-zinc-950 uppercase tracking-wider mb-2">The 3-Way Decision Protocol</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div>
                    <span className="font-bold text-emerald-700">GO (Score ≥ 88):</span> Unconditional commitment. Opportunity perfectly maps to agency priorities, non-federal match is locked, and team holds distinct reviewer advantages.
                  </div>
                  <div>
                    <span className="font-bold text-amber-700">CONDITIONAL GO (72–87):</span> Proceed only if specific risk mitigations (e.g. binding MOU, NEPA pre-clearance, match commitment) are resolved within 14 days.
                  </div>
                  <div>
                    <span className="font-bold text-rose-700">NO-GO (Score &lt; 72):</span> Terminate pursuit immediately. Save estimated 300–500 internal proposal hours and redirect capital to higher-probability FOAs.
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-200 flex justify-between items-center">
                <span>© {new Date().getFullYear()} Grant Management Associates. All rights reserved.</span>
                <span>grantmanagementassoc.com · (530) 228-9235</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted mb-4">Want GMA to run a KCA on your active funding opportunity?</p>
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Schedule a 30-Minute Opportunity Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

