// Central content library extracted & synthesized from grantmanagementassoc.com
// Represents the "single source of truth" for the marketing site.

export const site = {
  name: "Grant Management Associates",
  short: "GMA",
  tagline: "Funding Intelligence. Winning Strategy.",
  description:
    "Grant Management Associates is a funding intelligence and strategy firm that has helped organizations secure over $2.5 billion in federal, state, and foundation funding since 2009.",
  url: "https://www.grantmanagementassoc.com",
  founded: 2009,
  totalSecured: "$2.5B+",
  winRate: "90.2%",
  activePrograms: "10,000+",
  yearsExperience: new Date().getFullYear() - 2009,
  phone: "+1 (877) 462-4636",
  phoneHref: "tel:+18774624636",
  email: "info@grantmanagementassoc.com",
  emailHref: "mailto:info@grantmanagementassoc.com",
  addresses: [
    {
      city: "Salt Lake City",
      state: "UT",
      line1: "175 S Main St, Suite 1440",
      zip: "84111",
      label: "Headquarters",
    },
    {
      city: "Washington",
      state: "DC",
      line1: "1250 Connecticut Ave NW, Suite 700",
      zip: "20036",
      label: "Federal Affairs",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/grant-management-associates",
    twitter: "https://twitter.com/grantmgmtassoc",
    facebook: "https://www.facebook.com/grantmanagementassoc",
  },
  certifications: ["WOSB — Women-Owned Small Business", "NWBOC Women's Business Enterprise"],
};

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href?: string; children?: NavLink[] };

export const primaryNav: NavGroup[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Grant Writing & Management", href: "/services/grant-writing", description: "End-to-end proposal development, submission, and post-award management." },
      { label: "Funding Identification", href: "/services/funding-identification", description: "AI-matched federal, state, and foundation opportunities." },
      { label: "Go / No-Go Analysis", href: "/services/go-no-go", description: "Proprietary Key Considerations Analysis before you invest." },
      { label: "Strategic Alliances", href: "/services/strategic-alliances", description: "Offer grant services to your clients as a GMA partner." },
      { label: "AI-Powered Grant Matching", href: "/services/ai-matching", description: "Match your project to 10,000+ live programs in minutes." },
      { label: "Federal Grant Consulting", href: "/services/federal", description: "DOE, DOT, USDA, EPA, HHS, DoD and more." },
      { label: "State & Local Support", href: "/services/state-local", description: "Deep bench across all 50 states." },
      { label: "Nonprofit Services", href: "/services/nonprofit", description: "MissionMomentum retainer-based advisory." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Clean Energy & Sustainability", href: "/industries/clean-energy" },
      { label: "Transportation & Transit", href: "/industries/transportation" },
      { label: "Technology & Innovation", href: "/industries/technology" },
      { label: "Healthcare & Research", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Nonprofits & Community", href: "/industries/nonprofits" },
      { label: "Tribal Nations", href: "/industries/tribal" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Responsible AI", href: "/responsible-ai" },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Grant Writing", href: "/services/grant-writing" },
      { label: "Funding Identification", href: "/services/funding-identification" },
      { label: "Go / No-Go Analysis", href: "/services/go-no-go" },
      { label: "AI Grant Matching", href: "/services/ai-matching" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Insights & News", href: "/resources" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Funding Assessment", href: "/assessment" },
      { label: "Responsible AI", href: "/responsible-ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: string; // emoji or symbol
  outcomes: string[];
  process: { title: string; body: string }[];
  deliverables: string[];
  timeline: string;
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "grant-writing",
    title: "Grant Writing & Management",
    tagline: "Proposals that win — and awards that get managed to close-out.",
    summary:
      "Full lifecycle proposal development, submission, and post-award management. Our writers average 12+ years of federal experience and pair with subject-matter experts across energy, transportation, healthcare, and tech.",
    icon: "✍️",
    outcomes: [
      "90.2% overall win rate across submitted proposals",
      "Compliant, review-ready packages every time",
      "Post-award reporting, drawdowns, and audit support",
    ],
    process: [
      { title: "Kickoff & Compliance Matrix", body: "We decode the FOA/NOFO into a section-by-section outline mapped to reviewer criteria." },
      { title: "Narrative Development", body: "Subject-matter expert interviews, technical writing, budget build, and letters of support." },
      { title: "Red-Team Review", body: "Independent reviewers score against the published rubric and stress-test weak links." },
      { title: "Submission & Debrief", body: "Grants.gov / SAM.gov / agency portal submission with confirmation, followed by a formal debrief." },
      { title: "Post-Award Management", body: "Federal Financial Reports, performance progress reports, and audit-ready file management." },
    ],
    deliverables: ["Compliance matrix", "Technical narrative", "Detailed budget & justification", "Letters of support", "Submission package"],
    timeline: "6–14 weeks depending on FOA complexity",
    faq: [
      { q: "Do you work success-based?", a: "No. Ethical funders — and most federal agencies — discourage contingent fees. We charge fixed or hourly so our incentives stay aligned with quality." },
      { q: "Can you write for a proposal already in progress?", a: "Yes. We routinely parachute in for red-team reviews or to finish narratives when internal teams run out of runway." },
    ],
  },
  {
    slug: "funding-identification",
    title: "Funding Identification",
    tagline: "Stop hunting. Start matching.",
    summary:
      "Our AI-powered Grant Matching Engine continuously scans 10,000+ federal, state, and foundation programs and ranks them by fit, competitiveness, and effort-to-award ratio.",
    icon: "🎯",
    outcomes: ["Weekly opportunity briefings", "Ranked pipeline by probability", "Deadline calendar with reminders"],
    process: [
      { title: "Profile Build", body: "We ingest your capabilities, geography, project pipeline, and prior award history." },
      { title: "AI Matching", body: "Semantic + rules-based matching across 10,000+ open programs, refreshed daily." },
      { title: "Analyst Review", body: "Human analysts filter noise, add strategic context, and rank by real-world fit." },
      { title: "Delivery", body: "A concise weekly brief with the top 5–10 opportunities you should act on." },
    ],
    deliverables: ["Live pipeline dashboard", "Weekly funding brief", "Deadline calendar"],
    timeline: "Ongoing subscription — first brief within 14 days",
    faq: [
      { q: "How is this different from Grants.gov alerts?", a: "Keyword alerts are noisy. Our engine understands your capabilities and scores probability, not just topical fit." },
    ],
  },
  {
    slug: "go-no-go",
    title: "Go / No-Go Analysis",
    tagline: "Know before you commit — save six figures in wasted proposal cost.",
    summary:
      "Our proprietary Key Considerations Analysis evaluates 22 weighted factors and returns a Go, No-Go, or Conditional recommendation in 5 business days.",
    icon: "🧭",
    outcomes: ["Objective, data-driven recommendation", "Competitive landscape scan", "Effort vs. probability score"],
    process: [
      { title: "FOA Decomposition", body: "We break down the funding opportunity against your project's real posture." },
      { title: "Competitive Scan", body: "Historical awardees, likely rebids, and known agency preferences." },
      { title: "Recommendation Report", body: "A crisp 6–8 page memo with a defensible Go / No-Go call and mitigation paths." },
    ],
    deliverables: ["Key Considerations Analysis report", "Competitive landscape map", "Executive briefing call"],
    timeline: "5 business days",
    faq: [
      { q: "What if the answer is No-Go?", a: "Then we've saved you 300+ hours of internal effort. We'll surface adjacent opportunities where your odds are meaningfully higher." },
    ],
  },
  {
    slug: "strategic-alliances",
    title: "Strategic Alliances",
    tagline: "White-label grant services for consultancies, law firms, and CPAs.",
    summary:
      "Extend your service line without hiring a grants team. Refer, co-brand, or fully white-label our capabilities.",
    icon: "🤝",
    outcomes: ["Recurring referral revenue", "Client retention lift", "Zero delivery overhead"],
    process: [
      { title: "Alliance Design", body: "We map your client base to funding categories where GMA has proven wins." },
      { title: "Playbook & Enablement", body: "Talk tracks, one-pagers, and joint-selling training for your team." },
      { title: "Delivery & Reporting", body: "White-glove delivery under your brand with monthly performance reports." },
    ],
    deliverables: ["Alliance agreement", "Co-branded assets", "Quarterly business review"],
    timeline: "Alliance live in 30 days",
    faq: [
      { q: "Do you compete with our practice?", a: "No. GMA is grants-only — we don't touch M&A, tax, litigation, or general strategy. Alliances are non-competitive by design." },
    ],
  },
  {
    slug: "ai-matching",
    title: "AI-Powered Grant Matching",
    tagline: "10,000+ programs. Your best fit. In minutes.",
    summary:
      "GMA's proprietary matching engine combines semantic understanding of your capabilities with structured scoring across eligibility, geography, budget, and historical award patterns.",
    icon: "🧠",
    outcomes: ["Top-10 ranked opportunities", "Fit + probability scoring", "Explainable match reasoning"],
    process: [
      { title: "Ingest", body: "Your capability statement, project descriptions, and org profile." },
      { title: "Match", body: "Real-time scoring across 10,000+ live programs." },
      { title: "Explain", body: "Every match includes a plain-English rationale — no black boxes." },
    ],
    deliverables: ["Match report", "Rationale for each match", "Suggested next actions"],
    timeline: "Same-day preliminary; 5 business days for analyst-reviewed final",
    faq: [
      { q: "Where does the AI run?", a: "Exclusively U.S.-based, SOC 2 partners. See our Responsible AI page for full detail." },
    ],
  },
  {
    slug: "federal",
    title: "Federal Grant Consulting",
    tagline: "DOE, DOT, USDA, EPA, HHS, DoD, NSF — we speak agency.",
    summary:
      "Deep bench of former federal program officers and career grants professionals. We know how reviewers actually score.",
    icon: "🏛️",
    outcomes: ["Reviewer-perspective narrative", "Agency-specific formatting", "Successful debriefs when we don't win"],
    process: [
      { title: "Agency Strategy", body: "Which program office, which BAA, which pre-application call — we plot the sequence." },
      { title: "Narrative & Budget", body: "Written to the agency's actual scoring rubric, not just the FOA." },
      { title: "Submission", body: "Grants.gov, SAM.gov, agency portals — clean submission every time." },
    ],
    deliverables: ["Agency intel memo", "Full proposal package", "Post-submission tracking"],
    timeline: "8–16 weeks depending on program",
    faq: [{ q: "Which agencies do you cover?", a: "All federal grantmaking agencies. Our largest wins have been at DOE, DOT, USDA, EPA, HHS, DoD, and Commerce (EDA/NIST)." }],
  },
  {
    slug: "state-local",
    title: "State & Local Grant Support",
    tagline: "50 states. Thousands of municipal programs. One partner.",
    summary:
      "State DOTs, energy offices, workforce boards, and local governments each move differently. We've written and won in all 50 states.",
    icon: "🗺️",
    outcomes: ["State-specific eligibility", "Local match & partnership structuring", "Legislative & appropriations tracking"],
    process: [
      { title: "State Scan", body: "Current SFY funding calendars and appropriations." },
      { title: "Local Partnerships", body: "MOUs, letters, and cost-share structuring." },
      { title: "Delivery", body: "Portal-specific submissions and follow-through." },
    ],
    deliverables: ["State opportunity brief", "Full proposal", "Legislative tracking updates"],
    timeline: "4–10 weeks",
    faq: [{ q: "Do you handle earmarks / CDS?", a: "Yes — Community Project Funding requests are a growing part of our practice." }],
  },
  {
    slug: "nonprofit",
    title: "Nonprofit Grant Services (MissionMomentum)",
    tagline: "Retainer-based grant advisory for mission-driven organizations.",
    summary:
      "MissionMomentum by GMA is a monthly retainer program built for nonprofits that need consistent grant capacity without a full-time in-house team.",
    icon: "💜",
    outcomes: ["Steady grant pipeline", "Predictable monthly cost", "Foundation + federal coverage"],
    process: [
      { title: "Onboarding", body: "Program inventory, funder landscape, and 12-month roadmap." },
      { title: "Monthly Cadence", body: "Prospecting, LOIs, full proposals, and reporting on a predictable rhythm." },
      { title: "Quarterly Strategy", body: "Portfolio review and board-ready reporting." },
    ],
    deliverables: ["12-month funding roadmap", "Monthly proposal deliverables", "Quarterly board report"],
    timeline: "Ongoing retainer",
    faq: [{ q: "What's the minimum commitment?", a: "6 months — grantmaking cycles simply don't move faster than that." }],
  },
];

export type Industry = {
  slug: string;
  name: string;
  icon: string;
  blurb: string;
  detail: string;
  stats: { label: string; value: string }[];
  agencies: string[];
};

export const industries: Industry[] = [
  {
    slug: "clean-energy",
    name: "Clean Energy & Sustainability",
    icon: "⚡",
    blurb: "IRA, IIJA, and DOE Loan Programs — we've navigated them from day one.",
    detail:
      "From utility-scale solar and battery storage to advanced nuclear and hydrogen, GMA has secured hundreds of millions in DOE, DOE-LPO, and EPA funding for developers, utilities, and OEMs.",
    stats: [{ label: "Sector funding secured", value: "$680M+" }, { label: "DOE programs won", value: "24" }],
    agencies: ["DOE", "DOE-LPO", "EPA", "USDA Rural Energy"],
  },
  {
    slug: "transportation",
    name: "Transportation & Transit",
    icon: "🚊",
    blurb: "FTA Low-No, RAISE, CRISI, INFRA, Bridge, Charging & Fueling — done, done, done.",
    detail:
      "GMA has secured transformative funding for transit agencies, ports, rail operators, and airports — including a $117M FTA Low-No award for Golden Empire Transit District.",
    stats: [{ label: "Transit awards", value: "$310M+" }, { label: "Zero-emission bus deployments", value: "18" }],
    agencies: ["FTA", "FRA", "FHWA", "MARAD", "FAA"],
  },
  {
    slug: "technology",
    name: "Technology & Innovation",
    icon: "🛰️",
    blurb: "CHIPS, NIST, NSF, DoD RDT&E — bringing federal capital to deep tech.",
    detail:
      "Wireless infrastructure, semiconductors, quantum, AI, and advanced manufacturing. Our JMA Wireless win alone unlocked $43.9M under the CHIPS ecosystem.",
    stats: [{ label: "Deep-tech awards", value: "$220M+" }, { label: "CHIPS applications", value: "11" }],
    agencies: ["NIST", "NSF", "DoD", "DARPA", "Commerce"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Research",
    icon: "🧬",
    blurb: "NIH, HRSA, CDC, BARDA — from R01s to translational research consortia.",
    detail:
      "Academic medical centers, health systems, and biotech ventures rely on GMA for NIH, HRSA, and ARPA-H proposals.",
    stats: [{ label: "Research awards", value: "$140M+" }, { label: "NIH R-series funded", value: "37" }],
    agencies: ["NIH", "HRSA", "CDC", "ARPA-H", "BARDA"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "🎓",
    blurb: "ED, NSF, Perkins, TRIO, GEAR UP, and workforce Title I/II.",
    detail: "K-12 districts, community colleges, HBCUs, TCUs, and R1 universities — GMA supports the full spectrum of education funding.",
    stats: [{ label: "Education awards", value: "$95M+" }, { label: "Districts served", value: "40+" }],
    agencies: ["ED", "NSF", "DOL", "IMLS"],
  },
  {
    slug: "nonprofits",
    name: "Nonprofits & Community Development",
    icon: "🌱",
    blurb: "MissionMomentum brings predictable grant capacity to lean development teams.",
    detail: "Community-based organizations, CDFIs, and mid-market nonprofits get right-sized advisory that grows with the mission.",
    stats: [{ label: "Nonprofits served", value: "180+" }, { label: "Foundation grants", value: "$62M+" }],
    agencies: ["HHS", "HUD", "USDA", "State foundations"],
  },
  {
    slug: "tribal",
    name: "Tribal Nations",
    icon: "🪶",
    blurb: "BIA, IHS, EPA-IEED, DOE-IE, and Tribal set-asides across IIJA/IRA.",
    detail: "GMA works in partnership with Tribal governments and enterprises with cultural humility, sovereignty-first process, and deep federal expertise.",
    stats: [{ label: "Tribal partners", value: "22" }, { label: "Awards secured", value: "$85M+" }],
    agencies: ["BIA", "IHS", "DOE-IE", "EPA-IEED", "USDA-RD"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "⚙️",
    blurb: "MEP, DOE-AMMTO, DoD IBAS, EDA Build to Scale — capital for U.S. manufacturing.",
    detail: "Our $160M Microporous (MP Assets) DOE award is a signature manufacturing win — repeatable playbook now applied across multiple OEMs.",
    stats: [{ label: "Manufacturing awards", value: "$430M+" }, { label: "Jobs supported", value: "5,200" }],
    agencies: ["DOE-AMMTO", "NIST MEP", "EDA", "DoD IBAS"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string; // slug reference
  amount: string;
  amountNumber: number; // in USD for filtering
  year: number;
  type: "Federal" | "State" | "Local" | "Private";
  agency: string;
  challenge: string;
  approach: string;
  result: string;
  quote?: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mp-assets-microporous",
    client: "MP Assets Corporation (Microporous)",
    industry: "manufacturing",
    amount: "$160,000,000",
    amountNumber: 160_000_000,
    year: 2023,
    type: "Federal",
    agency: "DOE Battery Manufacturing (IIJA §40207)",
    challenge:
      "Scale U.S. production of lithium-ion battery separators to reduce reliance on foreign supply — with a compressed FOA timeline and a highly technical NEPA posture.",
    approach:
      "GMA led a 60-day sprint: technical narrative, budget, community benefits plan, and NEPA-ready siting narrative. Coordinated 14 letters of support from utilities, state officials, and OEMs.",
    result:
      "$160M award — one of the largest DOE Battery Manufacturing grants in the program. Enabled a new manufacturing facility and hundreds of new jobs.",
    quote: {
      text: "GMA didn't just write a proposal — they orchestrated the entire submission across our engineering, legal, and executive teams.",
      author: "Program Director",
      role: "MP Assets Corporation",
    },
  },
  {
    slug: "golden-empire-transit",
    client: "Golden Empire Transit District",
    industry: "transportation",
    amount: "$117,877,595",
    amountNumber: 117_877_595,
    year: 2024,
    type: "Federal",
    agency: "FTA Low-No Emission Vehicle Program",
    challenge:
      "Fully electrify a mid-sized California transit fleet, including depot infrastructure, workforce retraining, and grid interconnection — under an oversubscribed program.",
    approach:
      "GMA structured a phased 5-year deployment, secured 22 partnership commitments, and built a defensible operational cost model.",
    result: "$117.9M — a top-quartile Low-No award enabling full fleet electrification.",
  },
  {
    slug: "jma-wireless-chips",
    client: "JMA Wireless",
    industry: "technology",
    amount: "$43,940,612",
    amountNumber: 43_940_612,
    year: 2024,
    type: "Federal",
    agency: "Commerce / NTIA — Public Wireless Supply Chain Innovation Fund",
    challenge:
      "Position a U.S.-owned Open RAN manufacturer for federal support in a crowded field of global incumbents.",
    approach:
      "GMA framed the national-security narrative, engineered the cost-share model, and coordinated Congressional letters.",
    result: "$43.9M — enabling expanded U.S. Open RAN manufacturing capacity and R&D.",
  },
  {
    slug: "berkshire-hathaway-energy",
    client: "Berkshire Hathaway Energy / MidAmerican",
    industry: "clean-energy",
    amount: "$37,800,000",
    amountNumber: 37_800_000,
    year: 2023,
    type: "Federal",
    agency: "DOE — Grid Resilience & Innovation Partnerships (GRIP)",
    challenge:
      "Compete against 400+ applicants for a limited pool of GRIP funding with a novel grid-resilience demonstration.",
    approach:
      "GMA led the technical narrative, benefit-cost analysis, and community benefits plan on a 90-day sprint.",
    result: "$37.8M — funding a multi-state grid resilience deployment.",
  },
  {
    slug: "tribal-nation-microgrid",
    client: "Confidential Tribal Nation",
    industry: "tribal",
    amount: "$18,400,000",
    amountNumber: 18_400_000,
    year: 2024,
    type: "Federal",
    agency: "DOE Office of Indian Energy",
    challenge: "Design and fund a resilient tribal microgrid to serve critical facilities during regional outages.",
    approach: "Culturally-grounded stakeholder engagement, engineering scoping, and DOE-IE narrative with Tribal Council governance path.",
    result: "$18.4M — Tribal energy sovereignty milestone.",
  },
  {
    slug: "regional-hospital-arpah",
    client: "Regional Academic Medical Center",
    industry: "healthcare",
    amount: "$12,600,000",
    amountNumber: 12_600_000,
    year: 2024,
    type: "Federal",
    agency: "ARPA-H",
    challenge: "Translate a promising diagnostic platform from bench to clinic under ARPA-H's aggressive milestone model.",
    approach: "Milestone-driven budget, DoD-style program plan, and multi-site clinical partnerships.",
    result: "$12.6M — moving the platform into human trials.",
  },
];

export type Resource = {
  slug: string;
  title: string;
  category: "Insight" | "Whitepaper" | "News" | "Guide";
  date: string; // ISO
  readMinutes: number;
  author: string;
  excerpt: string;
  body: string[]; // paragraphs
  tags: string[];
};

export const resources: Resource[] = [
  {
    slug: "nuclear-funding-surge-2025",
    title: "Seizing the Nuclear Funding Surge: How Federal Policy Is Unlocking Billions",
    category: "Insight",
    date: "2025-08-27",
    readMinutes: 8,
    author: "Kristin Cooper",
    excerpt:
      "Advanced nuclear is entering a once-in-a-generation federal capital moment. Here's how to position now.",
    body: [
      "Federal policy over the past 24 months has fundamentally rewired the capital stack available to advanced nuclear developers, SMR manufacturers, and legacy plant operators.",
      "Between DOE's Gateway for Accelerated Innovation in Nuclear (GAIN), the Advanced Reactor Demonstration Program (ARDP), the Advanced Nuclear Fuel Availability Program, and the Civil Nuclear Credit Program, we count more than $17B in newly-appropriated or re-scoped federal support.",
      "The organizations that will win are the ones who begin FOA-tracking now, build the community-benefits and workforce narratives early, and enter each solicitation with pre-built consortium relationships.",
      "GMA is actively supporting five nuclear-adjacent proposals this cycle. If you're evaluating a pursuit, our Go / No-Go analysis can save you a quarter of internal effort.",
    ],
    tags: ["nuclear", "DOE", "policy"],
  },
  {
    slug: "post-fed-supernova-execution",
    title: "From Inspiration to Execution: The Next Step After Fed Supernova",
    category: "Insight",
    date: "2025-08-27",
    readMinutes: 5,
    author: "GMA Editorial",
    excerpt:
      "Fed Supernova is a firehose. Here's a two-week playbook to convert conversations into funded projects.",
    body: [
      "Fed Supernova brings the dual-use defense innovation community together in a way few events can match. But energy fades fast — and the primes, program offices, and consortia you met move on.",
      "Week 1: log every conversation into a shared CRM with a 'next best action' field. Send tailored follow-ups within 72 hours.",
      "Week 2: identify the two or three programs where your capabilities uniquely fit and start a Go / No-Go on the leading candidate.",
      "If you're unsure which programs align — that's exactly what our Funding Identification service is for.",
    ],
    tags: ["defense", "dual-use", "playbook"],
  },
  {
    slug: "missionmomentum-launch",
    title: "MissionMomentum: Retainer-Based Grant Support for Nonprofits",
    category: "News",
    date: "2025-07-24",
    readMinutes: 4,
    author: "Kristin Cooper",
    excerpt:
      "Introducing MissionMomentum by GMA — a right-sized grant advisory program built for lean nonprofit development teams.",
    body: [
      "Most nonprofits don't need a full-time grants team — they need consistent, expert capacity applied to the right opportunities.",
      "MissionMomentum is a monthly retainer program covering prospecting, LOIs, full proposals, and reporting on a predictable rhythm.",
      "Programs start at 6 months and are sized to your budget and grant volume.",
    ],
    tags: ["nonprofits", "MissionMomentum"],
  },
  {
    slug: "go-no-go-framework",
    title: "The Key Considerations Framework: Our 22-Factor Go / No-Go Model",
    category: "Whitepaper",
    date: "2025-06-10",
    readMinutes: 12,
    author: "GMA Research",
    excerpt: "The 22 weighted factors we use to evaluate every federal opportunity before recommending pursuit.",
    body: [
      "In 15+ years of federal grantmaking we've watched countless organizations sink 500+ hours into proposals that never had a real chance.",
      "This whitepaper walks through the 22 factors we score — including strategic fit, competitive posture, cost share posture, community benefits readiness, and post-award capacity.",
      "Download the full framework to run internal Go / No-Go conversations with more rigor.",
    ],
    tags: ["framework", "methodology", "whitepaper"],
  },
  {
    slug: "chips-second-wave",
    title: "CHIPS Act: What the Second Wave of Awards Means for Your Roadmap",
    category: "Insight",
    date: "2025-05-14",
    readMinutes: 7,
    author: "GMA Editorial",
    excerpt: "The next round of CHIPS deployments will favor ecosystem-builders. Here's how to position.",
    body: [
      "The first wave of CHIPS deployments went to the flagship fabs. The second wave is meaningfully different — it favors ecosystem plays, materials, packaging, and workforce.",
      "Successful applicants are structuring consortia early and demonstrating credible workforce commitments.",
      "GMA has supported 11 CHIPS-adjacent submissions to date.",
    ],
    tags: ["CHIPS", "semiconductors"],
  },
];

export const testimonials = [
  {
    quote:
      "Successfully competing for grants starts with the application process. If you want to improve your competitive position, there is no better way than to engage Grant Management Associates. They deliver!",
    author: "Marco Aieta",
    role: "Senior Vice President, Carollo Engineers",
  },
  {
    quote:
      "GMA didn't just write a proposal — they orchestrated our entire federal submission across engineering, legal, and executive teams.",
    author: "Program Director",
    role: "MP Assets Corporation",
  },
  {
    quote:
      "The Go / No-Go analysis saved us hundreds of hours. When they said pursue — we pursued. When they said pass — we passed. And we won.",
    author: "Chief Strategy Officer",
    role: "Regional Transit Authority",
  },
];

export const team = [
  {
    name: "Kristin Cooper",
    role: "Founder & Chief Executive Officer",
    bio: "Kristin founded GMA in 2009 and has led the firm to $2.5B+ in secured funding. WOSB and NWBOC certified leader in federal grants strategy.",
    initials: "KC",
  },
  {
    name: "James Whitaker",
    role: "President, Federal Programs",
    bio: "Former DOE program officer. Leads GMA's energy, transportation, and manufacturing federal practice.",
    initials: "JW",
  },
  {
    name: "Dr. Priya Ramachandran",
    role: "Chief Strategy Officer",
    bio: "PhD in Public Policy. Architect of the Key Considerations Framework used across every GMA engagement.",
    initials: "PR",
  },
  {
    name: "Marcus Delaney",
    role: "Head of AI & Product",
    bio: "Leads GMA's proprietary Grant Matching Engine and Responsible AI practice.",
    initials: "MD",
  },
  {
    name: "Alicia Nguyen",
    role: "Director, Nonprofit Practice (MissionMomentum)",
    bio: "20+ years in nonprofit development. Leads GMA's retainer-based advisory for mission-driven organizations.",
    initials: "AN",
  },
  {
    name: "Robert Silverhorn",
    role: "Director, Tribal Partnerships",
    bio: "Enrolled tribal member. Leads GMA's Tribal Nation engagements with sovereignty-first process.",
    initials: "RS",
  },
];

export const timeline = [
  { year: "2009", title: "GMA Founded", body: "Kristin Cooper opens GMA in Salt Lake City focused on federal grantmaking." },
  { year: "2013", title: "First $10M Federal Win", body: "GMA delivers a landmark DOT award — establishing the transit practice." },
  { year: "2016", title: "WOSB & NWBOC Certified", body: "Formal Women-Owned Small Business certifications completed." },
  { year: "2019", title: "$1B Milestone", body: "GMA passes $1B in cumulative funding secured for clients." },
  { year: "2022", title: "AI Matching Engine v1", body: "First release of GMA's proprietary Grant Matching Engine." },
  { year: "2023", title: "IIJA / IRA Practice", body: "Rapid expansion into clean energy, manufacturing, and infrastructure funding." },
  { year: "2025", title: "$2.5B Secured", body: "Cumulative funding secured for clients crosses $2.5 billion." },
];

export const openRoles = [
  { slug: "senior-grant-writer", title: "Senior Grant Writer", dept: "Delivery", location: "Remote (US)", type: "Full-time" },
  { slug: "federal-strategy-lead", title: "Federal Strategy Lead", dept: "Strategy", location: "Washington, DC / Remote", type: "Full-time" },
  { slug: "nonprofit-advisor", title: "Nonprofit Advisor (MissionMomentum)", dept: "Nonprofit Practice", location: "Remote (US)", type: "Full-time" },
  { slug: "ai-product-engineer", title: "AI Product Engineer", dept: "Product", location: "Remote (US)", type: "Full-time" },
  { slug: "grants-analyst", title: "Grants Analyst", dept: "Delivery", location: "Salt Lake City, UT", type: "Full-time" },
];

export function formatUSD(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}
