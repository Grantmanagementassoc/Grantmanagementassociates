"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Droplets, CheckCircle, ArrowRight, ShieldCheck, FileText, BarChart3, Users } from "lucide-react";

const captureStages = [
  {
    id: "01",
    title: "Engineering & Preliminary Design",
    desc: "Achieve 30% design and a completed Preliminary Engineering Report (PER). Funders prioritize shovel-ready capital projects with validated cost estimations."
  },
  {
    id: "02",
    title: "Environmental & Statutory Clearance",
    desc: "Complete NEPA/CEQA environmental reviews early, and build compliance roadmaps for Build America, Buy America (BABA) and Davis-Bacon prevailing wages."
  },
  {
    id: "03",
    title: "Disadvantaged Community (DAC) Scoring",
    desc: "Map service area census tracts against state and federal affordability criteria to qualify for 100% principal forgiveness and non-repayable grant allocations."
  },
  {
    id: "04",
    title: "Congressional & Sponsor Advocacy",
    desc: "Engage House and Senate delegations for Congressionally Directed Spending (CDS) requests before the annual March statutory submission windows."
  },
  {
    id: "05",
    title: "Multi-Funder Capital Stacking",
    desc: "Layer State Revolving Funds (SRF) with WIFIA loans, USDA Rural Development grants, and regional resilience awards to close the municipal funding gap."
  }
];

const casePoints = [
  {
    title: "Congressionally Directed Spending (CDS)",
    metric: "58%",
    desc: "Of base annual SRF appropriations is now earmarked through member requests. The playbook provides exact statutory deadlines and submission rubrics."
  },
  {
    title: "EPA WIFIA Direct Loans",
    metric: "$5B+",
    desc: "Low-interest, 35-year federal credit financing that covers up to 49% of project costs with flexible repayment structures deferred up to 5 years."
  },
  {
    title: "State Revolving Fund (SRF) Positioning",
    metric: "100%",
    desc: "Methods to climb state Intended Use Plans (IUPs) and Project Priority Lists (PPLs) to maximize principal forgiveness post-IIJA."
  }
];

export default function WaterInfrastructurePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [renderedAt] = useState(() => Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          serviceInterest: "Water Infrastructure Playbook Download",
          message: "Lead captured from Water Infrastructure 'After the Cliff' playbook download form.",
          _rendered_at: renderedAt,
        }),
      });
      router.push("/industries/water-infrastructure/thank-you");
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#08182b] text-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-24 pt-48 md:pt-56 overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/generated/40.png" 
            alt="Water Infrastructure" 
            fill 
            className="object-cover opacity-25 mix-blend-luminosity" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08182b] via-[#08182b]/85 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 w-full">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            WATER INFRASTRUCTURE PRACTICE
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-8 max-w-5xl leading-[0.9]">
            AFTER THE CLIFF:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-500">
              POST-IIJA WATER FUNDING
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-12">
            A comprehensive 50-page tactical playbook for municipal utilities, water districts, and irrigation systems to secure federal and state capital as the Bipartisan Infrastructure Law advance appropriations expire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
            <button 
              onClick={() => document.getElementById('playbook-form')?.scrollIntoView({ behavior: 'smooth' })} 
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wide py-4 px-8 rounded-lg transition-colors text-sm w-full sm:w-auto text-center shadow-lg shadow-cyan-500/20"
            >
              Get the Playbook Free →
            </button>
            <div className="text-white/60 text-sm">
              Free 50-page PDF · Instant access
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50</div>
              <div className="text-sm text-white/70">Pages of actionable strategy & grant mechanics</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$10.2B</div>
              <div className="text-sm text-white/70">Expiring annual IIJA appropriations analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">5-Stage</div>
              <div className="text-sm text-white/70">Capital stacking & advocacy framework</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT / THE CLIFF */}
      <section className="bg-white text-slate-950 py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold text-cyan-700 uppercase tracking-widest mb-3">Executive Summary</div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              The End of IIJA is Not a Dead End. It is a Change in Grant Mechanics.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Between FY2022 and FY2026, the Bipartisan Infrastructure Law injected unprecedented capital into state revolving funds. Starting in FY2027, annual advance appropriations have expired. Utilities and municipalities that rely on standard state priority lists alone face a steep capital drop.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {casePoints.map((pt) => (
              <div key={pt.title} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-extrabold text-cyan-600 mb-2">{pt.metric}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pt.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 5-STAGE CAPTURE MODEL */}
      <section className="bg-[#0c223c] py-24 border-t border-slate-800">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Framework</div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
              The 5-Stage Water Capital Capture Model
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              How leading utilities and districts are proactively securing competitive federal awards, Congressionally Directed Spending, and blended loan packages.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {captureStages.map((stage) => (
              <div key={stage.id} className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-colors">
                <div>
                  <div className="text-xs font-bold text-cyan-400 mb-4 tracking-wider">STAGE {stage.id}</div>
                  <h4 className="font-bold text-white text-base mb-3 leading-snug">{stage.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FORM SECTION */}
      <section id="playbook-form" className="relative py-24 bg-[#08182b] border-t border-slate-800">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">
            {/* Left Column: Why Download */}
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">What's Inside</div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-10 leading-snug">
                Essential Intelligence for Municipal & Utility Leaders
              </h2>

              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">State-by-State Disadvantaged Criteria</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Detailed breakdowns of EPA and state affordability benchmarks, MHI thresholds, and primary factors that unlock 100% principal forgiveness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">CDS Application Calendars & Rubrics</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Exact step-by-step guidance for congressional member requests, matching fund requirements, and House/Senate committee deadlines.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">WIFIA & CWSRF/DWSRF Integration</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      How to pair low-interest federal credit with state revolving loans and regional grants without triggering statutory double-counting limits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Proven Public Wins & Sourced Case Studies</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Over $13.7M in recent GMA client wins across flood control, groundwater planning, levee protection, and watershed restoration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Download Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 sticky top-32 text-slate-900 border border-slate-100">
              <div className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-2">Free Download</div>
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900 mb-2">
                Download the Playbook
              </h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                Enter your details to receive immediate access to the 50-page PDF report.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Jane Doe"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Organization / Utility</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="City Water Authority / Irrigation District"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@waterdistrict.org"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-lg shadow-cyan-600/20 disabled:opacity-50 text-sm uppercase tracking-wide"
                  >
                    {isSubmitting ? "Accessing..." : "Download Playbook (PDF)"}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed text-center">
                  By downloading, you agree to receive periodic water infrastructure funding alerts from GMA. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
