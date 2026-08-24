const fs = require('fs');
const contentPath = 'src/lib/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');

const newCases = `export const caseStudies: CaseStudy[] = [
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
  },
  {
    slug: "aha-macav",
    client: "Aha Macav Power Service",
    agency: "Department of Energy (DOE)",
    amount: "$2,000,000",
    amountNumber: 2000000,
    industry: "tribal",
    type: "Federal",
    challenge: "Applying for a highly competitive, technical annual DOE tribal infrastructure grant for a utility-scale solar project.",
    solution: "Formed a team of experts, conducted a complete review of the utility's rate structure, and utilized detailed project management to track 22 separate technical forms.",
    outcome: "Awarded $2 million (doubled from typical awards). Assisted with post-award accounting and reporting, completing the project in 2020.",
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
  },
  {
    slug: "el-dorado",
    client: "El Dorado County",
    agency: "Multiple Agencies",
    amount: "$800,000+",
    amountNumber: 800000,
    industry: "nonprofits",
    type: "State",
    challenge: "Helping county agencies and local nonprofits bring new funding streams into the area for disaster mitigation, recidivism reduction, and dental health.",
    solution: "Provided capacity building, grant research, and interactive 'Shovel Ready Workshops' to prepare local agencies for competitive grants.",
    outcome: "Secured over $800,000 in new funding in the first six months, including a $600k HRSA Dental Health Grant and multiple wildfire reduction grants.",
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
  },
];`;

const startIdx = content.indexOf('export const caseStudies');
if (startIdx !== -1) {
    const nextArrEnd = content.indexOf('];', startIdx);
    if (nextArrEnd !== -1) {
        content = content.substring(0, startIdx) + newCases + content.substring(nextArrEnd + 2);
        fs.writeFileSync(contentPath, content, 'utf8');
        console.log("Successfully replaced case studies.");
    }
} else {
    console.log("Could not find bounds");
}
