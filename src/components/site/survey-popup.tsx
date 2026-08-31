"use client";

import { useState, useEffect } from "react";

const sectors = [
  "Agriculture - Conservation & Natural Resources",
  "Agriculture - Food & Nutrition",
  "Agriculture - Forestry",
  "Agriculture - Rural Development",
  "Agriculture - Specialty Crops & Producers",
  "Agriculture - Water & Irrigation",
  "Arts & Humanities - Humanities",
  "Arts & Humanities - Museums & Libraries",
  "Broadband & Telecommunications - Broadband Deployment",
  "Broadband & Telecommunications - Digital Equity",
  "Broadband & Telecommunications - Telecommunications",
  "Business & Economic Development - General Business & Commerce",
  "Business & Economic Development - Economic Development District",
  "Business & Economic Development - Small Business",
  "Business & Economic Development - Regional Development",
  "Defense & National Security - DoD SBIR/STTR",
  "Defense & National Security - DoD ManTech & Industrial Base",
  "Defense & National Security - DoD Research (DEPSCoR / MURI / Basic Research)",
  "Defense & National Security - Defense Community Infrastructure (DCIP)",
  "Defense & National Security - Homeland Security & Cybersecurity",
  "Defense & National Security - Intelligence Community",
  "Defense & National Security - Veterans Services",
  "Defense & National Security - National Security — General",
  "Education - K-12",
  "Education - Universities & Colleges",
  "Education - Community Colleges",
  "Education - Early Childhood",
  "Education - Special Education & Disabilities",
  "Education - Career & Technical Education",
  "Energy - Clean & Renewable",
  "Energy - Solar",
  "Energy - Wind",
  "Energy - Geothermal",
  "Energy - Hydro & Marine",
  "Energy - Nuclear",
  "Energy - Hydrogen & Fuel Cells",
  "Energy - Grid Modernization",
  "Energy - Energy Efficiency & Buildings",
  "Energy - Industrial Decarbonization",
  "Energy - Oil & Gas",
  "Environment & Climate - Climate Resilience",
  "Environment & Climate - Pollution Prevention & Remediation",
  "Environment & Climate - Air Quality",
  "Environment & Climate - Habitat & Conservation",
  "Environment & Climate - Environmental Justice",
  "Finance & Capital Access - CDFI & Community Lending",
  "Finance & Capital Access - Investment & Equity",
  "Government — Federal",
  "Government — State",
  "Government — Local",
  "Government — City / Municipal",
  "Government — County",
  "Government — Special Districts & Authorities",
  "Healthcare & Biotech - Public Health",
  "Healthcare & Biotech - Behavioral & Mental Health",
  "Healthcare & Biotech - Hospitals & Health Systems",
  "Healthcare & Biotech - Community Health Centers / FQHCs",
  "Healthcare & Biotech - Biotech & Pharma",
  "Healthcare & Biotech - Medical Devices & Diagnostics",
  "Healthcare & Biotech - Rural Health",
  "Healthcare & Biotech - Aging & Long-Term Care",
  "Healthcare & Biotech - Healthcare Construction & Facilities",
  "Healthcare & Biotech - Healthcare Consulting & Services",
  "Healthcare & Biotech - Environmental Health",
  "Housing & Community Development - Affordable Housing",
  "Housing & Community Development - Community Development Block Grants (CDBG)",
  "Housing & Community Development - Homelessness Services",
  "Housing & Community Development - Public Housing & RAD",
  "Infrastructure — Water | Drinking Water",
  "Infrastructure — Water | Wastewater",
  "Infrastructure — Water | Stormwater & Floodplain",
  "Infrastructure — Water | Watershed & Source Protection",
  "Infrastructure — Water | Recycled Water & Conservation",
  "Manufacturing - Advanced Manufacturing",
  "Manufacturing - Semiconductors & Electronics",
  "Manufacturing - Robotics & Automation",
  "Manufacturing - Critical Materials Manufacturing",
  "Manufacturing - Industrial Decarbonization",
  "Tribes - Tribal Government",
  "Tribes - Tribal Energy",
  "Tribes - Tribal Health",
  "Tribes - Tribal Education",
  "Tribes - Tribal Environment & Climate",
  "Tribes - Tribal Transportation",
  "Tribes - Tribal Housing",
  "Transportation - Aviation",
  "Transportation - EV & Clean Vehicles",
  "Transportation - Highway & Roads",
  "Transportation - Maritime & Ports",
  "Transportation - Transit & Rail",
  "Transportation - Active Transportation & Safety",
  "Utilities - Electric Utilities",
  "Utilities - Water & Wastewater Utilities",
  "Utilities - Gas Utilities",
  "Utilities - Telecommunications Utilities",
  "Workforce Development - General",
  "Workforce Development - Apprenticeships",
  "Workforce Development - Sector-Based Training",
  "Workforce Development - Reentry & Justice-Involved",
  "Workforce Development - Youth Employment",
  "Technology - Artificial Intelligence & Data Science",
  "Technology - Cybersecurity",
  "Technology - Quantum & Computing",
  "Technology - Smart Communities & IoT",
  "Disaster Prevention & Resilience - Pre-Disaster Mitigation",
  "Disaster Prevention & Resilience - Post-Disaster Recovery",
  "Disaster Prevention & Resilience - Wildfire Resilience",
  "Lobbying & Legal - Federal Lobbying & Government Relations",
  "Lobbying & Legal - State Lobbying & Public Affairs",
  "Lobbying & Legal - Legal Services",
  "Lobbying & Legal - Public Policy / Think Tanks",
  "Accelerators & Incubators - Startup Accelerators",
  "Accelerators & Incubators - University Tech Transfer Offices",
  "Accelerators & Incubators - Regional Innovation Hubs",
  "Critical Minerals & Materials - Mining & Extraction",
  "Critical Minerals & Materials - Processing & Refining",
  "Critical Minerals & Materials - Battery Materials Supply Chain",
  "Critical Minerals & Materials - Recycling & Circular Economy",
  "GMA Team - Internal staff",
  "Grant Writing / Consulting - Peer firms & partners",
  "I'm not interested — please remove me from your list"
];

export function SurveyPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otherText, setOtherText] = useState("");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-survey", handleOpen);
    return () => window.removeEventListener("open-survey", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-background border border-glass-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-glass-border bg-glass-bg shrink-0">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">GMA Funding Interest Survey</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-foreground transition-colors p-2 -mr-2"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-glow/20 text-cyan-400 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Thank you!</h3>
              <p className="text-muted">Your response has been recorded. We'll be in touch with relevant grant opportunities.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <p className="text-sm text-muted">
                <span className="text-red-500">*</span> Indicates required question
              </p>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted mb-2">We'll use this to send you relevant grant opportunities matched to the sectors you select.</p>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please provide a valid email address."
                  placeholder="name@example.com"
                  className="w-full bg-black/20 border border-glass-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted mb-2">Your full name.</p>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/20 border border-glass-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>
              
              {/* Organization */}
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-medium text-foreground">
                  Organization <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted mb-2">Your company, agency, tribe, or institution.</p>
                <input 
                  type="text" 
                  id="organization" 
                  name="organization"
                  required
                  placeholder="GMA Inc."
                  className="w-full bg-black/20 border border-glass-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>

              {/* Sectors of Interest */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Sectors of Interest <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted mb-4">Check all that apply — we'll match you with grants in these areas</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {sectors.map((sector) => (
                    <label key={sector} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="sectors"
                        value={sector}
                        className="mt-1 w-4 h-4 rounded border-glass-border bg-black/20 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-0 bg-transparent shrink-0"
                      />
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors leading-tight">
                        {sector}
                      </span>
                    </label>
                  ))}
                  
                  {/* Other Option */}
                  <label className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="sectors"
                      value="Other"
                      className="mt-1 w-4 h-4 rounded border-glass-border bg-black/20 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-0 bg-transparent shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors leading-tight block mb-1">
                        Other:
                      </span>
                      <input 
                        type="text"
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                        placeholder="Please specify..."
                        className="w-full bg-black/20 border border-glass-border rounded px-3 py-1 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="pt-4 border-t border-glass-border">
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Submit Survey
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
    </div>
  );
}
