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
  activePrograms: "10,000+",
  yearsExperience: new Date().getFullYear() - 2009,
  phone: "(530) 228-9235",
  phoneHref: "tel:+15302289235",
  email: "kcarter@grantmanagementassoc.com",
  emailHref: "mailto:kcarter@grantmanagementassoc.com",
  addresses: [
    {
      city: "Durham",
      state: "CA",
      line1: "P.O. Box 246",
      zip: "95938",
      label: "Headquarters",
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
  {
    label: "About Us",
    href: "/about/firm",
    children: [
      { label: "Our Firm", href: "/about/firm", description: "Learn about our mission, values, and history." },
      { label: "Our Team", href: "/about/team", description: "Meet the experts and leadership behind GMA." },
      { label: "Our Clients", href: "/about/clients", description: "See the organizations we partner with." },
      { label: "Careers", href: "/careers", description: "Join our mission-driven team." },
    ],
  },
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
      { label: "Capital Strategy", href: "/services/capital-strategy", description: "Prepare your organization for successful funding outcomes." },
      { label: "Award & Post-Award Grant Consulting", href: "/services/award-management", description: "Expert grant administration and 2 CFR 200 compliance." },
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
      { label: "Broadband & Telecommunications", href: "/industries/broadband" },
      { label: "Defense & Technology", href: "/industries/defense" },
      { label: "Agriculture & Rural Development", href: "/industries/agriculture" },
      { label: "Water Infrastructure", href: "/industries/water-infrastructure" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Articles", href: "/articles" },
  { label: "Results", href: "/results" },
  { label: "Newsletters", href: "/newsletters" },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "Our Firm", href: "/about/firm" },
      { label: "Our Team", href: "/about/team" },
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
      { label: "All Resources", href: "/resources" },
      { label: "Articles", href: "/articles" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Results", href: "/results" },
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
  image?: string;
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
  contentHtml?: string;
};

export const services: Service[] = [
  {
    slug: "grant-writing",
    image: "/images/generated/14.png",
    contentHtml: `<p><strong>Grant Writing &amp; Management</strong></p><p><strong>Proposals that compete. Awards that deliver results.</strong></p><p>From opportunity strategy and proposal development to post-award management, GMA provides end-to-end support throughout the grant lifecycle. We help organizations pursue the right opportunities, develop competitive applications, and manage awards with confidence.</p><p><strong>Typical Timeline</strong><br /><strong>6–14 weeks depending on opportunity complexity</strong></p><p><strong>Outcomes</strong></p><ul><li>Competitive, submission-ready proposals </li><li>Clear coordination across complex applications </li><li>Post-award reporting, compliance, and close-out support <br /></li></ul><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a Conversation →</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the Assessment</a></strong></p><p><strong>OUR APPROACH</strong></p><p><strong>How We Deliver Grant Writing &amp; Management.</strong></p><p><strong>STEP 01 — Opportunity &amp; Compliance Strategy</strong></p><p>We assess the funding opportunity, requirements, evaluation criteria, and project readiness to build a clear path to submission.</p><p><strong>STEP 02 — Proposal Development</strong></p><p>We develop the narrative, technical content, budget, and supporting materials needed to tell a compelling and credible story.</p><p><strong>STEP 03 — Independent Review</strong></p><p>We review the proposal against the published criteria, identify gaps, and strengthen the application before submission.</p><p><strong>STEP 04 — Submission &amp; Debrief</strong></p><p>We manage the final submission process and help capture lessons learned to strengthen future funding efforts.</p><p><strong>STEP 05 — Post-Award Management</strong></p><p>After an award is secured, we support reporting, compliance, documentation, and close-out requirements.</p><p><br /></p><p><strong>DELIVERABLES</strong></p><p><strong>What You Receive</strong></p><ul><li>Opportunity and proposal strategy </li><li>Compliance matrix and submission roadmap </li><li>Grant narrative and technical content </li><li>Budget and budget justification support </li><li>Supporting documentation and letters </li><li>Submission-ready application package </li><li>Post-award reporting and compliance support </li></ul><p><strong><br />FAQ</strong></p><p><strong>Can GMA help with a proposal that is already in progress?</strong></p><p>Yes. Depending on the timeline and scope, we can step into an active proposal effort to provide writing, strategy, coordination, or independent review support.</p><p><strong>Do you only support federal grants?</strong></p><p>No. GMA supports federal, state, local, foundation, and other competitive funding opportunities, depending on the needs of the client and project.</p><p><strong>Do you work on a success-fee basis?</strong></p><p>Our engagement structure depends on the scope and nature of the work. We focus on providing transparent, clearly defined support aligned with the needs of each engagement.</p><p><strong>WHY GMA</strong></p><p><strong>More Than Grant Writers. Strategic Funding Partners.</strong></p><p>Competitive grants require more than good writing. They require an understanding of funding strategy, evaluation criteria, project readiness, and the realities of delivering a funded project.</p><p><strong>Strategy Before Writing</strong></p><p>We help clients evaluate opportunities and develop a clear strategy before significant resources are committed to a proposal.</p><p><strong>Experience With Complex Funding</strong></p><p>Our team brings experience supporting complex, high-value funding initiatives across infrastructure, energy, transportation, manufacturing, technology, and other sectors.</p><p><strong>Full-Lifecycle Support</strong></p><p>Our work doesn't have to end at submission. We can support clients from opportunity identification through award management and successful close-out.</p><p><strong>Built Around Your Team</strong></p><p>We work alongside internal teams, subject-matter experts, consultants, and partners to bring complex proposals together efficiently.</p><p><strong>RESULTS &amp; EXPERIENCE</strong></p><p><strong>Supporting Projects That Matter.</strong></p><p>GMA helps organizations pursue funding for ambitious projects with meaningful economic and community impact.</p><p>Our experience includes supporting complex infrastructure, energy, manufacturing, transportation, technology, and other high-impact initiatives—bringing together funding strategy, proposal development, and post-award support.</p><p><strong>[Explore Our Results →]</strong></p><p><strong>Optional:</strong> If you have a specific verified client result or case study, this is the ideal place to feature it. A real example will be significantly stronger than general claims.</p><p><strong>RELATED SERVICES</strong></p><p><strong>You Might Also Need.</strong></p><p><strong>Funding Identification</strong></p><p>Identify and prioritize funding opportunities aligned with your organization and projects.</p><p><strong>Go / No-Go Analysis</strong></p><p>Make a more informed decision before investing significant resources in a competitive proposal.</p><p><strong>Federal Grant Consulting</strong></p><p>Navigate complex federal funding programs with guidance informed by agency and reviewer perspectives.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">FINAL CTA</a></strong></p><p><strong>Ready to Build a Stronger Path to Funding?</strong></p><p>Whether you have an active funding opportunity or are preparing for your next major initiative, GMA can help you determine the right strategy and move forward with confidence.</p><p><strong>Start a Conversation →</strong></p>`,
    title: "Grant Writing & Management",
    tagline: "Proposals that win — and awards that get managed to close-out.",
    summary:
      "Full lifecycle proposal development, submission, and post-award management. Our writers average 12+ years of federal experience and pair with subject-matter experts across energy, transportation, healthcare, and tech.",
    icon: "PenTool",
    outcomes: [
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
    image: "/images/generated/16.png",
    contentHtml: `<p><strong>Funding Identification</strong></p><p><strong>Stop hunting. Start pursuing the right opportunities.</strong></p><p>Finding funding is only valuable when the opportunities actually fit your organization, projects, and priorities. GMA combines intelligent matching with experienced analyst review to identify, prioritize, and deliver funding opportunities worth your attention.</p><p><strong>TYPICAL TIMELINE</strong></p><p><strong>Ongoing subscription — first funding brief within 14 days</strong></p><p><strong>OUTCOMES</strong></p><ul><li>Curated funding opportunities aligned with your priorities </li><li>Ranked pipeline based on strategic fit and competitiveness </li><li>Clear visibility into upcoming deadlines and funding activity </li></ul><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a Conversation →</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the Assessment</a></strong></p><p><strong>OUR APPROACH</strong></p><p><strong>How we deliver Funding Identification.</strong></p><p><strong>STEP 01 — Build Your Funding Profile</strong></p><p>We start by understanding your organization, capabilities, geography, projects, funding priorities, and previous funding experience.</p><p><strong>STEP 02 — Intelligent Opportunity Matching</strong></p><p>Our technology continuously scans a broad universe of federal, state, and foundation opportunities to identify programs aligned with your profile.</p><p><strong>STEP 03 — Analyst Review &amp; Prioritization</strong></p><p>Our team filters the results, adds strategic context, and prioritizes opportunities based on fit, timing, competitiveness, and real-world relevance.</p><p><strong>STEP 04 — Curated Funding Delivery</strong></p><p>You receive a clear, actionable funding brief highlighting the opportunities most worth considering—without having to sort through hundreds of alerts.</p><p><strong>DELIVERABLES</strong></p><p><strong>What You Receive</strong></p><ul><li>Customized funding pipeline </li><li>Curated funding opportunity briefings </li><li>Ranked opportunities based on strategic fit </li><li>Deadline and funding calendar </li><li>Ongoing visibility into relevant programs and announcements </li></ul><p><strong>FAQ</strong></p><p><strong>How is this different from Grants.gov alerts?</strong></p><p>Grants.gov and other databases provide broad notifications based on keywords and categories. GMA goes further by combining intelligent matching with human review to identify opportunities that are more relevant to your organization and priorities.</p><p><strong>Do you only identify federal funding opportunities?</strong></p><p>No. Depending on your organization's needs, our funding identification process can include federal, state, local, foundation, and other relevant funding opportunities.</p><p><strong>What happens when we find an opportunity we want to pursue?</strong></p><p>GMA can help you evaluate the opportunity through a Go/No-Go Analysis and, if appropriate, support your team with proposal development and grant management services.</p><p><strong>WHY GMA</strong></p><p><strong>Funding Intelligence, Not Just Funding Alerts.</strong></p><p>The challenge isn't simply finding more opportunities. It's knowing which opportunities deserve your time and resources.</p><p><strong>Focused on Fit</strong></p><p>We look beyond keywords to understand how opportunities align with your organization's capabilities, priorities, and projects.</p><p><strong>Technology + Human Judgment</strong></p><p>Our technology helps identify opportunities at scale, while experienced analysts provide the context that automated alerts alone cannot.</p><p><strong>Built for Action</strong></p><p>We prioritize opportunities so your team can spend less time searching and more time deciding what to pursue.</p><p><strong>Connected to the Full Funding Lifecycle</strong></p><p>When the right opportunity is identified, GMA can support your next steps—from Go/No-Go analysis to proposal development and post-award management.</p><p><strong>RELATED SERVICES</strong></p><p>Your current related services are good, but I would slightly adjust them to create a stronger client journey:</p><p><strong>AI-Powered Grant Matching</strong></p><p>Find and rank opportunities using GMA's proprietary matching technology.</p><p><strong>Go / No-Go Analysis</strong></p><p>Know whether an opportunity is worth pursuing before committing significant time and resources.</p><p><strong>Grant Writing &amp; Management</strong></p><p>Move from a promising opportunity to a competitive proposal and successful award management.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">FINAL CTA</a></strong></p><p><strong>Ready to Stop Searching and Start Strategizing?</strong></p><p>Let GMA help you build a clearer view of the funding opportunities ahead—and focus your resources on the ones that matter most.</p><p><strong>Start a Conversation →</strong></p>`,
    title: "Funding Identification",
    tagline: "Stop hunting. Start matching.",
    summary:
      "Our AI-powered Grant Matching Engine continuously scans 10,000+ federal, state, and foundation programs and ranks them by fit, competitiveness, and effort-to-award ratio.",
    icon: "Target",
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
    image: "/images/generated/5.png",
    contentHtml: `<p><strong>Go / No-Go Analysis</strong></p><p><strong>Know before you commit.</strong></p><p>A competitive funding opportunity can require significant time, resources, and internal coordination. GMA's proprietary Key Considerations Analysis evaluates your opportunity against the factors that matter most—helping you make a clear, informed decision before investing in a full proposal.</p><p><strong>TYPICAL TIMELINE</strong></p><p><strong>5 business days</strong></p><p><strong>OUTCOMES</strong></p><ul><li>Objective, evidence-based recommendation </li><li>Clear view of strengths, gaps, and risks </li><li>Practical next steps for improving competitiveness </li></ul><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a Conversation →</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the Assessment</a></strong></p><p><strong>OUR APPROACH</strong></p><p><strong>How we deliver Go / No-Go Analysis.</strong></p><p><strong>STEP 01 — Opportunity Decomposition</strong></p><p>We break down the funding opportunity to understand the requirements, evaluation criteria, eligibility rules, priorities, and what a competitive applicant will need to demonstrate.</p><p><strong>STEP 02 — Competitive &amp; Readiness Assessment</strong></p><p>We evaluate your project's fit, organizational readiness, competitive position, and key strengths and gaps against the opportunity.</p><p><strong>STEP 03 — Recommendation &amp; Next Steps</strong></p><p>You receive a clear Go, No-Go, or Conditional Go recommendation—along with the reasoning behind it and practical steps to address identified gaps.</p><p><strong>DELIVERABLES</strong></p><p><strong>What You Receive</strong></p><ul><li>Key Considerations Analysis report </li><li>Opportunity requirements and evaluation summary </li><li>Competitive landscape assessment </li><li>Strengths, gaps, and risk analysis </li><li>Go / No-Go recommendation </li><li>Recommended next steps and mitigation strategy </li><li>Executive briefing call </li></ul><p><strong>FAQ</strong></p><p><strong>What if the recommendation is No-Go?</strong></p><p>A No-Go recommendation is still a valuable outcome. It can save significant time and resources while identifying the gaps that should be addressed before pursuing a future opportunity. Where appropriate, we provide recommendations for strengthening your position and identifying alternative funding paths.</p><p><strong>What does “Conditional Go” mean?</strong></p><p>A Conditional Go means the opportunity may be worth pursuing, but specific gaps, risks, or requirements should be addressed before moving forward. We identify those conditions clearly so your team can make an informed decision.</p><p><strong>Can you evaluate an opportunity that is already in progress?</strong></p><p>Yes. Depending on the stage of the application and the available timeline, we can provide an independent assessment to help identify gaps, risks, and areas requiring additional attention.</p><p><strong>WHY GMA</strong></p><p><strong>Better Decisions Before Bigger Investments.</strong></p><p>The cost of pursuing the wrong opportunity is often more than the cost of not pursuing it. Proposal teams can spend weeks coordinating subject-matter experts, developing technical content, and preparing documentation—only to discover too late that the project was not well positioned to compete.</p><p><strong>An Objective Perspective</strong></p><p>We provide an independent assessment that helps teams look beyond internal enthusiasm and evaluate the opportunity based on evidence and strategic fit.</p><p><strong>Focused on Competitiveness</strong></p><p>Eligibility alone doesn't make an application competitive. We look at the factors that can influence how well a project is positioned against other applicants.</p><p><strong>Actionable, Not Just Analytical</strong></p><p>Our analysis is designed to support a decision. You receive clear findings and practical next steps—not simply a list of observations.</p><p><strong>Connected to the Funding Lifecycle</strong></p><p>If the answer is Go, GMA can support the next phase—from proposal strategy and development through submission and post-award management.</p><p><strong>RELATED SERVICES</strong></p><p>I would slightly adjust your current related services so they follow the natural client journey:</p><p><strong>Funding Identification</strong></p><p>Find opportunities aligned with your organization's projects, priorities, and capabilities.</p><p><strong>Grant Writing &amp; Management</strong></p><p>Move from a Go decision to a competitive proposal and full-lifecycle grant support.</p><p><strong>Federal Grant Consulting</strong></p><p>Navigate complex agency requirements and strengthen your approach to federal funding opportunities.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">FINAL CTA</a></strong></p><p>Your current CTA design is excellent. I would use:</p><p><strong>Ready to Know Where You Stand?</strong></p><p>Before you commit your team's time and resources to a major funding opportunity, get a clear, independent view of your competitiveness.</p><p><strong>Every engagement begins with a free 30-minute strategy call.</strong></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Book a Call →</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the Assessment</a></strong></p>`,
    title: "Go / No-Go Analysis",
    tagline: "Know before you commit — save six figures in wasted proposal cost.",
    summary:
      "Our proprietary Key Considerations Analysis evaluates 22 weighted factors and returns a Go, No-Go, or Conditional recommendation in 5 business days.",
    icon: "Compass",
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
    image: "/images/generated/9.png",
    contentHtml: `<p><strong>Strategic Alliances</strong></p><p><strong>Expand your client offering. Add grant expertise without building a grants team.</strong></p><p>Grant Management Associates partners with consultancies, law firms, accounting firms, financial advisors, and other professional service organizations to bring experienced grant and funding expertise to their clients.</p><p>Whether you prefer to refer opportunities, collaborate on engagements, or offer grant services under your own brand, we build partnership models that complement your business and strengthen the value you deliver.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a conversation →</a></strong><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Explore a partnership</a></strong></p><p><strong>TYPICAL TIMELINE</strong></p><p><strong>Partnership structure aligned to your business</strong></p><p>Rather than emphasizing “Alliance live in 30 days,” I recommend keeping the timeline flexible because partnership models may vary.</p><p><strong>OUTCOMES</strong></p><ul><li><strong>Expanded client services without additional overhead</strong> </li><li><strong>Access to experienced grant and funding expertise</strong> </li><li><strong>Flexible referral, co-branded, or white-label models</strong> </li></ul><p><br /><strong>OUR APPROACH</strong></p><p><strong>How we build Strategic Alliances.</strong></p><p><strong>STEP 01 — Partnership Design</strong></p><p>We start by understanding your clients, service model, and growth objectives to identify the partnership structure that makes the most sense for your organization.</p><p><strong>STEP 02 — Alignment &amp; Enablement</strong></p><p>Together, we establish how opportunities are identified, introduced, and managed—giving your team the tools and clarity needed to bring the right opportunities forward.</p><p><strong>STEP 03 — Collaborative Delivery</strong></p><p>We support your clients through the agreed partnership model, whether through referrals, joint delivery, co-branded services, or white-label engagement.</p><p><strong>STEP 04 — Review &amp; Growth</strong></p><p>We regularly review the partnership, opportunities, and outcomes to identify ways to strengthen collaboration and create additional value over time.</p><p><strong>DELIVERABLES</strong></p><p>I would expand the Deliverables section slightly. Instead of only three items, consider:</p><ul><li><strong>Customized partnership framework</strong> </li><li><strong>Referral and engagement process</strong> </li><li><strong>Co-branded or white-label materials</strong> </li><li><strong>Team enablement and opportunity guidance</strong> </li><li><strong>Regular partnership and pipeline reviews</strong> </li></ul><p>If the design needs to remain concise, use these three:</p><ul><li><strong>Partnership framework</strong> </li><li><strong>Co-branded or white-label support</strong> </li><li><strong>Quarterly business review</strong> </li></ul><p><strong>FAQ</strong></p><p><strong>What types of organizations do you partner with?</strong></p><p>We work with organizations that serve businesses, nonprofits, institutions, and other clients that may benefit from grant funding, funding strategy, or grant management expertise. This can include consulting firms, law firms, CPAs, financial advisors, industry specialists, and other professional service providers.</p><p><strong>Do you compete with our existing services?</strong></p><p>Our goal is to complement—not replace—the expertise you already provide. We work with partners to define clear roles and create a model that strengthens the overall client relationship.</p><p><strong>Can services be offered under our brand?</strong></p><p>Depending on the partnership structure and engagement, we can explore referral, collaborative, co-branded, and white-label models.</p><p><strong>How do we get started?</strong></p><p>We begin with a conversation about your clients, services, and objectives, then determine whether there is a strong fit and what type of partnership would create the most value.</p><p><strong>RELATED SERVICES</strong></p><p>Your existing related services section works well. I would keep:</p><p><strong>You might also need.</strong></p><ul><li><strong>Grant Writing &amp; Management</strong><br /><em>Proposals that win—and awards that get managed to close-out.</em> </li><li><strong>Funding Identification</strong><br /><em>Stop hunting. Start matching.</em> </li><li><strong>Go / No-Go Analysis</strong><br /><em>Know before you commit—make smarter pursuit decisions.</em> </li></ul><p><strong>BOTTOM CTA</strong></p><p><strong>Ready to explore a partnership?</strong></p><p><strong>Let's discuss how GMA can help you expand your client offering with experienced grant and funding expertise.</strong></p><p><strong>Start a conversation →</strong></p>`,
    title: "Strategic Alliances",
    tagline: "White-label grant services for consultancies, law firms, and CPAs.",
    summary:
      "Extend your service line without hiring a grants team. Refer, co-brand, or fully white-label our capabilities.",
    icon: "Handshake",
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
    image: "/images/generated/17.png",
    contentHtml: `<p><strong>AI-Powered Grant Matching</strong></p><p><strong>10,000+ programs. Your best fit. In minutes.</strong></p><p>GMA's AI-powered matching engine analyzes thousands of federal, state, foundation, and other funding opportunities against your organization's capabilities, priorities, geography, and project goals. We combine intelligent matching with structured analysis to help you focus on the opportunities that are most relevant to your organization.</p><p><strong>Stop searching through opportunities. Start focusing on the right ones.</strong></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a conversation →</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the assessment</a></strong></p><p><strong>TYPICAL TIMELINE</strong></p><p><strong>Same-day preliminary matches; analyst-reviewed recommendations within 5 business days</strong></p><p><strong>OUTCOMES</strong></p><ul><li>Top-ranked funding opportunities </li><li>Fit and probability scoring </li><li>Clear rationale for every match </li></ul><p><strong>How we deliver AI-Powered Grant Matching.</strong></p><p><strong>STEP 01 — Understand Your Profile</strong></p><p>We begin by understanding your organization, capabilities, projects, funding needs, geography, and strategic priorities. A stronger profile leads to more relevant matches.</p><p><strong>STEP 02 — AI-Powered Matching</strong></p><p>Our matching engine analyzes thousands of active funding opportunities and evaluates them against your profile using structured criteria to identify potential opportunities.</p><p><strong>STEP 03 — Prioritize &amp; Explain</strong></p><p>Potential matches are organized and prioritized based on relevance and fit. Every recommended opportunity includes a clear rationale so you understand why it may be worth pursuing.</p><p><strong>STEP 04 — Plan Your Next Move</strong></p><p>We help you translate opportunities into action by identifying priorities, upcoming deadlines, and potential next steps for building a stronger funding pipeline.</p><p><strong>DELIVERABLES</strong></p><ul><li>Ranked funding matches </li><li>Clear rationale for each recommendation </li><li>Suggested next actions </li></ul><p><strong><br />FAQ: <br />Where does the AI fit into the process?</strong></p><p>AI helps us analyze and organize a large volume of funding opportunities more efficiently. The goal is to accelerate research and identify relevant possibilities—but technology is only part of the process. GMA's experience and strategic judgment help put the results into context.</p><p><strong>Does AI make the final funding recommendations?</strong></p><p>No. AI supports the matching and analysis process, but funding decisions should consider factors that cannot always be captured in an automated score. We provide context and rationale to help you make informed decisions.</p><p><strong>How is this different from a grant database or alert service?</strong></p><p>Traditional databases and alerts can provide large lists of opportunities based on keywords or categories. GMA's approach focuses on matching opportunities to your organization's specific capabilities, priorities, and goals—then helping you prioritize what deserves attention.</p><p><strong>Can this be combined with grant writing services?</strong></p><p>Yes. AI-Powered Grant Matching can help identify opportunities that may move into Go/No-Go analysis, funding strategy, and ultimately grant development and submission support.</p>`,
    title: "AI-Powered Grant Matching",
    tagline: "10,000+ programs. Your best fit. In minutes.",
    summary:
      "GMA's proprietary matching engine combines semantic understanding of your capabilities with structured scoring across eligibility, geography, budget, and historical award patterns.",
    icon: "Brain",
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
    image: "/images/generated/10.png",
    contentHtml: `<p><strong>Federal Grant Consulting</strong><br /><strong>Navigate federal funding with a team that understands how agencies think.</strong></p><p><strong>Description</strong><br />From opportunity strategy to submission and post-award support, GMA helps organizations pursue federal funding with a clear, disciplined, and reviewer-informed approach.</p><p><strong>Typical Timeline</strong><br /><strong>8–16 weeks depending on program</strong></p><p><strong>Outcomes</strong></p><ul><li>Agency-aligned funding strategy </li><li>Competitive, reviewer-informed proposals </li><li>Clear submission and next-step support </li></ul><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong></p><ul><li><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a conversation →</a></strong></li><li><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the assessment</a></strong></li></ul><p><strong>Our Approach</strong></p><p><strong>How we deliver Federal Grant Consulting.</strong></p><p><strong>STEP 01 — Agency Strategy</strong></p><p>We identify the right agency, program office, and funding pathway—and build a pursuit strategy around what matters most to decision-makers.</p><p><strong>STEP 02 — Narrative &amp; Budget</strong></p><p>We develop a compelling, compliant proposal narrative and align the budget, technical requirements, and supporting materials to the agency's evaluation criteria.</p><p><strong>STEP 03 — Submission &amp; Support</strong></p><p>We manage the submission process and provide ongoing support through key milestones, follow-up requirements, and next-step planning.</p><p><strong>Deliverables</strong></p><ul><li><strong>Federal funding strategy memo</strong> </li><li><strong>Agency-aligned proposal package</strong> </li><li><strong>Submission and post-submission support</strong> </li></ul><p><strong>FAQ</strong></p><p><strong>Which federal agencies do you cover?</strong></p><p>We support opportunities across a range of federal agencies and programs. Our approach begins with understanding your objectives, capabilities, and target funding landscape so we can determine where GMA can provide the greatest strategic value.</p><p><strong>Related Services</strong></p><p><strong>You might also need.</strong></p><p><strong><br />Grant Writing &amp; Management</strong></p><p>Proposals that win—and awards that get managed to close-out.</p><p><strong><br />Funding Identification</strong></p><p>Stop hunting. Start matching.</p><p><strong><br />Go / No-Go Analysis</strong></p><p>Know before you commit—make smarter pursuit decisions before investing significant proposal resources.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Bottom CTA</a></strong></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Ready to start?</a></strong></p><p><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Every engagement begins with a focused strategy conversation to understand your goals, priorities, and funding opportunities.</a></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">[Book a call]</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">[Take assessment]</a></strong></p>`,
    title: "Federal Grant Consulting",
    tagline: "DOE, DOT, USDA, EPA, HHS, DoD, NSF — we speak agency.",
    summary:
      "Deep bench of former federal program officers and career grants professionals. We know how reviewers actually score.",
    icon: "Landmark",
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
    image: "/images/generated/12.png",
    contentHtml: `<p><strong>State &amp; Local Grant Support</strong></p><p><strong>Fifty states. Thousands of opportunities. One strategic partner.</strong></p><p><strong>Description</strong><br />State agencies, municipalities, and local funding programs each operate differently. GMA helps you navigate the landscape, identify the right opportunities, and build a strategy designed for where funding decisions are actually made.</p><p><strong>Typical Timeline</strong></p><p><strong>4–10 weeks</strong></p><p><strong>Outcomes</strong></p><ul><li>State- and locality-specific opportunity strategy </li><li>Stronger partnerships and funding alignment </li><li>Clear path from opportunity to submission </li></ul><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"></a></strong><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Start a conversation →</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the assessment</a></strong></p><p><strong>Our Approach</strong></p><p><strong>How we deliver State &amp; Local Grant Support.</strong></p><p><strong>STEP 01 — State Scan</strong></p><p>We assess relevant state and local funding opportunities, calendars, appropriations, and program priorities to identify where your organization has the strongest path to funding.</p><p><strong>STEP 02 — Local Partnerships</strong></p><p>We help structure the relationships, partnerships, and local alignment needed to strengthen your position and build a more competitive pursuit.</p><p><strong>STEP 03 — Delivery</strong></p><p>From proposal development through portal-specific requirements and submission, we manage the process through the finish line and support what comes next.</p><p><strong>Deliverables</strong></p><ul><li><strong>State &amp; local opportunity brief</strong> </li><li><strong>Funding strategy and proposal support</strong> </li><li><strong>Legislative and funding landscape updates</strong> </li></ul><p><strong>FAQ</strong></p><p><strong>Do you handle earmarks and Community Directed Spending?</strong></p><p>Yes. We can help organizations assess and pursue appropriate federal, state, and local funding pathways, including legislative funding opportunities where they align with your objectives and eligibility.</p><p><strong><br />Related Services</strong></p><p><strong>You might also need.</strong></p><p>Grant Writing &amp; Management</p><p>Proposals that compete—and awards supported from submission through closeout.</p><p>Funding Identification</p><p>Stop hunting. Start matching.</p><p>Go / No-Go Analysis</p><p><strong>Know before you commit—make smarter pursuit decisions before investing significant proposal resources.</strong></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Bottom CTA</a></strong></p><p><strong>Ready to start?</strong></p><p>Every engagement begins with a focused strategy conversation to understand your goals, geography, and funding priorities.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Book a call</a></strong><strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline">Take the assessment</a></strong></p>`,
    title: "State & Local Grant Support",
    tagline: "50 states. Thousands of municipal programs. One partner.",
    summary:
      "State DOTs, energy offices, workforce boards, and local governments each move differently. We've written and won in all 50 states.",
    icon: "Map",
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
    image: "/images/generated/31.png",
    contentHtml: `<p><strong>Nonprofit Grant Services (Mission Momentum)</strong></p><p><strong>Retainer-based grant advisory for mission-driven organizations.</strong></p><p><br />Mission Momentum by GMA gives nonprofits the strategic grant capacity they need without the cost and complexity of building a full in-house grants team. We help you build a stronger pipeline, pursue the right opportunities, and maintain momentum month after month.</p><p><strong><br />Typical Timeline: Ongoing partnership with a predictable monthly cadence</strong></p><p><strong><br />Outcomes</strong></p><ul><li><strong>A stronger, more consistent grant pipeline</strong> </li><li><strong>Clear visibility into priorities and deadlines</strong> </li><li><strong>Strategic support from prospecting through submission</strong> </li></ul><p><strong>How We Deliver Nonprofit Grant Services (Mission Momentum)</strong></p><p><strong><br />STEP 01 — Onboarding</strong></p><p><strong>Start with strategy, not a search.</strong><br />We assess your mission, programs, funding history, organizational capacity, and near-term priorities to build a grant strategy aligned with your goals.</p><p><strong>STEP 02 — Monthly Cadence</strong></p><p><strong>Consistent progress, every month.</strong><br />From prospect research and opportunity qualification to proposal development and funder outreach, we establish a reliable rhythm that keeps your pipeline moving.</p><p><strong>STEP 03 — Quarterly Strategy</strong></p><p><strong>Measure progress and plan ahead.</strong><br />We review results, refine priorities, and adjust your funding strategy so your grant program continues to evolve with your organization.</p><p><strong>Deliverables</strong></p><ul><li><strong>12-month funding roadmap</strong> </li><li><strong>Monthly opportunity and proposal deliverables</strong> </li><li><strong>Quarterly strategy and board-ready progress report</strong> </li></ul><p><strong>FAQ Suggestions</strong></p><p>You can use these as accordion questions and answers:</p><p><strong>What's the minimum commitment?</strong></p><p>Mission Momentum is designed as an ongoing strategic partnership. The right commitment depends on your funding goals, organizational capacity, and the scope of support needed. We'll define a clear engagement structure during the initial strategy conversation.</p><p><strong>Do you only write grant proposals?</strong></p><p>No. Mission Momentum is designed to support the broader grant strategy—from identifying and prioritizing opportunities to developing proposals, managing deadlines, and refining your long-term funding approach.</p><p><strong>How many grants can we pursue each month?</strong></p><p>That depends on the size and complexity of each opportunity, as well as your organization's readiness and available internal resources. We prioritize the opportunities with the strongest strategic fit rather than pursuing volume for its own sake.</p><p><strong>Can you help us find new funders?</strong></p><p>Yes. Prospect research and funding identification can be incorporated into the engagement to help build and strengthen your pipeline of foundation, corporate, and government opportunities.</p><p><strong><br />Related Services</strong></p><p>For the three cards shown on the page, I would recommend keeping:<br /></p><p><strong>Grant Writing &amp; Management</strong></p><p>Proposals that win—and awards that get managed to close-out.</p><p><strong>Funding Identification</strong></p><p>Stop hunting. Start matching.</p><p><strong>Go / No-Go Analysis</strong></p><p>Know before you commit—so your team focuses effort where it matters most.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Bottom CTA</a></strong></p><p><strong>Ready to build grant momentum?</strong></p><p>Every engagement begins with a free 30-minute strategy call. We'll discuss your funding goals, current capacity, and where GMA can create the most value.<br /></p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Primary </a></strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline"> Book a call<br /></a><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">Secondary </a></strong><a href="/assessment" className="btn-primary inline-flex mt-4 mr-4 no-underline"> Take the assessment</a></p>`,
    title: "Nonprofit Grant Services (MissionMomentum)",
    tagline: "Retainer-based grant advisory for mission-driven organizations.",
    summary:
      "MissionMomentum by GMA is a monthly retainer program built for nonprofits that need consistent grant capacity without a full-time in-house team.",
    icon: "Heart",
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
  {
    slug: "capital-strategy",
    image: "/images/generated/19.png",
    title: "Capital Strategy & Funding Readiness",
    tagline: "Prepare your organization for successful funding outcomes.",
    summary: "Comprehensive capital strategy and readiness planning to ensure your organization is positioned to win and manage large-scale funding.",
    icon: "LineChart",
    outcomes: ["Defensible funding strategy", "Organization readiness", "Capital alignment"],
    process: [
      { title: "Assessment", body: "We evaluate your current financial posture and project pipeline." },
      { title: "Strategy", body: "Develop a targeted roadmap for securing matching funds and grants." },
      { title: "Execution", body: "Support in assembling the required financial and organizational documentation." }
    ],
    deliverables: ["Funding Readiness Report", "Capital Strategy Roadmap"],
    timeline: "4-8 weeks",
    faq: [{ q: "What is funding readiness?", a: "It ensures you have the necessary audits, policies, and match capital identified before applying." }],
    contentHtml: `<p><strong>Our Services</strong></p><p><strong>Capital Strategy &amp; Funding Readiness</strong></p><p><strong>Build a stronger foundation before pursuing capital.</strong></p><p>Grants are often just one component of a larger funding strategy. For major infrastructure, manufacturing, and growth projects, government-guaranteed debt, tax credits, matching funds, private investment, and other sources of capital may all play an important role in the overall capital stack.</p><p>Grant Management Associates helps organizations take a strategic approach to funding—identifying opportunities, strengthening funding readiness, and preparing for productive engagement with lenders, investors, and other funding partners.</p><p><strong>Understanding the Full Capital Stack</strong></p><p>Government-guaranteed debt is often an important part of the capital stack, particularly for large infrastructure and development projects. Grants can help fund a portion of a project, but matching funds and additional sources of capital are frequently required.</p><p>GMA brings extensive experience across the broader funding landscape. In recent years, GMA has secured approximately $500 million in infrastructure awards and $220 million in competitive tax credits, including support for a battery manufacturing project with a total project value of approximately $1.2 billion and the potential to create approximately 2,000 jobs.</p><p>Our role is to help clients understand how different funding sources can work together and develop a strategy that supports both immediate opportunities and long-term growth.</p><p><strong>Become Funding Ready Before You Approach Capital Providers</strong></p><p>Too often, companies approach lending institutions—including government agency debt lenders—before they are fully prepared to demonstrate their funding readiness, credibility, and capacity.</p><p>When critical documentation, financial information, project materials, or strategic plans are incomplete or outdated, an organization may make a poor first impression and ultimately be asked to return when it is better prepared.</p><p>GMA helps organizations strengthen their funding readiness before they enter those conversations. We work with clients to identify gaps, organize the information and documentation needed to support their funding strategy, and develop a clearer understanding of what they need to demonstrate to prospective funding partners.</p><p><strong>The goal is simple: help organizations enter important funding conversations prepared, credible, and strategically positioned.</strong></p><p><strong>A Strategic Partner in the Funding Ecosystem</strong></p><p>GMA serves as a strategic business and funding consultant, working alongside the broader network of professionals involved in complex financing and growth initiatives.</p><p>Depending on the needs of the engagement, we may collaborate with or support efforts involving:</p><ul><li>Lending institutions and government-backed financing programs</li><li>Broker-dealers and investment professionals</li><li>Venture capital and private investment partners</li><li>Attorneys and legal advisors</li><li>CPAs and tax advisors</li><li>Technical and industry specialists</li></ul><p>More than 200 of GMA's 500+ current and former clients have been early- to mid-stage companies. This experience gives our team a practical understanding of the challenges organizations face as they move from promising opportunities to investment-ready and funding-ready initiatives.</p><p><strong>Funding Strategy Beyond the Grant</strong></p><p>Securing funding is rarely about submitting a single application. Successful projects require a coordinated strategy that considers the full financial picture—from identifying opportunities and evaluating project readiness to securing grants, planning for matching funds, and preparing for conversations with lenders and other capital providers.</p><p>GMA helps clients connect these pieces into a more cohesive strategy.</p><p>Whether you are developing a major infrastructure project, expanding a manufacturing operation, pursuing a new technology initiative, or preparing your organization for its next stage of growth, our team can help you build a stronger foundation for pursuing capital.</p><p><strong>Let's Build Your Funding Strategy</strong></p><p><strong>Every funding journey begins with preparation and strategy.</strong></p><p>Talk with Grant Management Associates about your project, funding objectives, and the opportunities available to support your next stage of growth.</p><p><strong><a href="/contact" className="btn-primary inline-flex mt-4 mr-4 no-underline">[Discuss Your Funding Strategy] - CTA</a></strong></p>`
  },
  {
    slug: "award-management",
    image: "/images/generated/20.png",
    title: "Award and Post-Award Grant Consulting",
    tagline: "Expert grant administration and 2 CFR 200 compliance.",
    summary: "Navigate the complexities of post-award management, financial reporting, and strict regulatory compliance to optimize your funding and avoid penalties.",
    icon: "FileCheck",
    outcomes: ["Full 2 CFR 200 compliance", "Accurate and timely reporting", "Efficient financial management"],
    process: [
      { title: "Award Stage Compliance", body: "Ensuring adherence to 2 CFR 200 and grantor requirements." },
      { title: "Monitoring & Reporting", body: "Tracking project progress and submitting timely reports." },
      { title: "Financial Management", body: "Ensuring funds are used appropriately to expedite payments." }
    ],
    deliverables: ["Compliance strategy", "Ongoing monitoring reports", "Financial management plan"],
    timeline: "Ongoing throughout the grant lifecycle",
    faq: [
      { q: "What is 2 CFR 200?", a: "It is the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards." }
    ],
    contentHtml: `<p><strong>Award and Post-Award Grant Consulting</strong></p><p>GMA has years of experience administering grant funding with in-depth knowledge of regulations, such as the 2 CFR 200. The CFR compliance complexity can pose significant challenges for profit companies, non-profits and state and local governments aiming to develop efficient programs and optimize funding.</p><p><strong>Award Stage:</strong></p><ul><li><strong>Compliance with Regulations:</strong> Ensuring compliance with 2 CFR 200 and other relevant regulations is crucial to avoid legal and financial penalties.</li><li><strong>Effective Communication:</strong> Clear communication with grantors to understand the terms and conditions of the award.</li></ul><p><strong>Post-Award Stage:</strong></p><ul><li><strong>Monitoring and Reporting:</strong> Ongoing monitoring of project progress and accurate, timely reporting to the grantor is essential for transparency and accountability.</li><li><strong>Financial Management:</strong> Proper financial management to ensure funds are used appropriately and efficiently.</li></ul><p>By anticipating these challenges and developing strategies to address them, our clients can improve the administration process and management of their grant programs, thereby enhancing their likelihood of positive outcomes, quicker payments, and a reduction in compliance issues.</p>`
  },
];

export type Industry = {
  image?: string;
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
    image: "/images/generated/21.png",
    name: "Clean Energy & Sustainability",
    icon: "Zap",
    blurb: "IRA, IIJA, and DOE Loan Programs — we've navigated them from day one.",
    detail:
      "From utility-scale solar and battery storage to advanced nuclear and hydrogen, GMA has secured hundreds of millions in DOE, DOE-LPO, and EPA funding for developers, utilities, and OEMs.",
    stats: [{ label: "Sector funding secured", value: "$680M+" }, { label: "DOE programs won", value: "24" }],
    agencies: ["DOE", "DOE-LPO", "EPA", "USDA Rural Energy"],
  },
  {
    slug: "transportation",
    image: "/images/generated/23.png",
    name: "Transportation & Transit",
    icon: "Train",
    blurb: "FTA Low-No, RAISE, CRISI, INFRA, Bridge, Charging & Fueling — done, done, done.",
    detail:
      "GMA has secured transformative funding for transit agencies, ports, rail operators, and airports — including a $117M FTA Low-No award for Golden Empire Transit District.",
    stats: [{ label: "Transit awards", value: "$310M+" }, { label: "Zero-emission bus deployments", value: "18" }],
    agencies: ["FTA", "FRA", "FHWA", "MARAD", "FAA"],
  },
  {
    slug: "technology",
    image: "/images/generated/25.png",
    name: "Technology & Innovation",
    icon: "Satellite",
    blurb: "CHIPS, NIST, NSF, DoD RDT&E — bringing federal capital to deep tech.",
    detail:
      "Wireless infrastructure, semiconductors, quantum, AI, and advanced manufacturing. Our JMA Wireless win alone unlocked $43.9M under the CHIPS ecosystem.",
    stats: [{ label: "Deep-tech awards", value: "$220M+" }, { label: "CHIPS applications", value: "11" }],
    agencies: ["NIST", "NSF", "DoD", "DARPA", "Commerce"],
  },
  {
    slug: "healthcare",
    image: "/images/generated/27.png",
    name: "Healthcare & Research",
    icon: "Dna",
    blurb: "NIH, HRSA, CDC, BARDA — from R01s to translational research consortia.",
    detail:
      "Academic medical centers, health systems, and biotech ventures rely on GMA for NIH, HRSA, and ARPA-H proposals.",
    stats: [{ label: "Research awards", value: "$140M+" }, { label: "NIH R-series funded", value: "37" }],
    agencies: ["NIH", "HRSA", "CDC", "ARPA-H", "BARDA"],
  },
  {
    slug: "education",
    image: "/images/generated/29.png",
    name: "Education",
    icon: "GraduationCap",
    blurb: "ED, NSF, Perkins, TRIO, GEAR UP, and workforce Title I/II.",
    detail: "K-12 districts, community colleges, HBCUs, TCUs, and R1 universities — GMA supports the full spectrum of education funding.",
    stats: [{ label: "Education awards", value: "$95M+" }, { label: "Districts served", value: "40+" }],
    agencies: ["ED", "NSF", "DOL", "IMLS"],
  },
  {
    slug: "nonprofits",
    image: "/images/generated/30.png",
    name: "Nonprofits & Community Development",
    icon: "Leaf",
    blurb: "MissionMomentum brings predictable grant capacity to lean development teams.",
    detail: "Community-based organizations, CDFIs, and mid-market nonprofits get right-sized advisory that grows with the mission.",
    stats: [{ label: "Nonprofits served", value: "180+" }, { label: "Foundation grants", value: "$62M+" }],
    agencies: ["HHS", "HUD", "USDA", "State foundations"],
  },
  {
    slug: "tribal",
    image: "/images/generated/32.png",
    name: "Tribal Nations",
    icon: "Feather",
    blurb: "BIA, IHS, EPA-IEED, DOE-IE, and Tribal set-asides across IIJA/IRA.",
    detail: "GMA works in partnership with Tribal governments and enterprises with cultural humility, sovereignty-first process, and deep federal expertise.",
    stats: [{ label: "Tribal partners", value: "22" }, { label: "Awards secured", value: "$85M+" }],
    agencies: ["BIA", "IHS", "DOE-IE", "EPA-IEED", "USDA-RD"],
  },
  {
    slug: "manufacturing",
    image: "/images/generated/34.png",
    name: "Manufacturing",
    icon: "Cog",
    blurb: "MEP, DOE-AMMTO, DoD IBAS, EDA Build to Scale — capital for U.S. manufacturing.",
    detail: "Our $160M Microporous (MP Assets) DOE award is a signature manufacturing win — repeatable playbook now applied across multiple OEMs.",
    stats: [{ label: "Manufacturing awards", value: "$430M+" }, { label: "Jobs supported", value: "5,200" }],
    agencies: ["DOE-AMMTO", "NIST MEP", "EDA", "DoD IBAS"],
  },
  {
    slug: "broadband",
    image: "/images/generated/36.png",
    name: "Broadband & Telecommunications",
    icon: "Wifi",
    blurb: "Broadband Grant Consulting — BEAD, ReConnect & Infrastructure Funding.",
    detail: "The federal government's historic investment in broadband infrastructure creates unprecedented opportunities for telecom companies, utilities, municipalities, tribal nations, and cooperatives.",
    stats: [{ label: "Broadband grants secured", value: "$160M+" }, { label: "Tech types supported", value: "5+" }],
    agencies: ["NTIA (BEAD)", "USDA ReConnect", "FCC E-Rate", "State Broadband Offices"],
  },
  {
    slug: "defense",
    image: "/images/generated/38.png",
    name: "Defense & National Security",
    icon: "Shield",
    blurb: "Your Trusted Advisors in Defense Innovation.",
    detail: "We empower startups, scale-ups, and defense-aligned manufacturers to unlock non-dilutive capital, navigating SBIR, STTR, BAA, and OTA pathways for Department of Defense (DOD) funding.",
    stats: [{ label: "DOD funds unlocked", value: "$13B+ ecosystem" }, { label: "Success rate", value: "High" }],
    agencies: ["DOD", "DIU", "DARPA", "Army", "Navy", "Air Force"],
  },
  {
    slug: "agriculture",
    image: "/images/generated/39.png",
    name: "Agriculture & Rural Development",
    icon: "Wheat",
    blurb: "USDA, rural infrastructure, and food-system funding—built for the realities of rural America.",
    detail: "From agricultural innovation and food systems to rural infrastructure and domestic supply chains, GMA helps organizations turn complex federal and state priorities into fundable projects.",
    stats: [{ label: "Funding secured", value: "$33M+" }, { label: "Recent wins", value: "10+" }],
    agencies: ["USDA", "USDA Rural Development", "CDFA", "California Energy Commission"],
  },
  {
    slug: "water-infrastructure",
    image: "/images/generated/40.png",
    name: "Water Infrastructure",
    icon: "Droplets",
    blurb: "Drinking water, wastewater, watershed restoration, and resilience funding.",
    detail: "GMA helps utilities, municipalities, water districts, and project partners navigate complex funding opportunities and develop strategies for critical water infrastructure.",
    stats: [{ label: "Projects supported", value: "19" }, { label: "Funding secured", value: "$13.7M+" }],
    agencies: ["EPA", "FEMA", "HUD", "State Water Agencies"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string; // slug reference
  amount: string;
  amountNumber: number; // in USD for filtering
  year?: number;
  type: "Federal" | "State" | "Local" | "Private" | string;
  agency: string;
  challenge: string;
  approach?: string;
  result?: string;
  solution?: string;
  outcome?: string;
  contentHtml?: string;
  quote?: { text: string; author: string; role: string };
};

export const results: CaseStudy[] = [
  {
    slug: "grant-2025-centre-wisp-18943k",
    client: "Centre WISP",
    industry: "broadband",
    amount: "$18,943,455",
    amountNumber: 18943455,
    year: 2025,
    type: "Federal",
    agency: "Centre WISP | United States Department of Agriculture | Rural Utilities Service | Telecommunications Program Loan",
    challenge: "USDA Rural Utilities Service \u2013 Telecommunications loan (Sep 2025). Award secured by GMA in 2025.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$18,943,455 awarded."
  },
  {
    slug: "grant-2025-spatial-informatics-group-llc-1000",
    client: "Spatial Informatics Group, LLC",
    industry: "technology",
    amount: "$1,000,000",
    amountNumber: 1000000,
    year: 2025,
    type: "State",
    agency: "California Energy Commission | Electric Program Investment Charge Program (EPIC) | GFO-24-306 Applications of Open Data to Support Climate Resilience in California's Electricity Sector",
    challenge: "GFO-24-306 Applications of Open Data to Support Climate Resilience in California's Electricity Sector. Science Integration and Enhancement of PyreCast: An Open-source Near-term Wildlife Modeling and Forecasting Platform. Scored 1st in the competition and received the highest award.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,000,000 awarded."
  },
  {
    slug: "grant-2025-apricus-energy-partners-6700k",
    client: "Apricus Energy Partners",
    industry: "transportation",
    amount: "$6,700,000",
    amountNumber: 6700000,
    year: 2025,
    type: "Federal",
    agency: "U.S. Department of Energy - Pacific Northwest Hydrogen Association | Big Rock H2 Production Facility",
    challenge: "Development of a renewable hydrogen production facility utilizing electrolysis technology and tube trailer delivery.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$6,700,000 awarded."
  },
  {
    slug: "grant-2025-comanche-nation-249k",
    client: "Comanche Nation",
    industry: "tribal",
    amount: "$249,946",
    amountNumber: 249946,
    year: 2025,
    type: "Federal",
    agency: "U.S. Department of Interior - Bureau of Indian Affairs (BIA) | Office of Trust Services, Branch of Tribal Climate Resilience (TCR) | Climate Resilience Capacity Building Project",
    challenge: "This funding will support the Comanche Nation as they prepare for climate change impacts on Tribal Treaty and Trust resources, economies, regenerative agriculture and food sovereignty, conservation practices, infrastructure, and human health and safety. The Category 1 - Planning grant will help the Comanche Nation secure a resource that will best assess how the Nation can allocate funds that will help the Comanche Nation secure a resource that will best assess how the Nation can allocate funds that will increase sovereignty and ward off negative environmental impacts.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$249,946 awarded."
  },
  {
    slug: "grant-2025-knd-investments-inc-1074k",
    client: "KND Investments, Inc.",
    industry: "agriculture",
    amount: "$1,074,750",
    amountNumber: 1074750,
    year: 2025,
    type: "Federal",
    agency: "United States Department of Agriculture | Higher Blends Infrastructure Program (HBIIP)",
    challenge: "The HBIIP funds will be used to renovate underground storage tanks (UST) and fuel dispensers, bringing equipment up to meet California requirements for storage tanks. Enabling KND to offer E85 and B20 renewable fuels.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,074,750 awarded."
  },
  {
    slug: "grant-2025-mp-assets-corp-microporous-160000k",
    client: "MP Assets Corp.\u00a0(Microporous)",
    industry: "agriculture",
    amount: "$160,000,000",
    amountNumber: 160000000,
    year: 2025,
    type: "Federal",
    agency: "U.S. Department of Energy and U.S. Treasury Department | Domestic Clean Energy Manufacturing | 48C Tax Credit Allocation",
    challenge: "Domestic Clean Energy Manufacturing 48C Tax Credit Allocation. Accelerating Microporous' $1.35 billion investment in a state-of-the-art facility in Danville, Virginia producing ultra-thin, coated wet-process PE lithium-ion battery separators.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$160,000,000 awarded."
  },
  {
    slug: "grant-2024-jma-wireless-43940k",
    client: "JMA Wireless",
    industry: "broadband",
    amount: "$43,940,612",
    amountNumber: 43940612,
    year: 2024,
    type: "Federal",
    agency: "U.S. Department of Commerce | National Telecommunications and Information Administration (NTIA) | CHIPS Act's Public Wireless Supply Chain Innovation Fund (PWSCIF)",
    challenge: "American Ruggedized Modular O-RAN Radio (ARMOR): Development of the ARMOR platform supporting multiple Open Radio Unit variants that are energy efficient, cost-effective high-power macro radios and in-building product lines.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$43,940,612 awarded."
  },
  {
    slug: "grant-2024-mainspring-energy-inc-87000k",
    client: "Mainspring Energy, Inc.",
    industry: "manufacturing",
    amount: "$87,000,000",
    amountNumber: 87000000,
    year: 2024,
    type: "Federal",
    agency: "U.S. Department of Energy | Office of Manufacturing & Energy Supply Chains | Accelerating Clean Energy Manufacturing in America's Energy and Industrial Communities",
    challenge: "DOE Office of Manufacturing & Energy Supply Chains. Accelerating Clean Energy Manufacturing in America's Energy and Industrial Communities. Establish a state-of-the-art manufacturing facility near Pittsburgh to produce 1,000 linear generators annually, creating 291 construction and 600 operations jobs.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$87,000,000 awarded."
  },
  {
    slug: "grant-2024-golden-empire-transit-district-117",
    client: "Golden Empire Transit District",
    industry: "transportation",
    amount: "$117,877,595",
    amountNumber: 117877595,
    year: 2024,
    type: "State",
    agency: "California State Transportation Agency (CalSTA) | Transit and Intercity Rail Capital Program",
    challenge: "CalSTA TIRCP award funding transit expansion, electronic fare collection, zero-emission hydrogen buses, hydrogen fueling stations, and downtown transit plaza. Total project value $147,346,993.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$117,877,595 awarded."
  },
  {
    slug: "grant-2024-precastprestressed-concrete-instit",
    client: "Precast/Prestressed Concrete Institute",
    industry: "manufacturing",
    amount: "$9,975,000",
    amountNumber: 9975000,
    year: 2024,
    type: "Federal",
    agency: "Environmental Protection Agency (EPA) | Reducing Embodied Greenhouse Gas Emissions for Construction Materials and Products",
    challenge: "EPA Reducing Embodied Greenhouse Gas Emissions for Construction Materials and Products. Empowering precast concrete manufacturers to produce compliant Environmental Product Declarations (EPDs) with transparent embodied carbon data.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$9,975,000 awarded."
  },
  {
    slug: "grant-2024-batteries-plus-7028k",
    client: "Batteries Plus",
    industry: "education",
    amount: "$7,028,640",
    amountNumber: 7028640,
    year: 2024,
    type: "Federal",
    agency: "U.S. Department of Energy | Retailers Battery Collection and Recycling Program",
    challenge: "Retailers Battery Collection and Recycling Program. Incentivizing consumer participation by eliminating recycling fees, launching educational campaigns, and focusing on disadvantaged communities for equitable access.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$7,028,640 awarded."
  },
  {
    slug: "grant-2024-carbon-blade-corporation-150k",
    client: "Carbon Blade Corporation",
    industry: "clean-energy",
    amount: "$150,000",
    amountNumber: 150000,
    year: 2024,
    type: "State",
    agency: "CalSeed | Hardware for Carbon Dioxide Removal",
    challenge: "CalSeed Hardware for Carbon Dioxide Removal. Building an energy-efficient hardware solution for carbon dioxide removal placed directly at sequestration/usage locations.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$150,000 awarded."
  },
  {
    slug: "grant-2024-radius-recycling-w-mcallister-quin",
    client: "Radius Recycling (w/ McAllister & Quinn)",
    industry: "clean-energy",
    amount: "$1,499,000",
    amountNumber: 1499000,
    year: 2024,
    type: "Federal",
    agency: "Environmental Protection Agency | Diesel Emissions Reduction Act (DERA)",
    challenge: "Client won 3 of 4 regions.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,499,000 awarded."
  },
  {
    slug: "grant-2024-radius-recycling-w-mcallister-quin-1",
    client: "Radius Recycling (w/ McAllister & Quinn)",
    industry: "clean-energy",
    amount: "$2,497,500",
    amountNumber: 2497500,
    year: 2024,
    type: "Federal",
    agency: "Environmental Protection Agency | Diesel Emissions Reduction Act (DERA)",
    challenge: "Client won 3 of 4 regions.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,497,500 awarded."
  },
  {
    slug: "grant-2024-radius-recycling-w-mcallister-quin-2",
    client: "Radius Recycling (w/ McAllister & Quinn)",
    industry: "clean-energy",
    amount: "$1,555,500",
    amountNumber: 1555500,
    year: 2024,
    type: "Federal",
    agency: "Environmental Protection Agency | Diesel Emissions Reduction Act (DERA)",
    challenge: "Client won 3 of 4 regions.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,555,500 awarded."
  },
  {
    slug: "grant-2024-county-of-monterey-15713k",
    client: "County of Monterey",
    industry: "technology",
    amount: "$15,713,981",
    amountNumber: 15713981,
    year: 2024,
    type: "State",
    agency: "CARB Advanced Technology Demonstration \u2013 Green Zones (proposed award Mar 2024, revised 2025)",
    challenge: "CARB Advanced Technology Demonstration \u2013 Green Zones (proposed award Mar 2024, revised 2025). Award secured by GMA in 2024.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$15,713,981 awarded."
  },
  {
    slug: "grant-2024-sky-harvest-4000k",
    client: "Sky Harvest",
    industry: "agriculture",
    amount: "$4,000,000",
    amountNumber: 4000000,
    year: 2024,
    type: "Federal",
    agency: "USDA Forest Service | Inflation Reduction Act (IRA) Forest Landowner Support",
    challenge: "Market innovations to compensate underserved, small-acreage landowners for the public benefits of harvest deferral. The Sky Harvest Landowner Access Project uses a new carbon methodology creating valuable credit to buyers.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$4,000,000 awarded."
  },
  {
    slug: "grant-2024-sonocharge-energy-inc-3000k",
    client: "Sonocharge Energy, Inc.",
    industry: "manufacturing",
    amount: "$3,000,000",
    amountNumber: 3000000,
    year: 2024,
    type: "State",
    agency: "California Energy Commission | Realizing Accelerated Manufacturing and Production for Clean Energy Technologies (RAMP) Round 2",
    challenge: "CEC RAMP Round 2 award for Pilot Production of High-Performance Lithium-Ion Battery Packs.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,000,000 awarded."
  },
  {
    slug: "grant-2024-current-ways-inc-2191k",
    client: "Current Ways, Inc.",
    industry: "clean-energy",
    amount: "$2,191,398",
    amountNumber: 2191398,
    year: 2024,
    type: "State",
    agency: "California Energy Commission | Realizing Accelerated Manufacturing and Production for Clean Energy Technologies (RAMP) Round 2",
    challenge: "CEC RAMP Round 2 award for Accelerating the Low-rate Initial Production of CWUBIC, Current Way's Next Generation Bidirectional OBC.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,191,398 awarded."
  },
  {
    slug: "grant-2024-atlanta-regional-commission-6120k",
    client: "Atlanta Regional Commission",
    industry: "clean-energy",
    amount: "$6,120,067",
    amountNumber: 6120067,
    year: 2024,
    type: "Federal",
    agency: "U.S. Department of Transportation | Federal Highway Administration | Changing and Fueling Infrastructure Discretionary Program",
    challenge: "300+ EV charging ports across the 20-county Atlanta region.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$6,120,067 awarded."
  },
  {
    slug: "grant-2024-association-of-monterey-bay-area-g",
    client: "Association of Monterey Bay Area Governments | Ecology Action",
    industry: "clean-energy",
    amount: "$1,500,000",
    amountNumber: 1500000,
    year: 2024,
    type: "Federal",
    agency: "U.S. Department of Transportation | Federal Highway Administration | Changing and Fueling Infrastructure Discretionary Program",
    challenge: "Creation of the Monterey Bay Electric Vehicle Climate Adaptation and Resiliency Framework.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,500,000 awarded."
  },
  {
    slug: "grant-2023-zev-station-4000k",
    client: "ZEV Station",
    industry: "transportation",
    amount: "$4,000,000",
    amountNumber: 4000000,
    year: 2023,
    type: "State",
    agency: "California Energy Commission | Innovative Hydrogen Refueling Solutions for Heavy Transport",
    challenge: "Multimodal Station for MDHD On-road & Other End Uses.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$4,000,000 awarded."
  },
  {
    slug: "grant-2023-mp-assets-corp-microporous-100000k",
    client: "MP Assets Corp.\u00a0(Microporous)",
    industry: "agriculture",
    amount: "$100,000,000",
    amountNumber: 100000000,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Energy | Advanced Energy Manufacturing and Recycling Program",
    challenge: "Produce world-class separators for lithium-ion batteries integral to the electric vehicle supply chain.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$100,000,000 awarded."
  },
  {
    slug: "grant-2023-xcimer-energy-9000k",
    client: "Xcimer Energy",
    industry: "clean-energy",
    amount: "$9,000,000",
    amountNumber: 9000000,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Energy | Milestone-based Fusion Development Program",
    challenge: "DOE Milestone-based Fusion Development (Oct 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$9,000,000 awarded."
  },
  {
    slug: "grant-2023-city-of-lake-worth-beach-fl-23462k",
    client: "City of Lake Worth Beach, FL",
    industry: "clean-energy",
    amount: "$23,462,167",
    amountNumber: 23462167,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Energy | GRID Resilience and Innovation Partnerships Program",
    challenge: "DOE GRID Resilience and Innovation Partnerships (GRIP) Program. 7MW Solar, Fiber Optics, and GRID Integrity project.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$23,462,167 awarded."
  },
  {
    slug: "grant-2023-rejoule-10000k",
    client: "ReJoule",
    industry: "clean-energy",
    amount: "$10,000,000",
    amountNumber: 10000000,
    year: 2023,
    type: "Federal",
    agency: "Office of Clean Energy Demonstrations (OCED) | Long-Duration Energy Storage Demonstrations",
    challenge: "DOE Office of Clean Energy Demonstrations (OCED) Long-Duration Energy Storage Demonstrations project.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$10,000,000 awarded."
  },
  {
    slug: "grant-2023-fourth-wave-109k",
    client: "Fourth Wave",
    industry: "nonprofits",
    amount: "$109,000",
    amountNumber: 109000,
    year: 2023,
    type: "Federal",
    agency: "Sacramento Innovation | Women Entrepreneurs | City of Sacramento",
    challenge: "City of Sacramento \u2013 Women Entrepreneurs (Aug 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$109,000 awarded."
  },
  {
    slug: "grant-2023-hoonah-indian-association-500k",
    client: "Hoonah Indian Association",
    industry: "tribal",
    amount: "$500,000",
    amountNumber: 500000,
    year: 2023,
    type: "Federal",
    agency: "NTIA Tribal Broadband Connectivity (Aug 2023)",
    challenge: "NTIA Tribal Broadband Connectivity (Aug 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$500,000 awarded."
  },
  {
    slug: "grant-2023-fyto-2000k",
    client: "FYTO",
    industry: "agriculture",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2023,
    type: "State",
    agency: "CDFA CA Livestock Methane Measurement, Mitigation, and Thriving Environments - Research Program (CLIM3ATE-RP) | Impact Area 3",
    challenge: "CDFA CLIM3ATE-RP (Jul 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2023-ashrae-2800k",
    client: "ASHRAE",
    industry: "clean-energy",
    amount: "$2,800,000",
    amountNumber: 2800000,
    year: 2023,
    type: "Federal",
    agency: "DOE BIL Resilient and Efficient Codes Implementation",
    challenge: "DOE BIL Resilient & Efficient Codes (Jul 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,800,000 awarded."
  },
  {
    slug: "grant-2023-michigan-dot-on-behalf-of-4-rural-",
    client: "Michigan DOT (on behalf of 4 rural transit agencies)",
    industry: "transportation",
    amount: "$514,002",
    amountNumber: 514002,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Transportation - Federal Transit Administration | Buses and Bus Facilities Program",
    challenge: "FTA Buses & Bus Facilities (Jul 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$514,002 awarded."
  },
  {
    slug: "grant-2023-ohio-dot-on-behalf-of-10-subrecipi",
    client: "Ohio DOT (on behalf of 10 subrecipients)",
    industry: "transportation",
    amount: "$29,331,665",
    amountNumber: 29331665,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Transportation - Federal Transit Administration | Buses and Bus Facilities Program",
    challenge: "FTA Buses & Bus Facilities (Jul 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$29,331,665 awarded."
  },
  {
    slug: "grant-2023-iowa-dot-on-behalf-of-mta-rbt-hirt",
    client: "Iowa DOT (on behalf of MTA, RBT, HIRTA, CWITA & Coralville)",
    industry: "transportation",
    amount: "$17,853,710",
    amountNumber: 17853710,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Transportation - Federal Transit Administration | Buses and Bus Facilities Program",
    challenge: "FTA Buses & Bus Facilities (Jul 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$17,853,710 awarded."
  },
  {
    slug: "grant-2023-enchanted-rock-llc-2142k",
    client: "Enchanted Rock, LLC",
    industry: "clean-energy",
    amount: "$2,142,968",
    amountNumber: 2142968,
    year: 2023,
    type: "State",
    agency: "California Energy Commission - Energy Research Development Division | Hydrogen Blending and Lower Oxides of Nitrogen Emissions in Gas-Fired Generation (HyBLOX)",
    challenge: "Scored #2 in the Competition",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,142,968 awarded."
  },
  {
    slug: "grant-2023-berkshire-hathaway-energy-midameri",
    client: "Berkshire Hathaway Energy / MidAmerican Energy Company",
    industry: "transportation",
    amount: "$37,800,000",
    amountNumber: 37800000,
    year: 2023,
    type: "Federal",
    agency: "U.S. Department of Commerce | NTIA Middle Mile Broadband Grant",
    challenge: "NTIA Middle Mile Broadband (Jun 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$37,800,000 awarded."
  },
  {
    slug: "grant-2023-ramapo-college-of-new-jersey-31700",
    client: "Ramapo College of New Jersey",
    industry: "education",
    amount: "$31,700,000",
    amountNumber: 31700000,
    year: 2023,
    type: "State",
    agency: "NJ OSHE Higher Ed Capital Facilities (May 2023)",
    challenge: "NJ OSHE Higher Ed Capital Facilities (May 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$31,700,000 awarded."
  },
  {
    slug: "grant-2023-santa-cruz-metro-38589k",
    client: "Santa Cruz Metro",
    industry: "transportation",
    amount: "$38,589,000",
    amountNumber: 38589000,
    year: 2023,
    type: "State",
    agency: "CalSTA Transit and Intercity Rail Capital Program (TIRCP) Cycle 6",
    challenge: "CalSTA TIRCP Cycle 6 (Apr 2023). Award secured by GMA in 2023.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$38,589,000 awarded."
  },
  {
    slug: "grant-2022-home-place-pastures-508k",
    client: "Home Place Pastures",
    industry: "agriculture",
    amount: "$508,784",
    amountNumber: 508784,
    year: 2022,
    type: "Federal",
    agency: "USDA Meat & Poultry Processing Expansion (Nov 2022)",
    challenge: "USDA Meat & Poultry Processing Expansion (Nov 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$508,784 awarded."
  },
  {
    slug: "grant-2022-medstar-washington-hospital-center",
    client: "MedStar Washington Hospital Center",
    industry: "healthcare",
    amount: "$3,000,000",
    amountNumber: 3000000,
    year: 2022,
    type: "Federal",
    agency: "Dept. of Health and Human Services - Administration for Strategic Preparedness and Response | Medstar Washington Hospital Center Regional Emerging Special Pathogen Treatment Center Federal Emergency Management Agency Region III",
    challenge: "HHS ASPR Special Pathogen Treatment Center (Oct 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,000,000 awarded."
  },
  {
    slug: "grant-2022-three-rivers-levee-improvement-aut",
    client: "Three Rivers Levee Improvement Authority",
    industry: "water-infrastructure",
    amount: "$9,703,842",
    amountNumber: 9703842,
    year: 2022,
    type: "State",
    agency: "Floodplain Management, Protection, and Risk Awareness Grant Program | Yuba River North Training Wall - Phase 2",
    challenge: "DWR Floodplain Mgmt, Protection & Risk Awareness (Oct 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$9,703,842 awarded."
  },
  {
    slug: "grant-2022-city-of-clearlake-3000k",
    client: "City of Clearlake",
    industry: "clean-energy",
    amount: "$3,000,000",
    amountNumber: 3000000,
    year: 2022,
    type: "State",
    agency: "CA Dept. of Parks and Recreation -\u00a0 Rural Recreation and Tourism Grant | Burns Valley Sports Complex",
    challenge: "CA State Parks Rural Recreation & Tourism, Burns Valley (Aug 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,000,000 awarded."
  },
  {
    slug: "grant-2022-paradise-recreation-park-district-",
    client: "Paradise Recreation & Park District",
    industry: "clean-energy",
    amount: "$1,439,535",
    amountNumber: 1439535,
    year: 2022,
    type: "State",
    agency: "CA Dept. of Parks and Recreation -\u00a0 Rural Recreation and Tourism Grant | Improvement of Billie Park",
    challenge: "CA State Parks Rural Recreation & Tourism, Bille Park (Aug 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,439,535 awarded."
  },
  {
    slug: "grant-2022-tulare-county-regional-transit-age",
    client: "Tulare County Regional Transit Agency",
    industry: "transportation",
    amount: "$33,769,000",
    amountNumber: 33769000,
    year: 2022,
    type: "State",
    agency: "CalSTA TIRCP Cycle 5 | Tulare Cross-Valley Corridor ZEB Expansion",
    challenge: "CalSTA TIRCP Cycle 5 (Jul 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$33,769,000 awarded."
  },
  {
    slug: "grant-2022-santa-barbara-mtd-14480k",
    client: "Santa Barbara MTD",
    industry: "transportation",
    amount: "$14,480,000",
    amountNumber: 14480000,
    year: 2022,
    type: "State",
    agency: "CalSTA TIRCP Cycle 5 | Next Wave: Expanding MTD's Electric Legacy on the South Coast",
    challenge: "CalSTA TIRCP Cycle 5 (Jul 2022). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$14,480,000 awarded."
  },
  {
    slug: "grant-2022-clemson-university-10350k",
    client: "Clemson University",
    industry: "education",
    amount: "$10,350,000",
    amountNumber: 10350000,
    year: 2022,
    type: "Federal",
    agency: "DOE Research at Energy Frontier Research Centers | Artificially Intelligent Manufacturing Paradigm for Composites",
    challenge: "DOE Energy Frontier Research Center, AIM for Composites. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$10,350,000 awarded."
  },
  {
    slug: "grant-2022-iowa-dot-15844k",
    client: "Iowa DOT",
    industry: "transportation",
    amount: "$15,844,561",
    amountNumber: 15844561,
    year: 2022,
    type: "Federal",
    agency: "Low or No Emission Vehicle Program",
    challenge: "FTA Low or No Emission. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$15,844,561 awarded."
  },
  {
    slug: "grant-2022-calstart-545k",
    client: "CALSTART",
    industry: "transportation",
    amount: "$545,000",
    amountNumber: 545000,
    year: 2022,
    type: "Federal",
    agency: "Federal Transit Administration | Research to Practice (R2P) Initiative",
    challenge: "FTA Research to Practice (R2P). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$545,000 awarded."
  },
  {
    slug: "grant-2022-kvie-public-television-500k",
    client: "KVIE Public Television",
    industry: "agriculture",
    amount: "$500,212",
    amountNumber: 500212,
    year: 2022,
    type: "State",
    agency: "CDFA Specialty Crop Block Grant 2022",
    challenge: "CDFA Specialty Crop Block Grant 2022. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$500,212 awarded."
  },
  {
    slug: "grant-2022-chargepoint-socal-2000k",
    client: "ChargePoint (SoCal)",
    industry: "clean-energy",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2022,
    type: "State",
    agency: "CEC CARTS Grant | Scalable Approach to EV Infrastructure for TNCs in SoCal | GFO-21-601",
    challenge: "CEC CARTS, GFO-21-601. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2022-chargepoint-norcal-2000k",
    client: "ChargePoint (NorCal)",
    industry: "clean-energy",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2022,
    type: "State",
    agency: "CEC CARTS Grant | Scalable Approach to EV Infrastructure for TNCs in NorCal | GFO-21-601",
    challenge: "CEC CARTS, GFO-21-601. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2022-amply-power-inc-2000k",
    client: "AMPLY Power, Inc.",
    industry: "clean-energy",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2022,
    type: "State",
    agency: "CEC CARTS Grant | Robust Airport Charging for Electric Ride Hail Fleets \"RACER\" Project | GFO-21-601",
    challenge: "CEC CARTS, GFO-21-601 (RACER). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2022-chargepoint-socal-2125k",
    client: "ChargePoint (SoCal)",
    industry: "clean-energy",
    amount: "$2,125,000",
    amountNumber: 2125000,
    year: 2022,
    type: "State",
    agency: "CEC REACH Grant | Replicable Approach to EV Charging for MFH Residents in Southern California | GFO-21-603",
    challenge: "CEC REACH, GFO-21-603. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,125,000 awarded."
  },
  {
    slug: "grant-2022-chargepoint-norcal-2125k",
    client: "ChargePoint (NorCal)",
    industry: "clean-energy",
    amount: "$2,125,000",
    amountNumber: 2125000,
    year: 2022,
    type: "State",
    agency: "CEC REACH Grant | Replicable Approach to EV Charging for MFH Residents in Southern California | GFO-21-603",
    challenge: "CEC REACH, GFO-21-603. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,125,000 awarded."
  },
  {
    slug: "grant-2022-sacramento-municipal-utility-distr",
    client: "Sacramento Municipal Utility District",
    industry: "clean-energy",
    amount: "$2,229,000",
    amountNumber: 2229000,
    year: 2022,
    type: "State",
    agency: "CEC REACH Grant | ChargeReady Community | GFO-21-603",
    challenge: "CEC REACH, GFO-21-603 (ChargeReady Community). Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,229,000 awarded."
  },
  {
    slug: "grant-2022-lassen-municipal-utility-district-",
    client: "Lassen Municipal Utility District",
    industry: "clean-energy",
    amount: "$500,348",
    amountNumber: 500348,
    year: 2022,
    type: "State",
    agency: "CEC REV Charging Grant | Lassen Rural Access to EV Fast Charging Project | GFO-21-604",
    challenge: "CEC REV, GFO-21-604. Award secured by GMA in 2022.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$500,348 awarded."
  },
  {
    slug: "grant-2021-paradise-recreation-park-district-",
    client: "Paradise Recreation & Park District",
    industry: "clean-energy",
    amount: "$5,225,277",
    amountNumber: 5225277,
    year: 2021,
    type: "State",
    agency: "CA State Parks | Statewide Park Development and Community Revitalization Program",
    challenge: "CA State Parks Statewide Park Program Rd 4, Lakeridge Park (Dec 2021). Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$5,225,277 awarded."
  },
  {
    slug: "grant-2021-ladot-6000k",
    client: "LADOT",
    industry: "clean-energy",
    amount: "$6,000,000",
    amountNumber: 6000000,
    year: 2021,
    type: "State",
    agency: "CEC Zero-Emission Transit Fleet Infrastructure Deployment | Los Angeles Department of Transportation (LADOT) | Washington Yard Microgrid Project | Ranked 2nd with a 80.81%",
    challenge: "CEC GFO-20-602, Washington Yard Microgrid (Oct 2021). Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$6,000,000 awarded."
  },
  {
    slug: "grant-2021-city-of-porterville-w-calstart-200",
    client: "City of Porterville (w/ CALSTART)",
    industry: "transportation",
    amount: "$200,000",
    amountNumber: 200000,
    year: 2021,
    type: "State",
    agency: "Heavy-Duty Zero-Emission Vehicle Infrastructure (GFO-20-601) | City of Porterville, CA | Ranked 2nd out of 45 applicants",
    challenge: "CEC GFO-20-601 MD/HD ZEV Blueprint (Sep 2021). Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$200,000 awarded."
  },
  {
    slug: "grant-2021-santa-barbara-ze-resilient-transpo",
    client: "Santa Barbara ZE Resilient Transportation Blueprint",
    industry: "transportation",
    amount: "$200,000",
    amountNumber: 200000,
    year: 2021,
    type: "State",
    agency: "Heavy-Duty Zero-Emission Vehicle Infrastructure (GFO-20-601) | Santa Barbara Zero-Emission Resilient Transportation Blueprint",
    challenge: "CEC GFO-20-601 MD/HD ZEV Blueprint. Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$200,000 awarded."
  },
  {
    slug: "grant-2021-zero-emission-industries-formerly-",
    client: "Zero Emission Industries (formerly Golden Gate Zero Emission Marine)",
    industry: "clean-energy",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2021,
    type: "State",
    agency: "Marine Proposal | Golden Gate Zero Emission Marine, Inc. | Small Fast Multi-Use Hydrogen Fuel Cell Harbor Craft | Ranked #1 in the grant competition.",
    challenge: "CEC small fast hydrogen harbor craft (Apr 2021). Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2021-anaheim-transportation-network-500",
    client: "Anaheim Transportation Network",
    industry: "transportation",
    amount: "$5,000,000",
    amountNumber: 5000000,
    year: 2021,
    type: "State",
    agency: "Clean Energy Program | Anaheim Transportation Network (ATN) | Electrify Anaheim: ATN Microgrid Project | Ranked #1 in the grant competition",
    challenge: "CEC Clean Transportation Program, ATN Microgrid (Feb 2021). Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$5,000,000 awarded."
  },
  {
    slug: "grant-2021-chargepoint-1999k",
    client: "ChargePoint",
    industry: "clean-energy",
    amount: "$1,999,154",
    amountNumber: 1999154,
    year: 2021,
    type: "State",
    agency: "ChargePoint Depot Charging Pantograph Solution Project",
    challenge: "CEC BESTFIT GFO-20-605, Depot Pantograph. Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,999,154 awarded."
  },
  {
    slug: "grant-2021-chargepoint-996k",
    client: "ChargePoint",
    industry: "transportation",
    amount: "$996,060",
    amountNumber: 996060,
    year: 2021,
    type: "State",
    agency: "Light-Duty Electric Vehicle Fleet Charging Project | ChargePoint",
    challenge: "CEC BESTFIT GFO-20-605, Light-Duty Fleet Charging. Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$996,060 awarded."
  },
  {
    slug: "grant-2021-consol-inc-999k",
    client: "ConSol, Inc.",
    industry: "clean-energy",
    amount: "$999,936",
    amountNumber: 999936,
    year: 2021,
    type: "State",
    agency: "CEC EPIC Challenge | Reimaging Affordable Mixed-Use Development in a Carbon-Constrained Future | GFO-20-305",
    challenge: "CEC EPIC Challenge, GFO-20-305. Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$999,936 awarded."
  },
  {
    slug: "grant-2021-jamboree-housing-corporation-1000k",
    client: "Jamboree Housing Corporation",
    industry: "clean-energy",
    amount: "$1,000,000",
    amountNumber: 1000000,
    year: 2021,
    type: "State",
    agency: "CEC EPIC Challenge | Paseo Adelanto: A New Paradigm | GFO-20-305",
    challenge: "CEC EPIC Challenge, GFO-20-305. Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,000,000 awarded."
  },
  {
    slug: "grant-2021-kvie-public-television-449k",
    client: "KVIE Public Television",
    industry: "agriculture",
    amount: "$449,770",
    amountNumber: 449770,
    year: 2021,
    type: "State",
    agency: "California Department of Food and Agriculture (CDFA) | Specialty Crop Block Grant Program | 2021",
    challenge: "CDFA Specialty Crop Block Grant 2021. Award secured by GMA in 2021.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$449,770 awarded."
  },
  {
    slug: "grant-2020-western-reserve-transit-authority-",
    client: "Western Reserve Transit Authority",
    industry: "transportation",
    amount: "$2,331,000",
    amountNumber: 2331000,
    year: 2020,
    type: "Federal",
    agency: "FOA FTA-2020-012-TRI-AIM | Western Reserve Transit Authority | Enhancing Life with Automated Transportation for Everyone (ELATE)",
    challenge: "FTA Accelerating Innovative Mobility (Aug 2020). Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,331,000 awarded."
  },
  {
    slug: "grant-2020-form-energy-inc-1998k",
    client: "Form Energy, Inc.",
    industry: "clean-energy",
    amount: "$1,998,215",
    amountNumber: 1998215,
    year: 2020,
    type: "State",
    agency: "Developing non-Lithium Ion Energy Storage Technologies \u2013 | Form Energy, Inc. \u2013 Winning Grant Score - 102.24",
    challenge: "CEC EPIC, GFO-19-305 (Jun 2020). Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,998,215 awarded."
  },
  {
    slug: "grant-2020-bering-sea-fishermens-association-",
    client: "Bering Sea Fishermen\u2019s Association",
    industry: "clean-energy",
    amount: "$599,053",
    amountNumber: 599053,
    year: 2020,
    type: "Federal",
    agency: "Economic Development Association (EDA) | Bering Sea Fishermen's Association, Anchorage, Alaska",
    challenge: "EDA Build to Scale. Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$599,053 awarded."
  },
  {
    slug: "grant-2020-cummins-inc-3443k",
    client: "Cummins Inc.",
    industry: "clean-energy",
    amount: "$3,443,663",
    amountNumber: 3443663,
    year: 2020,
    type: "Federal",
    agency: "FOA # DE-FOA-0002197 | Cummins Inc., Milpitas, CA | Integrated Fuel Cell Electric Powertrain Demonstration",
    challenge: "DOE FY2020 Advanced Vehicle Technologies, DE-FOA-0002197. Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,443,663 awarded."
  },
  {
    slug: "grant-2020-michigan-dot-6393k",
    client: "Michigan DOT",
    industry: "transportation",
    amount: "$6,393,031",
    amountNumber: 6393031,
    year: 2020,
    type: "Federal",
    agency: "Fiscal Year 2020 Low or No-Emission (Low-No) Bus Program Projects \u2013 State of Michigan Department of Transportation \u2013 Award for Zero Emission Electric Buses and related charging infrastructure, maintenance and first responder training for new technology.",
    challenge: "FTA FY2020 Low-No Bus Program. Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$6,393,031 awarded."
  },
  {
    slug: "grant-2020-calstart-7838k",
    client: "CALSTART",
    industry: "transportation",
    amount: "$7,838,113",
    amountNumber: 7838113,
    year: 2020,
    type: "State",
    agency: "CARB HVIP (Jan 2020)",
    challenge: "CARB HVIP (Jan 2020). Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$7,838,113 awarded."
  },
  {
    slug: "grant-2020-caltestbed-voucher-second-life-ev-",
    client: "CalTestBed voucher \u2013 Second Life EV Batteries",
    industry: "clean-energy",
    amount: "$211,426",
    amountNumber: 211426,
    year: 2020,
    type: "State",
    agency: "Research Testing Voucher with Research One University | Second Life EV Batteries",
    challenge: "CalTestBed 2020. Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$211,426 awarded."
  },
  {
    slug: "grant-2020-city-of-willows-65k",
    client: "City of Willows",
    industry: "clean-energy",
    amount: "$65,000",
    amountNumber: 65000,
    year: 2020,
    type: "State",
    agency: "Local Early Action Planning Grant \u2013 LEAP | City of Willows",
    challenge: "HCD Local Early Action Planning (LEAP). Award secured by GMA in 2020.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$65,000 awarded."
  },
  {
    slug: "grant-2019-nikola-motor-company-1700k",
    client: "Nikola Motor Company",
    industry: "clean-energy",
    amount: "$1,700,000",
    amountNumber: 1700000,
    year: 2019,
    type: "Federal",
    agency: "Department of Energy - Advanced Fuel Cell Membrane-Assembly Technology",
    challenge: "DOE FY19 fuel cell membrane electrode assembly (Aug 2019). Award secured by GMA in 2019.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,700,000 awarded."
  },
  {
    slug: "grant-2019-aha-macav-power-service-amps-2000k",
    client: "Aha Macav Power Service (AMPS)",
    industry: "tribal",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2019,
    type: "Federal",
    agency: "Department of Energy - Office of Indian Energy | Utility-Scale Solar - Energy Infrastructure Deployment Projects",
    challenge: "DOE Office of Indian Energy, Utility-Scale Solar - Energy Infrastructure Deployment Projects ($2,000,000 funded / $2,000,000 match, total project $4,000,000).",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2019-sepion-2675k",
    client: "Sepion",
    industry: "clean-energy",
    amount: "$2,675,793",
    amountNumber: 2675793,
    year: 2019,
    type: "State",
    agency: "Production Scale-Up for Clean Energy Technology",
    challenge: "CEC GFO-18-302, Production Scale-Up. Award secured by GMA in 2019.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,675,793 awarded."
  },
  {
    slug: "grant-2019-primus-power-4000k",
    client: "Primus Power",
    industry: "clean-energy",
    amount: "$4,000,000",
    amountNumber: 4000000,
    year: 2019,
    type: "State",
    agency: "Production Scale-Up for Clean Energy Technology",
    challenge: "CEC GFO-18-302, Production Scale-Up. Award secured by GMA in 2019.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$4,000,000 awarded."
  },
  {
    slug: "grant-2019-ingomar-3500k",
    client: "Ingomar",
    industry: "clean-energy",
    amount: "$3,500,000",
    amountNumber: 3500000,
    year: 2019,
    type: "State",
    agency: "Food Production Investment Program (FPIP) - Ingomar",
    challenge: "CEC Food Production Investment Program, GFO-18-901. Award secured by GMA in 2019.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,500,000 awarded."
  },
  {
    slug: "grant-2019-confidential-client-3111k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$3,111,200",
    amountNumber: 3111200,
    year: 2019,
    type: "State",
    agency: "CEC Food Production Investment Program, GFO-18-901",
    challenge: "CEC Food Production Investment Program, GFO-18-901. Award secured by GMA in 2019.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,111,200 awarded."
  },
  {
    slug: "grant-2019-yuba-college-500k",
    client: "Yuba College",
    industry: "education",
    amount: "$500,000",
    amountNumber: 500000,
    year: 2019,
    type: "Federal",
    agency: "Yuba College\u00a0 - CTE Distance Education Expansion 2019",
    challenge: "Improving Online CTE Pathways 2019. Award secured by GMA in 2019.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$500,000 awarded."
  },
  {
    slug: "grant-2018-city-of-redding-19959k",
    client: "City of Redding",
    industry: "clean-energy",
    amount: "$19,959,536",
    amountNumber: 19959536,
    year: 2018,
    type: "State",
    agency: "SGC AHSC Round 3, Block 7 Net Zero Housing (Jun 2018)",
    challenge: "SGC AHSC Round 3, Block 7 Net Zero Housing (Jun 2018). Award secured by GMA in 2018.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$19,959,536 awarded."
  },
  {
    slug: "grant-2018-hcd-sgc-19960k",
    client: "HCD / SGC",
    industry: "clean-energy",
    amount: "$19,960,000",
    amountNumber: 19960000,
    year: 2018,
    type: "State",
    agency: "Strategic Growth Council Award, Block 7 Net Zero Housing & Downtown Activation Project",
    challenge: "AHSC, Block 7 Net Zero Housing (same award as above). Award secured by GMA in 2018.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$19,960,000 awarded."
  },
  {
    slug: "grant-2018-ladot-36100k",
    client: "LADOT",
    industry: "transportation",
    amount: "$36,100,000",
    amountNumber: 36100000,
    year: 2018,
    type: "State",
    agency: "112 Electric Buses including mobile eye safety automated braking systems plus infrastructure at 5 depots",
    challenge: "CalSTA TIRCP grant to procure 112 zero-emission electric transit buses and related depot charging infrastructure for the City of Los Angeles. (Announced award $36.1M).",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$36,100,000 awarded."
  },
  {
    slug: "grant-2018-shasta-regional-transportation-age",
    client: "Shasta Regional Transportation Agency",
    industry: "transportation",
    amount: "$8,600,000",
    amountNumber: 8600000,
    year: 2018,
    type: "State",
    agency: "16 Northern California Counties to fund electric buses for the North State I-5 Corridor",
    challenge: "CalSTA TIRCP, North State electric buses (spring 2018). Award secured by GMA in 2018.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$8,600,000 awarded."
  },
  {
    slug: "grant-2018-calstart-7000k",
    client: "CALSTART",
    industry: "transportation",
    amount: "$7,000,000",
    amountNumber: 7000000,
    year: 2018,
    type: "State",
    agency: "CALSTART for Ultra-Low NOx Heavy-Duty Truck Demonstration",
    challenge: "CARB Ultra-Low NOx Heavy-Duty Truck Demo (Mar 2018). Award secured by GMA in 2018.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$7,000,000 awarded."
  },
  {
    slug: "grant-2017-south-coast-aqmd-10000k",
    client: "South Coast AQMD",
    industry: "technology",
    amount: "$10,000,000",
    amountNumber: 10000000,
    year: 2017,
    type: "State",
    agency: "South Coast Air Quality Management District - Southern California Advanced Sustainable Freight Demonstration",
    challenge: "CEC GFO-16-604, Sustainable Freight Demonstration. Award secured by GMA in 2017.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$10,000,000 awarded."
  },
  {
    slug: "grant-2017-alameda-county-400k",
    client: "Alameda County",
    industry: "clean-energy",
    amount: "$400,000",
    amountNumber: 400000,
    year: 2017,
    type: "Federal",
    agency: "Lewelling Blvd. SRTS | 2017 Regional Active Transportation Program (ATP) Cycle 3",
    challenge: "2017 ATP Cycle 3, Lewelling Blvd SRTS. Award secured by GMA in 2017.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$400,000 awarded."
  },
  {
    slug: "grant-2017-alameda-county-330k",
    client: "Alameda County",
    industry: "transportation",
    amount: "$330,000",
    amountNumber: 330000,
    year: 2017,
    type: "Federal",
    agency: "Somerset Ave. School Corridor | 2017 Regional Active Transportation Program (ATP) Cycle 3",
    challenge: "2017 ATP Cycle 3, Somerset Ave School Corridor. Award secured by GMA in 2017.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$330,000 awarded."
  },
  {
    slug: "grant-2017-alameda-county-542k",
    client: "Alameda County",
    industry: "technology",
    amount: "$542,000",
    amountNumber: 542000,
    year: 2017,
    type: "Federal",
    agency: "Fairview Elementary | 2017 Regional Active Transportation Program (ATP) Cycle 3",
    challenge: "2017 ATP Cycle 3, Fairview Elementary. Award secured by GMA in 2017.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$542,000 awarded."
  },
  {
    slug: "grant-2016-city-of-redding-20000k",
    client: "City of Redding",
    industry: "clean-energy",
    amount: "$20,000,000",
    amountNumber: 20000000,
    year: 2016,
    type: "State",
    agency: "Affordable Housing and Sustainable Communities Program | Strategic Growth Council",
    challenge: "SGC AHSC Round 2, Downtown Loop & Affordable Housing. Award secured by GMA in 2016.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$20,000,000 awarded."
  },
  {
    slug: "grant-2016-zip-power-formerly-olidata-smart-c",
    client: "Zip Power (formerly Olidata Smart Cities)",
    industry: "technology",
    amount: "$1,400,000",
    amountNumber: 1400000,
    year: 2016,
    type: "State",
    agency: "CEC EPIC Advanced Energy Communities (Mar 2016)",
    challenge: "CEC EPIC Advanced Energy Communities (Mar 2016). Award secured by GMA in 2016.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,400,000 awarded."
  },
  {
    slug: "grant-2016-ohmconnect-3900k",
    client: "OhmConnect",
    industry: "clean-energy",
    amount: "$3,900,000",
    amountNumber: 3900000,
    year: 2016,
    type: "State",
    agency: "Empowering Prosumers to Access Wholesale Energy Products | CA Energy Commission",
    challenge: "CEC EPIC, Empowering Prosumers (EPC-15-083). Award secured by GMA in 2016.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,900,000 awarded."
  },
  {
    slug: "grant-2016-recargo-804k",
    client: "Recargo",
    industry: "clean-energy",
    amount: "$804,220",
    amountNumber: 804220,
    year: 2016,
    type: "State",
    agency: "EVSE Deployment | CA Energy Commission PON 15-603",
    challenge: "CEC PON 15-603, EVSE Deployment. Award secured by GMA in 2016.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$804,220 awarded."
  },
  {
    slug: "grant-2016-mendocino-county-2000k",
    client: "Mendocino County",
    industry: "water-infrastructure",
    amount: "$2,000,000",
    amountNumber: 2000000,
    year: 2016,
    type: "State",
    agency: "Prop 1 Groundwater Planning ( \u201c Mendocino County \u2013 2016 \u201d )",
    challenge: "Prop 1 Groundwater Planning ( \u201c Mendocino County \u2013 2016 \u201d ). Award secured by GMA in 2016.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,000,000 awarded."
  },
  {
    slug: "grant-2015-frontier-wind-862k",
    client: "Frontier Wind",
    industry: "clean-energy",
    amount: "$862,875",
    amountNumber: 862875,
    year: 2015,
    type: "State",
    agency: "CA Energy Commission PON 14-309",
    challenge: "CEC PON 14-309. Award secured by GMA in 2015.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$862,875 awarded."
  },
  {
    slug: "grant-2014-confidential-client-500k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$500,000",
    amountNumber: 500000,
    year: 2014,
    type: "State",
    agency: "CCEMC Grand Challenge: Innovative Carbon Uses, Round 1 (Apr 2014)",
    challenge: "CCEMC Grand Challenge: Innovative Carbon Uses, Round 1 (Apr 2014). Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$500,000 awarded."
  },
  {
    slug: "grant-2014-altair-5000k",
    client: "AltAir",
    industry: "technology",
    amount: "$5,000,000",
    amountNumber: 5000000,
    year: 2014,
    type: "State",
    agency: "CA Energy Commission PON-13-609 | Pilot-Scale and Commercial-Scale Advanced Biofuels Production | Facilities|CA Energy Commission \u2013 PON 13-609",
    challenge: "CEC PON-13-609, Advanced Biofuels Production. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$5,000,000 awarded."
  },
  {
    slug: "grant-2014-riverside-county-eda-549k",
    client: "Riverside County EDA",
    industry: "water-infrastructure",
    amount: "$549,996",
    amountNumber: 549996,
    year: 2014,
    type: "State",
    agency: "Riverside County Renewable Energy Development | CA Energy Commission PON 13-504",
    challenge: "CEC PON 13-504, Renewable Energy Development. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$549,996 awarded."
  },
  {
    slug: "grant-2014-confidential-client-699k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$699,996",
    amountNumber: 699996,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-504, Renewable Energy & Conservation Planning",
    challenge: "CEC PON-13-504, Renewable Energy & Conservation Planning. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$699,996 awarded."
  },
  {
    slug: "grant-2014-confidential-client-498k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$498,475",
    amountNumber: 498475,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-606, EV Charging Infrastructure",
    challenge: "CEC PON-13-606, EV Charging Infrastructure. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$498,475 awarded."
  },
  {
    slug: "grant-2014-confidential-client-474k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$474,052",
    amountNumber: 474052,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-606, EV Charging Infrastructure",
    challenge: "CEC PON-13-606, EV Charging Infrastructure. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$474,052 awarded."
  },
  {
    slug: "grant-2014-confidential-client-491k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$491,290",
    amountNumber: 491290,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-606, EV Charging Infrastructure",
    challenge: "CEC PON-13-606, EV Charging Infrastructure. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$491,290 awarded."
  },
  {
    slug: "grant-2014-confidential-client-497k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$497,357",
    amountNumber: 497357,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-606, EV Charging Infrastructure",
    challenge: "CEC PON-13-606, EV Charging Infrastructure. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$497,357 awarded."
  },
  {
    slug: "grant-2014-confidential-client-1700k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$1,700,000",
    amountNumber: 1700000,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-501, Emerging Technology Demonstration (Natural Gas)",
    challenge: "CEC PON-13-501, Emerging Technology Demonstration (Natural Gas). Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,700,000 awarded."
  },
  {
    slug: "grant-2014-confidential-client-360k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$360,000",
    amountNumber: 360000,
    year: 2014,
    type: "State",
    agency: "CEC PON-13-603, Alternative Fuel Readiness Plans",
    challenge: "CEC PON-13-603, Alternative Fuel Readiness Plans. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$360,000 awarded."
  },
  {
    slug: "grant-2014-confidential-client-648k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$648,284",
    amountNumber: 648284,
    year: 2014,
    type: "State",
    agency: "Proposition 84 Stormwater Grant Program - Round 2",
    challenge: "SWRCB Prop 84 Stormwater Grant Program, Round 2. Award secured by GMA in 2014.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$648,284 awarded."
  },
  {
    slug: "grant-2013-confidential-client-223k",
    client: "Confidential Client",
    industry: "tribal",
    amount: "$223,769",
    amountNumber: 223769,
    year: 2013,
    type: "Federal",
    agency: "DOJ Coordinated Tribal Assistance FY13",
    challenge: "DOJ Coordinated Tribal Assistance FY13. Award secured by GMA in 2013.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$223,769 awarded."
  },
  {
    slug: "grant-2012-confidential-client-71k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$71,500",
    amountNumber: 71500,
    year: 2012,
    type: "State",
    agency: "PON-11-602 Alternative Fuels Infrastructure, EV Chargers",
    challenge: "CEC PON-11-602, EV Chargers. Award secured by GMA in 2012.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$71,500 awarded."
  },
  {
    slug: "grant-2012-confidential-client-499k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$499,512",
    amountNumber: 499512,
    year: 2012,
    type: "State",
    agency: "PON-11-602 Alternative Fuels Infrastructure, EV Chargers",
    challenge: "CEC PON-11-602, EV Chargers. Award secured by GMA in 2012.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$499,512 awarded."
  },
  {
    slug: "grant-2012-confidential-client-16k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$16,000",
    amountNumber: 16000,
    year: 2012,
    type: "State",
    agency: "PON-11-602 Alternative Fuels Infrastructure, EV Chargers",
    challenge: "CEC PON-11-602, EV Chargers. Award secured by GMA in 2012.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$16,000 awarded."
  },
  {
    slug: "grant-2010-confidential-client-skyonic-25000k",
    client: "Confidential Client (Skyonic)",
    industry: "broadband",
    amount: "$25,000,000",
    amountNumber: 25000000,
    year: 2010,
    type: "Federal",
    agency: "DOE Industrial Carbon Capture \u2013 Beneficial Reuse, Phase 2 (Jul 2010)",
    challenge: "DOE Industrial Carbon Capture \u2013 Beneficial Reuse, Phase 2 (Jul 2010). Award secured by GMA in 2010.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$25,000,000 awarded."
  },
  {
    slug: "grant-2010-confidential-client-5200k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$5,200,000",
    amountNumber: 5200000,
    year: 2010,
    type: "State",
    agency: "Alternative and Renewable Fuel and Vehicle Technology Program",
    challenge: "CEC PON-09-006, Alt. & Renewable Fuel and Vehicle Technology. Award secured by GMA in 2010.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$5,200,000 awarded."
  },
  {
    slug: "grant-2010-confidential-client-6400k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$6,400,000",
    amountNumber: 6400000,
    year: 2010,
    type: "State",
    agency: "Alternative and Renewable Fuel and Vehicle Technology Program",
    challenge: "CEC PON-09-006, Alt. & Renewable Fuel and Vehicle Technology. Award secured by GMA in 2010.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$6,400,000 awarded."
  },
  {
    slug: "grant-2009-confidential-client-3400k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$3,400,000",
    amountNumber: 3400000,
    year: 2009,
    type: "Federal",
    agency: "DOE Industrial Carbon Capture \u2013 Beneficial Reuse, Phase 1 (Oct 2009)",
    challenge: "DOE Industrial Carbon Capture \u2013 Beneficial Reuse, Phase 1 (Oct 2009). Award secured by GMA in 2009.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,400,000 awarded."
  },
  {
    slug: "grant-national-asian-pacific-center-on-aging-",
    client: "National Asian Pacific Center on Aging",
    industry: "nonprofits",
    amount: "$14,000,000",
    amountNumber: 14000000,
    type: "Federal",
    agency: "Senior Community Service Employment Program (SCSEP) - Mature Workforce Assistance | National Asian Pacific Center on Aging (NACPA)",
    challenge: "DOL SCSEP funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$14,000,000 awarded."
  },
  {
    slug: "grant-capital-area-realtors-fcu-500k",
    client: "Capital Area Realtors FCU",
    industry: "nonprofits",
    amount: "$500,000",
    amountNumber: 500000,
    type: "Federal",
    agency: "Community Development Revolving Loan Fund (CDRLF) | Capital Area Realtors Federal Credit Union, Rockville, MD",
    challenge: "NCUA Community Development Revolving Loan Fund funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$500,000 awarded."
  },
  {
    slug: "grant-capital-area-realtors-federal-credit-un",
    client: "Capital Area Realtors Federal Credit Union",
    industry: "nonprofits",
    amount: "Credit Facility",
    amountNumber: 0,
    type: "Federal",
    agency: "Federal Home Loan Bank Board (FHLB)",
    challenge: "Facilitated membership with FHLB \u2014 providing the Credit Union with a steady supply of lendable real estate funds at lower rates.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "Membership facility secured."
  },
  {
    slug: "grant-shasta-county-community-action-agency-3",
    client: "Shasta County Community Action Agency",
    industry: "clean-energy",
    amount: "$3,600,000",
    amountNumber: 3600000,
    type: "State",
    agency: "California Department of Housing and Community Development - CalHOME Grant",
    challenge: "HCD \u2013 rebuilding fire-destroyed mobile homes funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,600,000 awarded."
  },
  {
    slug: "grant-city-of-arcata-danco-communities-4460k",
    client: "City of Arcata / Danco Communities",
    industry: "clean-energy",
    amount: "$4,460,700",
    amountNumber: 4460700,
    type: "State",
    agency: "California Strategic Growth Council (SGC) | Affordable Housing and Sustainable Communities (AHSC)",
    challenge: "Strategic Growth Council AHSC award for Isaacson's Multifamily Housing HRI and STI Project.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$4,460,700 awarded."
  },
  {
    slug: "grant-rv-jensen-inc-669k",
    client: "RV Jensen, Inc.",
    industry: "clean-energy",
    amount: "$669,941",
    amountNumber: 669941,
    type: "Federal",
    agency: "Clean Vehicle Fueling Infrastructure Program Grant | CNG Fuel Station on Highway 99 in Fresno, CA for RV Jensen, Inc.",
    challenge: "San Joaquin Valley APCD, CNG station on Hwy 99 funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$669,941 awarded."
  },
  {
    slug: "grant-rv-jensen-1700k",
    client: "RV Jensen",
    industry: "transportation",
    amount: "$1,700,000",
    amountNumber: 1700000,
    type: "Federal",
    agency: "USDA Higher Blends Infrastructure Incentive Program (HBIIP)",
    challenge: "\u200b\u200b County of Monterey\u200b California Air Resources Board (CARB) Monterey Bay Municipal Fleet Electrification and Workforce Accelerator Technology Demonstration and Pilot Projects (Green Zones) $15,713,981 CARB/$31,432.827 Total Project Ready to Pursue Your Next Funding opportunity? With $2.5 billion+ secured and a 90.2% win rate, GMA helps organizations at every scale compete for and win the funding they need. SCHEDULE A STRATEGY CALL VIEW OUR SERVICES bottom of page",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,700,000 awarded."
  },
  {
    slug: "grant-calstart-2160k",
    client: "CALSTART",
    industry: "transportation",
    amount: "$2,160,000",
    amountNumber: 2160000,
    type: "State",
    agency: "EV Deployment \u2013 Data Collection",
    challenge: "EV Deployment \u2013 Data Collection funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,160,000 awarded."
  },
  {
    slug: "grant-calstart-688k",
    client: "CALSTART",
    industry: "transportation",
    amount: "$688,215",
    amountNumber: 688215,
    type: "State",
    agency: "California Air Resources Board | Hybrid and Zero-Emission Truck and Bus Voucher Incentive Project",
    challenge: "CARB HVIP funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$688,215 awarded."
  },
  {
    slug: "grant-confidential-client-16667k",
    client: "Confidential Client",
    industry: "transportation",
    amount: "$16,667,167",
    amountNumber: 16667167,
    type: "State",
    agency: "CARB Off-Road solicitation",
    challenge: "CARB Off-Road solicitation funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$16,667,167 awarded."
  },
  {
    slug: "grant-ladot-3215k",
    client: "LADOT",
    industry: "transportation",
    amount: "$3,215,977",
    amountNumber: 3215977,
    type: "Federal",
    agency: "US Department of Transportation - 5339 Funding - Grants for Bus and Bus Facilities",
    challenge: "FTA Section 5339 Bus & Bus Facilities funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$3,215,977 awarded."
  },
  {
    slug: "grant-alameda-county-908k",
    client: "Alameda County",
    industry: "transportation",
    amount: "$908,000",
    amountNumber: 908000,
    type: "Federal",
    agency: "DOT | Fairmont Drive HSIP guardrail project",
    challenge: "DOT Fairmont Drive HSIP guardrail funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$908,000 awarded."
  },
  {
    slug: "grant-alameda-county-589k",
    client: "Alameda County",
    industry: "clean-energy",
    amount: "$589,000",
    amountNumber: 589000,
    type: "Federal",
    agency: "FHWA | Castlewood HBP",
    challenge: "FHWA Castlewood HBP funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$589,000 awarded."
  },
  {
    slug: "grant-state-of-new-jersey-508k",
    client: "State of New Jersey",
    industry: "agriculture",
    amount: "$508,784",
    amountNumber: 508784,
    type: "Federal",
    agency: "USDA Meat and Poultry Processing Expansion Program",
    challenge: "USDA Meat & Poultry Processing Expansion funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$508,784 awarded."
  },
  {
    slug: "grant-el-dorado-county-600k",
    client: "El Dorado County",
    industry: "nonprofits",
    amount: "$600,000",
    amountNumber: 600000,
    type: "State",
    agency: "Superior Court Recidivism Reduction Grant | CA Superior Court",
    challenge: "CA Superior Court Recidivism Reduction funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$600,000 awarded."
  },
  {
    slug: "grant-webber-creek-196k",
    client: "Webber Creek",
    industry: "water-infrastructure",
    amount: "$196,500",
    amountNumber: 196500,
    type: "State",
    agency: "Fire Suppression | Cal Fire",
    challenge: "Cal Fire fire suppression funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$196,500 awarded."
  },
  {
    slug: "grant-cwpp-73k",
    client: "CWPP",
    industry: "clean-energy",
    amount: "$73,250",
    amountNumber: 73250,
    type: "State",
    agency: "Fire Suppression | Cal Fire",
    challenge: "Cal Fire fire suppression funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$73,250 awarded."
  },
  {
    slug: "grant-thermalito-water-sewer-district-2700k",
    client: "Thermalito Water & Sewer District",
    industry: "water-infrastructure",
    amount: "$2,700,000",
    amountNumber: 2700000,
    type: "State",
    agency: "East Trunk Line | State Water Resource Control Board \u2013 SRF Loan Program",
    challenge: "SWRCB SRF loan, East Trunk Line funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,700,000 awarded."
  },
  {
    slug: "grant-blue-planet-940k",
    client: "Blue Planet",
    industry: "clean-energy",
    amount: "$940,767",
    amountNumber: 940767,
    type: "State",
    agency: "Innovative Carbon Uses | Climate Change and Emissions Management Corporation (CCEMC)",
    challenge: "CCEMC Innovative Carbon Uses funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$940,767 awarded."
  },
  {
    slug: "grant-confidential-client-334k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$334,000",
    amountNumber: 334000,
    type: "State",
    agency: "PON-2301 Round 2 - Workplace EVSE Demonstration Program",
    challenge: "NYSERDA PON-2301 Round 2, Workplace EVSE funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$334,000 awarded."
  },
  {
    slug: "grant-confidential-client-1000k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$1,000,000",
    amountNumber: 1000000,
    type: "State",
    agency: "PON-2301 Round 2 - Workplace EVSE Demonstration Program",
    challenge: "NYSERDA PON-2301 Round 2, Workplace EVSE funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,000,000 awarded."
  },
  {
    slug: "grant-confidential-client-1000k-1",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$1,000,000",
    amountNumber: 1000000,
    type: "State",
    agency: "PON-2301 Round 2 - Workplace EVSE Demonstration Program",
    challenge: "NYSERDA EVSE Demonstration Program funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,000,000 awarded."
  },
  {
    slug: "grant-confidential-client-2100k",
    client: "Confidential Client",
    industry: "transportation",
    amount: "$2,100,000",
    amountNumber: 2100000,
    type: "State",
    agency: "Energy Innovations Small Grant Transportation Program",
    challenge: "CEC Energy Innovations Small Grant, Transportation funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,100,000 awarded."
  },
  {
    slug: "grant-confidential-client-2200k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$2,200,000",
    amountNumber: 2200000,
    type: "State",
    agency: "CEC Alternative Renewable Fuel",
    challenge: "CEC Alternative Renewable Fuel funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$2,200,000 awarded."
  },
  {
    slug: "grant-confidential-client-15700k",
    client: "Confidential Client",
    industry: "broadband",
    amount: "$15,700,000",
    amountNumber: 15700000,
    type: "State",
    agency: "CEC Alternative & Renewable Fuel Infrastructure",
    challenge: "CEC Alternative & Renewable Fuel Infrastructure funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$15,700,000 awarded."
  },
  {
    slug: "grant-great-valley-center-legacy-funds-6k",
    client: "Great Valley Center Legacy Funds",
    industry: "clean-energy",
    amount: "$6,500",
    amountNumber: 6500,
    type: "Federal",
    agency: "North Valley Renewable Energy Strategic Plan Development Support",
    challenge: "North Valley Renewable Energy Strategic Plan funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$6,500 awarded."
  },
  {
    slug: "grant-child-abuse-prevention-center-10k",
    client: "Child Abuse Prevention Center",
    industry: "transportation",
    amount: "$10,000",
    amountNumber: 10000,
    type: "Federal",
    agency: "Program evaluation services",
    challenge: "Program evaluation services funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$10,000 awarded."
  },
  {
    slug: "grant-us-fish-wildlife-service-25k",
    client: "US Fish & Wildlife Service",
    industry: "water-infrastructure",
    amount: "$25,000",
    amountNumber: 25000,
    type: "Federal",
    agency: "Non-native Removal at Big Creek Ecological Reserve",
    challenge: "Non-native removal, Big Creek Ecological Reserve funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$25,000 awarded."
  },
  {
    slug: "grant-us-fish-wildlife-service-25k-1",
    client: "US Fish & Wildlife Service",
    industry: "water-infrastructure",
    amount: "$25,000",
    amountNumber: 25000,
    type: "Federal",
    agency: "Non-native removal on Deer Creek in Tehama County, CA",
    challenge: "Non-native removal, Deer Creek (Tehama Co.) funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$25,000 awarded."
  },
  {
    slug: "grant-state-parks-department-32k",
    client: "State Parks Department",
    industry: "clean-energy",
    amount: "$32,000",
    amountNumber: 32000,
    type: "Federal",
    agency: "rundo [giant cane plant pest] removal and GIS mapping",
    challenge: "Arundo removal and GIS mapping funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$32,000 awarded."
  },
  {
    slug: "grant-portland-cement-association-45k",
    client: "Portland Cement Association",
    industry: "clean-energy",
    amount: "$45,000",
    amountNumber: 45000,
    type: "Federal",
    agency: "National Recycling Study",
    challenge: "National Recycling Study funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$45,000 awarded."
  },
  {
    slug: "grant-association-of-bay-area-governments-50k",
    client: "Association of Bay Area Governments",
    industry: "clean-energy",
    amount: "$50,000",
    amountNumber: 50000,
    type: "State",
    agency: "CA Energy Commission Grant Administration Services",
    challenge: "CEC grant administration services funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$50,000 awarded."
  },
  {
    slug: "grant-butte-county-rcd-68k",
    client: "Butte County RCD",
    industry: "water-infrastructure",
    amount: "$68,640",
    amountNumber: 68640,
    type: "Federal",
    agency: "Watershed coordination on Big Chico and Little Chico Creeks",
    challenge: "Big Chico & Little Chico Creeks watershed coordination funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$68,640 awarded."
  },
  {
    slug: "grant-lindo-channel-monitoring-program-75k",
    client: "Lindo Channel Monitoring Program",
    industry: "water-infrastructure",
    amount: "$75,000",
    amountNumber: 75000,
    type: "Federal",
    agency: "Team Arundo del Norte",
    challenge: "Lindo Channel riparian habitat and invasive species monitoring program.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$75,000 awarded."
  },
  {
    slug: "grant-tehama-county-rcd-85k",
    client: "Tehama County RCD",
    industry: "clean-energy",
    amount: "$85,000",
    amountNumber: 85000,
    type: "Federal",
    agency: "Subcontract with Tehama County RCD",
    challenge: "Subcontract funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$85,000 awarded."
  },
  {
    slug: "grant-deer-creek-roads-survey-175k",
    client: "Deer Creek Roads Survey",
    industry: "transportation",
    amount: "$175,000",
    amountNumber: 175000,
    type: "Federal",
    agency: "Deer Creek Roads Survey",
    challenge: "Deer Creek Roads Survey funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$175,000 awarded."
  },
  {
    slug: "grant-california-watershed-funding-database-2",
    client: "California Watershed Funding Database",
    industry: "water-infrastructure",
    amount: "$211,000",
    amountNumber: 211000,
    type: "State",
    agency: "California Watershed Network",
    challenge: "Developed statewide watershed funding database prototype and conducted user training.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$211,000 awarded."
  },
  {
    slug: "grant-swrcb-subcontract-450k",
    client: "SWRCB subcontract",
    industry: "water-infrastructure",
    amount: "$450,000",
    amountNumber: 450000,
    type: "State",
    agency: "Joint program with the Big Chico Creek Watershed Alliance",
    challenge: "Joint program with Big Chico Creek Watershed Alliance funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$450,000 awarded."
  },
  {
    slug: "grant-city-of-chico-subcontract-498k",
    client: "City of Chico subcontract",
    industry: "water-infrastructure",
    amount: "$498,000",
    amountNumber: 498000,
    type: "Local",
    agency: "Verbena Fields and Bidwell Avenue Restoration",
    challenge: "Verbena Fields & Bidwell Ave restoration funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$498,000 awarded."
  },
  {
    slug: "grant-red-bank-reeds-creek-watershed-projects",
    client: "Red Bank & Reeds Creek Watershed Projects",
    industry: "water-infrastructure",
    amount: "$540,000",
    amountNumber: 540000,
    type: "Federal",
    agency: "Permit coordination and over-all project administration",
    challenge: "Permit coordination and administration funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$540,000 awarded."
  },
  {
    slug: "grant-iron-canyon-fish-ladder-599k",
    client: "Iron Canyon Fish Ladder",
    industry: "water-infrastructure",
    amount: "$599,821",
    amountNumber: 599821,
    type: "Federal",
    agency: "California Department of Fish and Wildlife / Wildlife Conservation Board",
    challenge: "Phase 1 of multi-phase project: environmental compliance, permit coordination, and pre-construction design.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$599,821 awarded."
  },
  {
    slug: "grant-deer-creek-204-project-600k",
    client: "Deer Creek 204 Project",
    industry: "water-infrastructure",
    amount: "$600,000",
    amountNumber: 600000,
    type: "State",
    agency: "Included permit coordination and overall project management",
    challenge: "Permit coordination and management funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$600,000 awarded."
  },
  {
    slug: "grant-us-fish-wildlife-service-630k",
    client: "US Fish & Wildlife Service",
    industry: "water-infrastructure",
    amount: "$630,000",
    amountNumber: 630000,
    type: "Federal",
    agency: "Iron Canyon Fish Ladder",
    challenge: "Iron Canyon Fish Ladder funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$630,000 awarded."
  },
  {
    slug: "grant-resources-legacy-fund-650k",
    client: "Resources Legacy Fund",
    industry: "water-infrastructure",
    amount: "$650,000",
    amountNumber: 650000,
    type: "Federal",
    agency: "Funding for land acquisition and watershed outreach",
    challenge: "Land acquisition and watershed outreach funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$650,000 awarded."
  },
  {
    slug: "grant-brickyard-creek-watershed-project-659k",
    client: "Brickyard Creek Watershed Project",
    industry: "water-infrastructure",
    amount: "$659,000",
    amountNumber: 659000,
    type: "Federal",
    agency: "Brickyard Creek Watershed Project- Phase 1 and Phase 2",
    challenge: "Phase 1 and Phase 2 funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$659,000 awarded."
  },
  {
    slug: "grant-national-science-foundation-667k",
    client: "National Science Foundation",
    industry: "manufacturing",
    amount: "$667,000",
    amountNumber: 667000,
    type: "Federal",
    agency: "Concrete Industry Management Expansion Program (one of three partners)",
    challenge: "Concrete Industry Management Expansion funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$667,000 awarded."
  },
  {
    slug: "grant-calfed-ecosystem-roundtable-671k",
    client: "CALFED Ecosystem Roundtable",
    industry: "water-infrastructure",
    amount: "$671,000",
    amountNumber: 671000,
    type: "Federal",
    agency: "Sacramento River Conservation Area Working Landscapes Grant",
    challenge: "Sacramento River Conservation Area Working Landscapes funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$671,000 awarded."
  },
  {
    slug: "grant-sierra-nevada-conservancy-1000k",
    client: "Sierra Nevada Conservancy",
    industry: "clean-energy",
    amount: "$1,000,000",
    amountNumber: 1000000,
    type: "State",
    agency: "Iron Canyon Fish Passage construction",
    challenge: "Iron Canyon Fish Passage construction funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,000,000 awarded."
  },
  {
    slug: "grant-swrcb-1300k",
    client: "SWRCB",
    industry: "water-infrastructure",
    amount: "$1,300,000",
    amountNumber: 1300000,
    type: "State",
    agency: "Big Chico Creek and Lindo Channel Floodplain, Wetland and Riparian restoration",
    challenge: "Big Chico Creek & Lindo Channel restoration funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,300,000 awarded."
  },
  {
    slug: "grant-calfed-1400k",
    client: "CALFED",
    industry: "water-infrastructure",
    amount: "$1,400,000",
    amountNumber: 1400000,
    type: "Federal",
    agency: "Sacramento River Monitoring Program",
    challenge: "Sacramento River Monitoring Program funding secured by GMA.",
    approach: "GMA provided comprehensive grant strategy and application development.",
    result: "$1,400,000 awarded."
  },
];


export type Resource = {
  slug: string;
  title: string;
  category: "Insight" | "Whitepaper" | "News" | "Guide" | "Digest";
  date: string; // ISO
  readMinutes: number;
  author: string;
  excerpt: string;
  body: string[]; // paragraphs
  tags: string[];
};

export const resources: Resource[] = [
  {
    slug: "/newsletters/weekly-funding-digest-aug-31-sept-4-2026",
    title: "Weekly Funding Digest: Aug 31–Sept 4, 2026",
    category: "Digest",
    date: "2026-08-31",
    readMinutes: 6,
    author: "GMA Editorial Team",
    excerpt: "Our comprehensive weekly breakdown of new federal, state, and foundational funding opportunities across key sectors.",
    body: [],
    tags: ["Funding", "Grants", "Policy"],
  },
  {
    slug: "/newsletters/weekly-funding-digest-aug-24-28-2026",
    title: "Weekly Funding Digest: Aug 24–28, 2026",
    category: "Digest",
    date: "2026-08-24",
    readMinutes: 6,
    author: "GMA Editorial Team",
    excerpt: "Our comprehensive weekly breakdown of new federal, state, and foundational funding opportunities across key sectors.",
    body: [],
    tags: ["newsletter", "funding digest"]
  },
  {
    slug: "/newsletters/weekly-funding-digest-aug-17-21-2026",
    title: "Weekly Funding Digest: Aug 17–21, 2026",
    category: "Digest",
    date: "2026-08-17",
    readMinutes: 5,
    author: "GMA Editorial Team",
    excerpt: "Our comprehensive weekly breakdown of new federal, state, and foundational funding opportunities across key sectors.",
    body: [],
    tags: ["newsletter", "funding digest"]
  },
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
  { quote: "The GMA team surged in at a critical moment when our business development team was at full capacity. Their deep expertise in the intricacies of CEC grants played a key role in helping us secure a $1M contract. This successful outcome clearly demonstrated the ROI of engaging an external group for proposal preparation support.", author: "Teal Dimitrie", role: "Chief of Staff to the Managing Principal Spatial Informatics Group" },
  { quote: "Thanks for all your help! We would have been lost without it!", author: "Jason Houck", role: "Policy Director Form Energy" },
  { quote: "Working with Grant Management Associates was an absolute pleasure! The quality and guidance of the grant application they provided was amazing. The team was responsive to all our questions and attentive to every deadline. I highly recommend GMA for your next grant application.", author: "Jorge Meza", role: "Permits and Compliance Team GAWFCO Enterprises, Inc." },
  { quote: "What a tremendous past week, it feels like we all came together and pulled off the impossible. The Paradigm team truly recognizes and deeply appreciates the level of professionalism and diligence your team maintained throughout this process. Kristin, I commend you for assembling such a dream team!", author: "Tristann Dias", role: "Business Development Manager Paradigm Energy" },
  { quote: "The grant writing teams at GMA have now assisted Microporous with three Federal (DOE MESC) grant applications and one Federal (IRS Section 48C) investment tax credit application.   I’m pleased to report that these efforts have resulted in a nine-figure grant award and a nine-figure tax credit allocation award for Microporous which have been a major boost to the multiple nine-figure domestic project these Federal awards support.  GMA’s team of professional and experienced grant writers were a pleasure to work with and absolutely vital to our success in securing these important Federal awards.  Thank you GMA!", author: "Brad Reed", role: "Vice President, Corporate Development and Innovation Microporous, LLC" },
  { quote: "GMA's expertise was crucial in helping us be selected for the grant and navigate the pre-award process. Being new to the Federal grant process, their proactive approach and collaborative spirit have made a significant impact, providing valuable guidance and assistance as we move forward, even in the holding pattern.", author: "Beth Taylor", role: "Chief Financial and Administrative Precast/Prestressed Concrete Institute" },
  { quote: "THANK YOU!!! Very excited about the work ahead of us. This is a game changer! Couldn't have done it without your guidance and support in the application process. I'm very grateful! Mark this as a win in your books!", author: "Will Clayton", role: "Founder and CEO Sky Harvest Carbon" },
  { quote: "You helped me with a proposal for a big opportunity last year. We knew at the time of certain other proposals being submitted that would be tough to beat out, and we tried to address them in our proposal. Ultimately, we were not successful. But I've since seen the winning proposal and looked back at ours. Ours was, in my opinion, much better, and I'm pretty sure external factors played a role. In any case, that was still the best planning grant proposal I've every written. Thanks for your help with it!", author: "Mark Billingsley", role: "Director, Center ICE: Center for Innovation, Commercialization, and Entrepreneurship" },
  { quote: "Kristin and her colleagues excel at assisting our team to plan and execute. Research, strategies and communication are comprehensive and inspire confidence in the results. Top qualities: Great Results, Good Value, Creative.", author: "Thomas Tenorio", role: "Executive Director Community Action Agency of Butte County" },
  { quote: "Kristin Cooper and her team at GMA have been spectacular partners to Coulomb. They are extraordinarily good at delivering quality work under the inevitable short deadlines.", author: "Richard Lowenthal", role: "CEO Coulomb Technologies" },
  { quote: "GMA assisted our company in a grant application before the California Energy Commission with Kristin Cooper as the lead. She was a valued member of the team, bringing both technical and strategic advice and experience to the process. Most importantly, she kept the team focused on the critical issues and criteria at hand. There was a great deal of work involved in this application, and the firm was flexible and responsive throughout the process. I would highly recommend Kristin and her team.", author: "Colleen Quinn", role: "President CQ Consulting, New York, New York" },
  { quote: "I have successfully collaborated with Kristen Cooper and other Grant Management Associates (GMA) consultants for about five years on a variety of research funding, grant and contract management, and program evaluation applications. During this time, I have come to greatly appreciate the individual and collective diversity and depth of expertise demonstrated by GMA’s professional associates. They are outcome driven and produce results.", author: "Joe A Bezzara", role: "Emeritus Founding Executive Director California State University Agricultural Research Institute (ARI)" },
  { quote: "GMA has really come through for us! Ed, Rande and Kristin, thank you all so much for your hard work and patience down to the wire assembling all of our knowledge and distilling it into a few pages, which aligned us around what needs to be done and enabled us to communicate it better than we’ve ever been able to before.", author: "Joe Tomlinson", role: "Founder & CEO PV Solutions" },
  { quote: "Thank you for providing your grant writing, collaboration and, I’m told, your program evaluation expertise in the Strong Collaborations Make Successful Grant Awards workshop in Sacramento. You were very generous and we are very appreciative. Susan says more than half the attendees were from RCDs and your hands on experience made the training extremely relative to their current ‘unfunded’ needs.", author: "Campbell Ingram", role: "Executive Officer Sacramento-San Joaquin Delta Conservancy" },
  { quote: "The GMA personnel took a level of ownership and sense of urgency that made it feel as if they were as vested in securing the grant as our internal team. Their attention to detail and willingness to be available at all hours of the day allowed us to maintain the momentum necessary to make our best case.", author: "Haresh Patel", role: "CEO SCS Renewables" },
  { quote: "I have worked with Susan Strachan and Kristin Cooper for the past ten years on numerous projects. We have written many proposals together and executed several environmental projects. Susan and Kristin are the two most professional, talented, and organized colleagues I know. They are both well connected in the grant community and I wouldn't hesitate to work with them on another project. I continually recommend their professional services to others. Once you get to know these two women, you will also be recommending them to your business associates. I look forward to our next project together and I know others will be as impressed as I am.", author: "Jeffrey Mott", role: "Director, Ecological Reserves CSU, Chico" },
  { quote: "I have had the pleasure of working on various projects with Kristin Cooper for several years now, and time and again I am impressed with the high level of professionalism and dedication to the work environment she ably brings for the sake of progress. Additionally, I have worked alongside her giving several professional presentations at state and national association meetings and without question she exhibits excellent organizational, time management and speaking skills.", author: "Robert E. Wallace", role: "Executive Director Concrete Promotion Council of Northern California" },
  { quote: "Upon meeting Kristin years ago it was clear that she was on the leading edge of her field. Whether she was teaching sustainability or applying it in a corporate capacity, the common thread has been Kristin is trying to make the world a better place. If I were to start a think tank, she would be one of my first calls.” Michael R. Fletcher, Northeast Regional Sales Manager Titan America “I have worked with Kristin Cooper for several years while in the Office of Sponsored Programs at California State University, Chico. She is a highly motivated, bright and engaging professional who took an exceptional leadership position in working with diverse environmental constituencies in securing multi-million dollar CalFED water stewardship grants for Northern California. A truly creative genius and legislative wizard!", author: "Juri Brilts", role: "Grant Developer CSU, Chico" },
  { quote: "Over the last several years I have worked with Kristin Cooper and Susan Strachan on state water issues that have required extensive knowledge of water policy, legislation and funding requirements. Their work in these areas is top notch; their dedication to these important issues is unparalleled. They are strong, well spoken advocates for the north state.", author: "Robert Meacher", role: "3rd term County Supervisor Plumas County" },
  { quote: "We worked with Kristin in preparing some complex applications for DOE grants and she was a great partner in teaching us how to navigate the rules and put together a strong and compliant application. I strongly recommend working with her in any grant process.", author: "Cristobal Underraga", role: "Director Project Development Calera Corporation" },
  { quote: "I have had the pleasure of working with Melissa Uppendahl on two grant submissions to Butte County Department of Behavioral Health and the California Department of Rehabilitation. Both projects were fully funded bringing over $621,000 to Stairways Recovery Inc. Melissa has an excellent work ethic, attention to detail and superior writing skills. I highly recommend Melissa as a grant writing professional.", author: "Mike Little", role: "Founder and CEO Stairways Recovery, Inc." },
  { quote: "PJ Shepard has rapidly acquired an understanding of our product roadmap, our company’s value proposition and our evolving needs. She has taken our badly written documents and awkward power points and transformed them into a lucid, coherent and technically accurate positioning statements. As CEO, I am pleased to say that I can retire from grant writing comfortable in the knowledge that PJ has my company’s interests covered regarding funding opportunities.", author: "Wendy Arienzo", role: "Founder and CEO Array Converter, Inc." },
  { quote: "Kristin Cooper is the personification of excellence--in every stage of the grant development process. She brings a breadth of experience and a depth of understanding to any project, having worked with organizations, large and small, start-up and established. If there is funding to be found, Ms. Carter is the one to go to.", author: "Judd Cassel Williams", role: "President Cassel Consulting Group" },
  { quote: "Kristin Cooper was instrumental in getting us together on the most complicated grant I have ever been involved in my close to 20 years at the University. Not only was her work effective in a collaborative effort involving diverse disciplines and personalities, it was also fun. I would turn to her for any grant writing/negotiating that I would need!", author: "Eric Larsen", role: "PhD, Associate Research Scientist Department of Environmental Design University of California, Davis" },
  { quote: "I enthusiastically recommend Kristin for her abilities, ranging from business development to community organization and project management. I worked with her on a project that embodied a private sector approach to environmental problem-solving; it paired a for-profit ecological services contractor with a not-for-profit community foundation. Kristin is very adept within these complex, yet important, partnerships. She is one of the most energetic, creative, and open-minded professionals with whom I have worked. Her people skills are excellent and she is a catalyst, bringing the best from everyone in furthering excellent results. Kristin has a sophisticated understanding of environmental complexities, yet is results oriented. We need more people like her if we are ever to tackle our daunting environmental problems.", author: "Greg DeYoung", role: "Senior Vice President Wildlands, Inc." },
  { quote: "Kristin—it was a pleasure to work with you and your team members.  The focus by all involved made this challenging effort possible.  Well done.  I am very pleased with GMA.  Thank you for all you have done for AH.\" John M. Gustin | Vice President | Construction Executive Office of Design and Construction | Adventist Health \"Kristin Cooper recently led a grant writing workshop for the Delta Conservancy group. As a participant I appreciated her generosity of time and expertise. She shared extensive knowledge about the process of finding, applying for and managing state and federal grants. The Center for Land-Based Learning has managed these kinds grants before, but I am fairly new to this work, so this was especially useful for me. Clearly speaking from years of experience, she shared her insights on the way things actually go, the kind of information that first time applicants will not know by reading the RFP or even the entire agency website.", author: "Nina Suzuki", role: "SLEWS Program Director Center For Land-Based Learning" },
  { quote: "I am grateful for this opportunity to recommend Grant Management Associates. I have known and worked with Kristin Cooper for nearly two decades and have in this time greatly appreciated her insightfulness, business acumen and personal integrity.", author: "Michael Moretti", role: "Principal Arrow Destination Marketing Group" },
  { quote: "I have known Kristin professionally for many years and have sought her advice on numerous projects. She is the best in her field, tremendously creative and innovative. She shares my philosophy of honesty, saying what you mean, coming to the table prepared and treating customers as you would want to be treated. I look forward to a long and successful business relationship with Grant Management Associates and Kristin.", author: "Jody Gallaway", role: "President Gallaway Enterprises, Inc." },
  { quote: "Grant Management Associates and Kristin Cooper have been long time supporters of our non-profit, startup incubator Chicostart.  They have been amazing at offering timely advice to steer us in the right direction for funding opportunities.  Their insight and expertise has helped us save immense amounts of time which is critical for us to keep our non-profit in the black.  A big high five out to this amazing community focused business!", author: "Wendy Porter", role: "Managing Partner Chicostart" },
  { quote: "Grant Management Associates' comments and ideas were well received by FlowTech and we value the positive impact GMA has made on our grant proposal. We are glad to have GMA as a resource for future needs.", author: "Aaron Lieben", role: "Marketing & Operations Director FlowTech" },
  { quote: "I was the point person for a response to the California Energy Commission’s GFO-15-605 Hydrogen Light Duty Infrastructure grant. I can only say good things about Grant Management Associates. Kristin, Ed and Danielle knew this was my first venture into grants, and as Kristin stated, “it was a monster”. Truer words were never spoken. I am a partner with Advanced Emission Control Solutions, and my partners are Bill Jensen, Ron King, and Mike Martin, are the main team for Robert V. Jensen, Inc. With GMA’s help, this complex RFP was done on time and within budget. I totally recommend GMA to any company or public agency looking for help in grant writing. It was a pleasure to work with them from beginning to end. Please call me at (559)285-8727 if you would like to speak to me about their work ethic.", author: "Bob Gaffney", role: "Partner Advanced Emissions Control Solutions" },
  { quote: "We were faced with a daunting DOE application and pulling together a complex proposal on an exceedingly tight timeline. While we had considerable resources in-house, we still turned to GMA. They helped us to navigate the mysteries of the process, focus on what was most important, and stay on track. Diana is an exceptionally talented editor and coach -- responsible, smart, and able to cut to the quick when need be. If we win this grant it will be owing in no mall measure to the guidance we received from GMA.", author: "Tobias Hecht", role: "PhD, Senior Project Manager ReJoule, Inc." },
  { quote: "Successfully competing for grants starts with the application process. Your chances of winning a grant are directly related to the quality of the written applications. If you want to improve your competitive position, there is no better way than to engage Grant Management Associated. They deliver!", author: "Marco Aieta", role: "Senior Vice President Carrollo Engineers" },
  { quote: "Thanks to the GMA Team.  Our completion of the submission package was only possible due to your support.  We appreciate all of your help and encouragement.  We will look forward to working together again in the future.", author: "Steve Barnes", role: "CFO Golden Empire Transit District - (GET) aka - GetBus" },
  { quote: "I wanted to take a moment to outline just how impactful Grant Management Associates — and specifically Kristin Cooper — have been for us. Her precision, speed, and ability to translate complex funding pathways into actionable strategy have already created real momentum. She’s not just a grant writer; she’s a force multiplier. Every interaction with her reinforces how critical it is to have the right people in the right seats when navigating a competitive funding environment.", author: "Darryl K. Seabolt", role: "CEO SeaVest Companies, Inc" },
];



export const team = [
  {
    name: "Kristin Cooper",
    role: "Founder and CEO",
    bio: `<p>Kristin Cooper is a funding strategist and government affairs expert with over 30 years of experience helping organizations compete for and win federal, state, and foundation funding. She founded Grant Management Associates in 2009 with a clear mission: bring strategic intelligence to the grant funding process — not just good writing, but the analytical rigor to know which opportunities are worth pursuing and the methodology to win them.</p><p>Under Kristin's leadership, GMA has secured over $2.5 billion in funding for clients. She developed GMA's proprietary Key Considerations Analysis (KCA) methodology, which evaluates competitive positioning, organizational fit, and scoring criteria before a single word of a proposal is written. This "Go/No-Go" approach is why GMA's clients don't waste resources on lost causes — and why they win at an extraordinary rate when they do pursue.</p><p>Before founding GMA, Kristin served as a Full Professor at California State University, Chico's College of Engineering, where she directed grant-funded programs across five colleges. She was the founding director of CSU Chico's Environmental Resource Program and the Concrete Management Program. Kristin also served as a registered federal lobbyist, where she was instrumental in securing a $100 million line item in the Department of Energy budget.</p><p>Today, Kristin leads GMA's evolution into a funding intelligence platform — integrating AI-powered grant matching with decades of human strategic judgment. She oversees a team that spans defence, energy, infrastructure, agriculture, and workforce development — the sectors where federal dollars are flowing and where GMA's clients are winning.</p><h3>By the Numbers</h3><ul><li>$2.5 Billion in funding secured for clients</li><li>500+ client organizations served</li><li>30+ years of funding strategy experience</li><li>Pioneered the AI Grant Matching Engine for systematic opportunity identification</li></ul><h3>Kristin's Certifications & Professional Credentials</h3><ul><li>Certified Sustainable Development Practitioner | Association of Energy Engineers</li><li>Certified Professional Contracts Manager (CPCM)</li><li>Master Certificate in Concrete Fundamentals | Hanley Wood, World of Concrete</li><li>Green Building and Sustainable Design Certificate Program | UC Davis; Land Use and Natural Resources, and Business and Technology coordinated with Leadership in Energy and Environmental Design (LEED)</li><li>Sustainability Performance Metrics | Natural Logic, Short Course Certification on the selection and use sustainability performance metrics and incentives.</li><li>Special Certification in Environmental Justice | (Train the Trainer), United States Environmental Protection Agency</li></ul>`,
    image: "/team/1.jpeg"
  },
  {
    name: "Mark Sue, MBA",
    role: "Chief Finance Officer, CFO",
    bio: `<p>Mark Sue is an experienced finance and strategic operations professional with over 20 years of experience supporting startups and growth-stage companies through financial planning, capital strategy, operational planning, and sustainable growth. With a background spanning engineering, finance, and investment banking, Mark brings a strong combination of analytical expertise, financial acumen, and strategic business insight to his work.</p><p>At Grant Management Associates, Mark supports financial and operational strategy, helping translate organizational goals into actionable plans while strengthening decision-making, performance management, and long-term growth. Throughout his career, he has worked closely with founders, executive teams, and institutional investors, supporting companies across multiple stages of growth, including Series A, B, and C ventures. His experience includes capital raising, investor positioning, financial systems, budgeting, performance metrics, and equity and debt financing.</p><p>Mark’s approach combines CFO-level financial expertise with a practical focus on scalable systems, data-driven decision-making, and effective capital allocation. He helps organizations build the financial and operational foundations needed to navigate growth, fundraising, and long-term strategic objectives.</p>`,
    image: "/team/2.png"
  },
  {
    name: "Ed Ober",
    role: "Chief Operating Officer, COO",
    bio: `<p>Ed Ober is the Chief Operating Officer of GMA where he brings over 20 years of experience in leadership, grant writing, strategic operations, systems development, project / program management, as well as team and organizational leadership. A seasoned professional in the funding landscape, Ed oversees the operational execution GMA client engagement, ensuring that proposals are developed with precision, competitiveness, and mission alignment. Ed leads grant teams for GMA and has overseen the process resulting in more than $500M in grant awards for GMA clients in the last 12 years. Ed’s experience in funding spans diverse sectors including energy, transportation, housing, infrastructure, agriculture, water, healthcare, HVAC, disaster mitigation and recovery and more. This experience encompasses grants, loans, tax credits, incentives, bonds, philanthropy and other funding mechanisms.</p><p>In addition to his work with GMA, Ed is also on the Board of Directors of the Active Inference Institute, where he is leading the development of the institute’s 10-year strategic plan and the development and build-out of entire new services. The Active Inference Institute is a nonprofit advancing the science of how biological and artificial systems learn and make decisions through a framework called active inference, drawn from theoretical neuroscience.</p><p>In addition, Ed is a forward-thinking entrepreneur developing a transformative framework for participatory governance – a multifaceted initiative that includes a book, podcast, and direct democracy platform designed to redefine civic engagement for the digital age. Ed holds a degree in Political Science from California State University, Long Beach. His blend of analytical rigor and visionary thinking makes him a driving force behind GMA’s continued success in securing critical funding for clients nationwide.</p>`,
    image: "/team/3.jpeg"
  },
  {
    name: "Brad Zerbe",
    role: "Director of Business Development",
    bio: `<p>Brad Zerbe has over thirty years of experience in grant writing, fundraising, lending, and business consulting. He is the former political director for the nation’s largest PAC, and finance director for the chairman of the U.S. Senate Finance Committee. He is a former registered federal, state, and state procurement lobbyist. He has worked for three of the nation’s five largest financial institutions in securities and banking compliance.</p><p>Brad has graded grants in national competitions and served as Chairman and CEO of nonprofit organizations and won over $400 million in grants. In college, he competed in debate, finishing second in the nation, and won his school’s highest scholarship for leadership.</p>`,
    image: "/team/4.jpeg"
  },
  {
    name: "Arthine Cossey Van Duyne, MBA",
    role: "Water Grant and Debt Financing Lead",
    bio: `<p>Arthine, the Principal Consultant at WaterFunder, LLC, is a dedicated finance and strategic partnerships consultant specializing in project funding and financing solutions for water infrastructure and nature-based solutions. Her global management experience spans the public, private, government, academic, startup, and nonprofit sectors. She has crafted and implemented growth and expansion strategies for development banks, foreign direct investment agencies, water utilities, capital markets, and Silicon Valley tech giants. Arthine is an Environmental Justice advisor for the San Francisco Public Utilities Commission’s Community Advisory Committee. Arthine is an Army veteran, a Board Advisor for the Freshwater Trust, and a Board Member of the Pacific Institute. She was a Fuse Executive Fellow and an Aspen Climate Policy Fellow, and holds a BA in Economics from UC Davis and an MBA from IMD in Switzerland.</p>`,
    image: "/team/6.png"
  },
  {
    name: "Sarthak Tandon",
    role: "Chief of Staff and EA to CEO",
    bio: `<p>Sarthak Tandon is an experienced operations and executive support professional serving as Chief of Staff and Executive Assistant to the CEO. He partners closely with the CEO on strategic priorities, executive coordination, operational planning, and cross-functional initiatives, helping translate organizational goals into structured and actionable execution.</p><p>At Grant Management Associates, Sarthak supports client-facing processes, internal workflows, team collaboration, and executive-level priorities, ensuring effective communication and alignment across stakeholders. His experience in process-driven environments, combined with a strong focus on organization, proactive problem-solving, and detail-oriented execution, enables him to serve as a trusted partner to leadership and contribute to the efficient and strategic functioning of the organization.</p>`,
    image: "/team/7.png"
  }
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


export const caseStudies: CaseStudy[] = [
  {
    slug: "calstart",
    client: "CALSTART",
    agency: "Various",
    amount: "$50,000,000+",
    amountNumber: 50000000,
    industry: "transportation",
    type: "Federal",
    challenge: "Supporting CALSTART and its transportation industry partners with grant application research and development for almost a decade.",
    solution: "Provided overall management of the grant development process, leading teams of writers from partner organizations to hit all key solicitation requirements and desired outcomes.",
    outcome: "Raised over $50M for various clean transportation projects.",
    contentHtml: `<p><img src="/case-studies/1.png" alt="CALSTART banner" className="rounded-xl mb-6 shadow-sm w-full object-cover" /></p>
<p>Grant Management Associates (GMA) has been supporting CALSTART and its transportation industry partners with grant application research and development for almost a decade. CALSTART is a nonprofit organization working nationally and internationally with businesses and governments to develop clean, efficient transportation solutions.</p>
<p>In working with CALSTART, GMA typically provides overall management of the grant development process and leads the team of writers and contributors from the various partner organizations. GMA provides guidance on structuring projects to hit all key solicitation requirements and desired outcomes. GMA provides recommendations on tasks, partnering and budget allocations and elicits client input with which to craft a compelling narrative that hits as many of the criteria points as possible.</p>
<p><img alt="Projects" src="/case-studies/2.png" className="rounded-xl my-6 shadow-sm w-full" /></p>
<p>Over our long relationship with CALSTART we have helped them to raise over $100M for various projects. The table below provides a sample of some recent CALSTART projects for which GMA has developed successful grant applications:</p>
<div className="flex flex-col md:flex-row gap-4 my-6">
  <img src="/case-studies/3.jpeg" className="rounded-xl shadow-sm w-full md:w-1/2 object-cover" alt="CALSTART Table Part 1" />
  <img src="/case-studies/4.jpeg" className="rounded-xl shadow-sm w-full md:w-1/2 object-cover" alt="CALSTART Table Part 2" />
</div>`
  },
  {
    slug: "redding-k2",
    client: "City of Redding & K2 Development",
    agency: "California Strategic Growth Council",
    amount: "$39,959,536",
    amountNumber: 39959536,
    industry: "transportation",
    type: "State",
    challenge: "Seeking funding for a mixed-use downtown development, offering affordable housing and transportation amenities such as a river trail connection.",
    solution: "Prepared two large winning grant proposals for the highly competitive Affordable Housing and Sustainable Communities (AHSC) program.",
    outcome: "Awarded two grants totaling nearly $40M for the same region—an unheard-of achievement through the notoriously difficult SGC process.",
    contentHtml: `<p>GMA served as grant consultant and prepared two large winning grant proposals for the City of Redding and its partners.</p>
<p>In June of 2018, the Affordable Housing and Sustainable Communities (AHSC) competitive grant program through the state of California’s Strategic Growth Council (SGC) cited three types of projects that were recommended for funding. This Redding Block 7 Net Zero Housing &amp; Downtown Activation Project was the highest point-scoring project of its type in the state. This Integrated Connectivity Project (ICP) type had the highest number of competitive proposals (28) and Redding scored 88 out of 100 total points. In addition, Redding’s project proposal was recommended for the third largest dollar amount in the state, $19,959,536.</p>
<p>This winning proposal is for a mixed used development in downtown, offering housing and transportation amenities, such as completing the river trail connection from Turtle Bay Exploration Park to downtown, was a joint submission by K2 Land and Investment, LLC (K2), The McConnell Foundation (McConnell), the City of Redding, Shasta Regional Transportation Agency and Community Development and Revitalization Corporation (CDRC).</p>
<p>This 2018 grant award builds on the momentum for the revitalization of Redding already underway with the joint effort between K2 Land and Investment and the City of Redding. With grant writing support from GMA, these two entities were successfully awarded $20,000,000 also from the Affordable Housing and Sustainable Communities Program from the Strategic Growth Council in 2017. This AHSC grant is for the Redding Downtown Loop and Affordable Housing Project. GMA prepared both grant applications as the grant consultant to the project.</p>
<p>To be awarded two grants of close to $40M for the same region, one after the other, is unheard of. GMA is proud of their leadership in shepherding this through the notoriously difficult Strategic Growth Council process.</p>`
  },
  {
    slug: "aha-macav",
    client: "Ft. Mojave Indian Tribe (FMIT)",
    agency: "Department of Energy (DOE)",
    amount: "$2,000,000",
    amountNumber: 2000000,
    industry: "tribal",
    type: "Federal",
    challenge: "Applying for a highly competitive, technical annual DOE tribal infrastructure grant for a utility-scale solar project.",
    solution: "Formed a team of experts, conducted a complete review of the utility's rate structure, and utilized detailed project management to track 22 separate technical forms.",
    outcome: "Awarded $2 million (doubled from typical awards). Assisted with post-award accounting and reporting, completing the project in 2020.",
    contentHtml: `<p>GMA was contracted to write and submit a utility scale solar grant on behalf of a tribally owned utility in 2019. This annual DOE tribal infrastructure grant is considered one of the more difficult federal grants to win, is highly competitive, and includes 22 separate forms, some of them highly technical.</p>
<p>GMA formed a team of three grant writers under the guidance of Kristin Cooper Carter and was led by Deborah Dowd, one of GMA’s most experienced technical grant writers, with a detailed project management software implementation by GMA’s Ed Ober to track and meet all the requirements and allow all project stakeholders to view the progress of the grant application.</p>
<p>The GMA grant team worked closely with solar electric experts and engineers on the project, as well as the tribe’s utility board of directors, plus testified before the full Tribal Council and worked closely with the utility’s senior staff.</p>
<p>GMA undertook a complete review and detailed analysis of the utility’s rate structure and rate contracts which were essential to winning the grant. In this particular annual grant cycle, the amount of the awards were doubled to $2 million making this grant more competitive. The tribal utility was awarded $2 million. GMA assisted the utility staff in the grant award contracting process, and in the required progress reports and post-award accounting implementation. This solar project was completed in 2020.</p>`
  },
  {
    slug: "thermalito",
    client: "Thermalito Water and Sewer District",
    agency: "State Water Resource Control Board",
    amount: "$2,700,000",
    amountNumber: 2700000,
    industry: "clean-energy",
    type: "State",
    challenge: "Needed to fix and replace the aging sewer line in a disadvantaged community.",
    solution: "Prepared a State Revolving Loan Fund Program application consisting of complex financial, legal, environmental, and technical materials.",
    outcome: "Secured a $2.7M loan, which included 20% principal forgiveness ($540,000) due to deployed green attributes.",
    contentHtml: `<p>The Thermalito Water and Sewer District (TWSD) provides domestic water and sanitary sewer services to the Thermalito area of Oroville. The purpose of the East Trunk line project was to fix and replace the aging sewer line in a disadvantaged community. A successful State Water Resource Control Board – State Revolving Loan Fund Program application funded a $2,700,000 loan to the district, which was prepared by GMA, and consisted of Financials, Legal, Environmental and Technical materials. GMA worked with local engineers to pull the information together. Because the project deployed “green” attributes it allowed the district to qualify for 20% principal forgiveness on the loan - $540,000.</p>`
  },
  {
    slug: "riverside-county",
    client: "Riverside County EDA",
    agency: "Various",
    amount: "$3,400,000",
    amountNumber: 3400000,
    industry: "transportation",
    type: "State",
    challenge: "Deploying 24 publicly accessible EVSE charging units throughout the County in key corridors.",
    solution: "Coordinated the diverse needs of thirteen key partners, several subcontractors, and various local agencies to build a cohesive multi-jurisdictional program.",
    outcome: "Secured $3.4M to support chargers, giving disadvantaged and hard-to-access areas the opportunity to participate in electrification.",
    contentHtml: `<p>Grant Management Associates was involved with the County of Riverside’s Economic Development Corporation’s multi-jurisdictional electric vehicle infrastructure deployment program. This application sought to deploy 24 publicly accessible EVSE Charging units throughout the County in key corridors in support of public charging. The proposal successfully brought in $3.4 M in support of these chargers allowing disadvantaged areas of the county and hard to access reaches an opportunity to participate in the electrification of the vehicle infrastructure. This program coordinated the diverse needs of thirteen key partners, several subcontractors and various local agencies.</p>`
  },
  {
    slug: "altair-fuel",
    client: "AltAir Fuel",
    agency: "California Energy Commission (CEC)",
    amount: "$5,000,000",
    amountNumber: 5000000,
    industry: "clean-energy",
    type: "State",
    challenge: "Converting a closed petroleum refinery into a renewable biofuel refinery producing renewable diesel and jet fuel.",
    solution: "Managed a team of experienced grant writers to assemble the application narrative, a complex budget, GHG calculations, and CEQA compliance.",
    outcome: "Successfully awarded $5M from the CEC to help capitalize the second stage of the conversion process.",
    contentHtml: `<p><strong>Grant Writing Services.</strong> After locating and analyzing the funding opportunity for AltAir with a recommendation to pursue, GMA was then retained by AltAir in January of 2014 to prepare a grant application to the California Energy Commission (CEC). The purpose of the grant is to help pay for the costs associated with converting a closed petroleum refinery into a renewable biofuel refinery that produces renewable diesel and renewable jet fuel as well as usable byproducts. The refinery can utilize multiple feedstock types, making it extremely flexible. AltAir sought $5M from the CEC to help with the second stage of the conversion process after the first stage was capitalized privately and was already underway.</p>
<p>GMA assigned a team of 3 experienced grant writers who have previous experience preparing applications for the CEC. Supervisor (Kristin Cooper) provided oversight of the application development process and all resultant documents, including quality control and editing. Team Lead (Ed Ober) provided day-to-day management of the application process, provided much of the writing and organization of the application narrative, development of a complex budget and oversaw the work of the 2nd Chair. 2nd Chair (Emily Symmes) provided support on various sections of the application and was responsible for development of many of the attachments including the greenhouse gas calculations and CEQA compliance. Team Lead managed the assembly of all completed sections into the final document and assembled all attachments and exhibits. Supervisor reviewed and edited the final documents. The Team Lead managed the submission printing, binding and delivery.</p>
<p>There were no significant delays in the project and the application was submitted by the deadline of March 25, 2014. The application was successful and received a notice of award in the amount of $5,000,000 from the CEC in July 2014. The Team Lead participated in the process of adjusting the budget per the CEC’s request. AltAir also elected to utilize GMA to manage this grant award contract.</p>`
  },
  {
    slug: "chargepoint",
    client: "ChargePoint",
    agency: "California Energy Commission (CEC)",
    amount: "$2,100,000",
    amountNumber: 2100000,
    industry: "transportation",
    type: "State",
    challenge: "Deploying Electric Vehicle Supply Equipment (EVSE) across the state, requiring massive coordination and justification for site locations.",
    solution: "Researched and coordinated 89 site locations, establishing CEQA compliance and detailing traffic patterns, EV penetration, and demand data.",
    outcome: "Received three awards totaling $2.1M, allowing them to install 114 EVSE charging stations across 89 locations.",
    contentHtml: `<p>ChargePoint is the largest network of Electric Vehicle Supply Equipment (EVSE) in the country with a mission of serving the US and international regions with EV charging capacity. GMA was retained by ChargePoint in October of 2009 to coordinate and apply for a grant with the California Energy Commission for the deployment of Electric Vehicle Supply Equipment (EVSE) for charging electric vehicles (EVs).</p>
<p>The project required the research, cultivation and coordination of 89 site locations and completing and meeting CEQA requirements for each installation location. The project required a match contribution and a detailed budget as well as a thorough narrative and justification for the site locations chosen. This justification required elements of research on the proposed site locations, traffic patterns, penetration of EVs in the area, existing EVSE locations and other demand and use-related data.</p>
<p>The grant application was successful and ChargePoint received three awards for a total of $2.1M, which allowed them to install 114 EVSE charging stations at 89 locations.</p>`
  },
  {
    slug: "el-dorado",
    client: "El Dorado County",
    agency: "Multiple Agencies",
    amount: "$800,000+",
    amountNumber: 800000,
    industry: "healthcare",
    type: "State",
    challenge: "Helping county agencies and local nonprofits bring new funding streams into the area for disaster mitigation, recidivism reduction, and dental health.",
    solution: "Provided capacity building, grant research, and interactive 'Shovel Ready Workshops' to prepare local agencies for competitive grants.",
    outcome: "Secured over $800,000 in new funding in the first six months, including a $600k HRSA Dental Health Grant and multiple wildfire reduction grants.",
    contentHtml: `<p>El Dorado County contracted with GMA to help county agencies and local nonprofits bring new funding streams into the area. By providing capacity building, grant research, and grant writing, <strong><em>GMA was able to secure over $800,000 in new funding in the first six months of the program</em></strong>. Projects ranged from disaster mitigation to recidivism reduction to dental health and more.</p>
<p>The step-by-step process that GMA put forth for El Dorado County:</p>
<p><strong>Shovel Ready Workshop and Training:</strong> GMA presented an interactive seminar on how to design shovel ready projects, identify available funding, and build strong relationships with key funding agencies.</p>
<p><strong>Open Application Period to Join the Grant Development Program:</strong> GMA invited the workshop attendees to submit a “Shovel Ready Survey” for projects that are ready to receive grant funding. GMA worked within the program budget to provide capacity building, advice, and networking opportunities to all applicants and will help shovel ready projects pursue available funding.</p>
<p><strong>Determine Funding Needs</strong></p>
<ul className="list-disc pl-5 my-4 space-y-2">
  <li>GMA helped identify funding needs and research appropriate funding opportunities</li>
  <li>GMA prepared accurate, compelling and timely grant proposals</li>
  <li>GMA conducted strategic business planning and establish the foundation for program development</li>
  <li>GMA followed up on and managed all aspects of grant administration and program management</li>
</ul>
<p><strong>Funding Identification</strong></p>
<ul className="list-disc pl-5 my-4 space-y-2">
  <li>GMA worked with staff and community leaders to understand and fully grasp pragmatic needs</li>
  <li>GMA aligned program needs with actionable funding opportunities</li>
  <li>GMA analyzed previously funded applications for important trends and determine the level of competition</li>
  <li>GMA favorably positioned agencies at the forefront of funder’s attention</li>
  <li>GMA provided agency with a funding matrix aligning possible funds specifically linked to agency pragmatic needs</li>
  <li>GMA made strategic recommendations to agency on the most lucrative funding opportunities</li>
</ul>
<p><strong>Grant Proposal Preparation</strong></p>
<ul className="list-disc pl-5 my-4 space-y-2">
  <li>GMA reviewed the needs of each proposal to determine the number of hours required to complete each component and provide this to program directors</li>
  <li>GMA prepared a cost estimate specific to each proposal with a predetermined budget.</li>
  <li>GMA only charges program for actual time spent and will work diligently with the program team to repurpose material previously used to apply for and/or secure funding to save time and resources</li>
</ul>
<p>This resulted in the following successful applications over a six month period:</p>
<ul className="list-disc pl-5 my-4 space-y-2">
  <li>HRSA Mobile Dental Health Grant: $600,000</li>
  <li>El Dorado Integrated County Wildfire Protection Plan: $73,250</li>
  <li>El Dorado County Firewise Education Plan: $50,000</li>
  <li>Logtown LT-10 Fuel Reduction: $219,557</li>
  <li>GF-13 GFFSC Fuel Reduction Project: $135,100</li>
  <li>Lakehills 1 Fuel Reduction and Hazard Removal LH-1: $196,500</li>
  <li>Weber Creek Fuel Reduction Project PP-1: $191,000</li>
  <li>Caswell Road Fuels Reduction and Community Protection: $53,200</li>
</ul>`
  },
  {
    slug: "electric-utility-consultant",
    client: "Electric Utility Consultant",
    agency: "Electric Utility Consultants, Inc. (EUCI)",
    amount: "Undisclosed",
    amountNumber: 0,
    industry: "technology",
    type: "Private",
    challenge: "Provide high quality training services to attendants of the workshop regarding energy-related grant funding.",
    solution: "Kristin Cooper managed client interactions and delivered the training program with highly interactive materials.",
    outcome: "Positive feedback from attendees, with students excelling in writing proposals after section reviews.",
    contentHtml: `<p>TCL’s partner, GMA, was retained by Electric Utility Consultants, Inc. (EUCI) in August of 2012 to provide training services to attendants of the workshop.</p>
<p>The training was held in San Francisco at the Hyatt. It was a three day training on the subject of Energy–related Grant Funding and Grant Writing. The program complied with the ANSI/IACET Standards and EUCI was authorized to offer IACET 1.0 CEUs for accreditation units. The attendees were from all sectors; start ups and large corporations.</p>
<p>Kristin Cooper managed the client interactions and delivered the training program. The content for the training program was provided by GMA with Client approval.</p>
<p>GMA generated all of the workshop content and materials. The content came from professional experience and case studies. The material was highly interactive. There was ample time for the participants to share information, obtain feedback and refine their work. GMA uses a lot of examples and gives students’ assignments to work on both separately and together. GMA also prepared handouts for the program to be reviewed concurrent to the session. The course was appropriate for beginners to intermediate writers.</p>
<p>After each section we would spend time actively writing components. Once completed we would review these materials as a group. All of the group members become “reviewers” of each other’s materials. From the session evaluations, this was the most important aspect of the training. After a few section reviews all of the students started to excel with their writing, both in content and transitions.</p>
<p>This training can be easily modified to meet multiple time frames. The feedback on the training was positive with negative scores for the temperate of the room. Many of the students followed up with questions directly with GMA after the workshop ended.</p>`
  },
  {
    slug: "schneider-electric",
    client: "Schneider Electric",
    agency: "State Agencies",
    amount: "$185,500",
    amountNumber: 185500,
    industry: "technology",
    type: "State",
    challenge: "Required extensive research on EV industry trends and proactive identification of actionable funding and procurement opportunities.",
    solution: "Established targeted research alerts, evaluated incoming notifications, and dug deep for eligibility requirements and critical application details.",
    outcome: "Successfully secured two awards totaling $185,500, leading the client to expand GMA's research scope nationally.",
    contentHtml: `<p>GMA was retained by Schneider Electric in October of 2011 to perform research services pertaining to electric vehicles. The client’s request included both current news and information about industry trends as well as funding opportunities (both grant and procurement).</p>
<p>Client expanded its scope of services with GMA from primarily the West Coast to all of the U.S. and added to research services liaison with State Agencies and Grant Development and Procurement Services.</p>
<p>The Research Associate signed up to multiple news sources and created multiple alerts for relevant news topics in the industry and business news which provided a regular stream of information in for evaluation. The Research Associate signed up for notifications from multiple relevant funding agencies. The Research Associate reviewed all incoming notifications for relevance and also actively reviews relevant agency websites for opportunities not notified via email. Where relevant information was discovered, the Associate dug deeper for additional relevant details such as companies, names, funding amounts, eligibility requirements, due dates for applications and other important details. The Research Associate forwarded all relevant notification, opportunities and details obtained to the Client’s distribution list.</p>
<p>The Client opted to pursue a grant opportunity that arose from this research and utilized GMA to prepare the application, which was successful and received two awards for $140,000 and $45,500 in March of 2013. GMA then assisted Schneider in the fiscal management of these contracts.</p>
<p>These are ongoing assignments with this Client. Because the Client has been pleased with the services provided thus far, the scope of the research for this Client has recently been expanded from primarily the West Coast to all of the United States and also expanded from strictly research services to also Liaison with State Agencies, Grant Development and Procurement Services. A Senior Associate consultant has been added to the team to provide these additional services.</p>`
  }
];