"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";

const arcStages = [
  { id: "01", title: "Idea & Validation", desc: "Identify a defense capability gap or urgent operational need. Validate against real program requirements and confirm mission fit with end users before building." },
  { id: "02", title: "Build the Core Team", desc: "Assemble a team with complementary DoD acquisition, technical, and BD expertise. Prioritize clearances, past performance, and credibility with program offices." },
  { id: "03", title: "Engage Technical Labs", desc: "Connect with AFRL, NRL, DARPA, and NSWC to validate technology readiness. These L2 evaluators shape requirements and can champion your capability upward." },
  { id: "04", title: "Win SBIR/STTR Funding", desc: "Use Phase I/II SBIR or STTR awards as low-risk seed funding and a foot in the door. Early wins build past performance for larger pursuits." },
  { id: "05", title: "Target PEOs & PMs", desc: "Build named relationships with Program Executive Offices and PMs — your L3-L4 advocates. Route every technical touchpoint to a specific PEO/PM." },
  { id: "06", title: "Rapid Prototyping via OTA", desc: "Leverage Other Transaction Authority to move fast, bypass FAR friction, and retain flexible IP. Use OTAs to demonstrate capability and set up production." },
  { id: "07", title: "Scale via Contract Vehicles", desc: "Pursue MTA rapid fielding and IDIQ/GWAC vehicles for long-term purchasing once institutional adoption begins. Build ceiling capacity for sustained revenue." },
  { id: "08", title: "Secure Phase III Sole-Source", desc: "Leverage 15 U.S.C. § 638 sole-source rights from completed SBIR work. Pursue non-competitive Phase III funded from RDT&E, procurement, or O&M." },
  { id: "09", title: "Institutional Adoption", desc: "Convert pilots and prototypes into an established program of record. Strengthen governance, financial reporting, and compliance for sustained investment." },
  { id: "10", title: "Enduring Defense Powerhouse", desc: "Diversify across domains and services, sustain multi-year contract ceilings, and maintain innovation velocity beyond any single program or administration." },
];

const caseStudies = [
  { id: "01", category: "BUILD-FIRST STRATEGY", title: "Anduril", desc: "How building fully functional systems on private capital — before a formal requirement exists — compresses the government evaluation cycle." },
  { id: "02", category: "PLATFORM-AGNOSTIC AUTONOMY", title: "Shield AI", desc: "Why decoupling the Hivemind autonomy stack from its own hardware turned every prime's airframe into a potential adoption path." },
  { id: "03", category: "STATUTORY PROTECTION", title: "Palantir", desc: "What the DCGS-A2 protest actually proves about commercial-item preference — and why it's a last resort, not a go-to-market strategy." },
  { id: "04", category: "PRODUCTION OTA", title: "Overland", desc: "How building manufacturing capacity ahead of a $20M production OTA award turned a prototype win into a scaled program." },
  { id: "05", category: "APFIT TO SERIES B", title: "Darkhive", desc: "Why a $49.7M APFIT award became a fundraising asset — and what it signaled to a returning prime-affiliated investor." },
  { id: "06", category: "30+ MORE PROFILES", title: "The full market map", desc: "Founder and company profiles across Space, Aviation, Robotics, and Defense Hardware — benchmarked against the same capture curve." },
];

export default function DefenseTechnologyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          serviceInterest: "Defense Playbook Download",
          message: "Lead captured from Defense & Technology playbook download form.",
        }),
      });
      router.push("/industries/defense/thank-you");
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SECTION 1: HERO & FORM (Light Background) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-brand-light text-brand-dark">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/5 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Defense & Technology" }]} />
          
          <div className="grid lg:grid-cols-[1fr_450px] gap-16 mt-12 items-start">
            {/* Left Column */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-[#0f2142] mb-12">
                Why it's the first of its kind
              </h1>
              
              <div className="space-y-10">
                {/* Point 1 */}
                <div className="flex gap-6 items-start border-b border-black/5 pb-8">
                  <div className="text-lg font-bold text-amber-500">01</div>
                  <div>
                    <p className="text-lg text-black/80 leading-relaxed">
                      <strong>Built on evidence, not assertion.</strong> A quantitative PM Risk Matrix and a Five Levels of Advocates model replace generic BD advice with what a Program Manager is actually scoring.
                    </p>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div className="flex gap-6 items-start border-b border-black/5 pb-8">
                  <div className="text-lg font-bold text-amber-500">02</div>
                  <div>
                    <p className="text-lg text-black/80 leading-relaxed">
                      <strong>Covers ground usually kept separate.</strong> Pentagon capture, Capitol Hill strategy, and post-2026-NDAA compliance thresholds (CMMC 2.0, CAS, certified cost/pricing data) in one connected framework.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-6 items-start border-b border-black/5 pb-8">
                  <div className="text-lg font-bold text-amber-500">03</div>
                  <div>
                    <p className="text-lg text-black/80 leading-relaxed">
                      <strong>Grounded in named, sourced case studies.</strong> Anduril, Shield AI, Palantir, Overland, and Darkhive — what each company actually did, and the lesson a founder can act on.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-6 items-start border-b border-black/5 pb-8">
                  <div className="text-lg font-bold text-amber-500">04</div>
                  <div>
                    <p className="text-lg text-black/80 leading-relaxed">
                      <strong>A living market map.</strong> 30+ founder and company profiles across Space, Aviation, Robotics, and Defense Hardware, benchmarked against the same maturity curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 sticky top-32">
              <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Free Download</div>
              <h2 className="text-3xl font-bold uppercase tracking-wide text-[#0f2142] mb-4">Get the playbook</h2>
              <p className="text-black/60 mb-8 text-sm leading-relaxed">
                Enter your details and the full PDF is yours — no cost, no obligation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-black/80 mb-2">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Jane Doe"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded bg-white border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-[#0f2142] focus:ring-1 focus:ring-[#0f2142] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-black/80 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Acme Defense Technologies"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded bg-white border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-[#0f2142] focus:ring-1 focus:ring-[#0f2142] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black/80 mb-2">Work email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@acmedefense.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded bg-white border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-[#0f2142] focus:ring-1 focus:ring-[#0f2142] transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#0f2142] hover:bg-[#1a325a] text-white font-semibold py-3.5 px-4 rounded transition-colors shadow-lg shadow-[#0f2142]/20 disabled:opacity-50">
                    {isSubmitting ? "Submitting..." : "Get the playbook"}
                  </button>
                </div>
                
                <p className="text-[11px] text-black/40 mt-4 leading-relaxed text-center">
                  By downloading, you agree to receive occasional updates from GMA's Defense & Tech practice. Unsubscribe anytime. We don't sell your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE COMPLETE ARC (Dark Background) */}
      <section className="bg-[#0b1325] text-white py-24 border-t border-white/5 relative">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">The Complete Arc</div>
          <h2 className="text-4xl font-bold uppercase tracking-wide mb-6">Ten Stages, One Framework</h2>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-16">
            From identifying a defense capability gap to becoming an enduring, diversified defense industrial powerhouse — every stage in the playbook maps to this sequence.
          </p>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden text-center text-black">
            <div className="bg-slate-100 py-4 border-b border-slate-200">
              <h3 className="text-[#0f2142] font-bold text-lg">Building a Defense Industrial Powerhouse</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-200">
              {arcStages.map((stage) => (
                <div key={stage.id} className="bg-white p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#2a68a5] rotate-45 flex items-center justify-center mb-8 shadow-sm">
                    {/* Inner content is counter-rotated to stay upright, but we can just put a number below it instead as in design */}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-500 mb-4 bg-white z-10 -mt-12">
                    {stage.id}
                  </div>
                  <h4 className="font-bold text-[#0f2142] text-[15px] mb-3 leading-snug">{stage.title}</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CASE STUDIES (Light Background) */}
      <section className="bg-[#fcfbf9] text-brand-dark py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_600px] gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-[#0f2142] mb-6">
                Named Case Studies, Not Composites
              </h2>
              <p className="text-lg text-black/70 leading-relaxed max-w-xl">
                Every lesson in the playbook is tied to a specific, sourced example — what the company actually did, and what a founder can replicate.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100">
                {/* Robot Dog Image Placeholder */}
                <Image src="/images/generated/11.png" alt="Defense Robotics Example" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-md border border-slate-100 p-8 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-full bg-[#0f2142] text-white flex items-center justify-center text-xs font-bold mb-6">
                  {cs.id}
                </div>
                <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-3">
                  {cs.category}
                </div>
                <h3 className="text-xl font-bold text-[#0f2142] mb-4">{cs.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
