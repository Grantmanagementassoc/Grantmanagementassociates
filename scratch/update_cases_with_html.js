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
    contentHtml: \`<p><img src="/case-studies/1.png" alt="CALSTART banner" className="rounded-xl mb-6 shadow-sm w-full object-cover" /></p>
<p>Grant Management Associates (GMA) has been supporting CALSTART and its transportation industry partners with grant application research and development for almost a decade. CALSTART is a nonprofit organization working nationally and internationally with businesses and governments to develop clean, efficient transportation solutions.</p>
<p>In working with CALSTART, GMA typically provides overall management of the grant development process and leads the team of writers and contributors from the various partner organizations. GMA provides guidance on structuring projects to hit all key solicitation requirements and desired outcomes. GMA provides recommendations on tasks, partnering and budget allocations and elicits client input with which to craft a compelling narrative that hits as many of the criteria points as possible.</p>
<p><img alt="Projects" src="/case-studies/2.png" className="rounded-xl my-6 shadow-sm w-full" /></p>
<p>Over our long relationship with CALSTART we have helped them to raise over $50M for various projects. The table below provides a sample of some recent CALSTART projects for which GMA has developed successful grant applications:</p>
<div className="flex flex-col md:flex-row gap-4 my-6">
  <img src="/case-studies/3.jpeg" className="rounded-xl shadow-sm w-full md:w-1/2 object-cover" alt="CALSTART Table Part 1" />
  <img src="/case-studies/4.jpeg" className="rounded-xl shadow-sm w-full md:w-1/2 object-cover" alt="CALSTART Table Part 2" />
</div>\`
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
    contentHtml: \`<p>GMA served as grant consultant and prepared two large winning grant proposals for the City of Redding and its partners.</p>
<p>In June of 2018, the Affordable Housing and Sustainable Communities (AHSC) competitive grant program through the state of California’s Strategic Growth Council (SGC) cited three types of projects that were recommended for funding. This Redding Block 7 Net Zero Housing &amp; Downtown Activation Project was the highest point-scoring project of its type in the state. This Integrated Connectivity Project (ICP) type had the highest number of competitive proposals (28) and Redding scored 88 out of 100 total points. In addition, Redding’s project proposal was recommended for the third largest dollar amount in the state, $19,959,536.</p>
<p>This winning proposal is for a mixed used development in downtown, offering housing and transportation amenities, such as completing the river trail connection from Turtle Bay Exploration Park to downtown, was a joint submission by K2 Land and Investment, LLC (K2), The McConnell Foundation (McConnell), the City of Redding, Shasta Regional Transportation Agency and Community Development and Revitalization Corporation (CDRC).</p>
<p>This 2018 grant award builds on the momentum for the revitalization of Redding already underway with the joint effort between K2 Land and Investment and the City of Redding. With grant writing support from GMA, these two entities were successfully awarded $20,000,000 also from the Affordable Housing and Sustainable Communities Program from the Strategic Growth Council in 2017. This AHSC grant is for the Redding Downtown Loop and Affordable Housing Project. GMA prepared both grant applications as the grant consultant to the project.</p>
<p>To be awarded two grants of close to $40M for the same region, one after the other, is unheard of. GMA is proud of their leadership in shepherding this through the notoriously difficult Strategic Growth Council process.</p>\`
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
    contentHtml: \`<p>GMA was contracted to write and submit a utility scale solar grant on behalf of a tribally owned utility in 2019. This annual DOE tribal infrastructure grant is considered one of the more difficult federal grants to win, is highly competitive, and includes 22 separate forms, some of them highly technical.</p>
<p>GMA formed a team of three grant writers under the guidance of Kristin Cooper Carter and was led by Deborah Dowd, one of GMA’s most experienced technical grant writers, with a detailed project management software implementation by GMA’s Ed Ober to track and meet all the requirements and allow all project stakeholders to view the progress of the grant application.</p>
<p>The GMA grant team worked closely with solar electric experts and engineers on the project, as well as the tribe’s utility board of directors, plus testified before the full Tribal Council and worked closely with the utility’s senior staff.</p>
<p>GMA undertook a complete review and detailed analysis of the utility’s rate structure and rate contracts which were essential to winning the grant. In this particular annual grant cycle, the amount of the awards were doubled to $2 million making this grant more competitive. The tribal utility was awarded $2 million. GMA assisted the utility staff in the grant award contracting process, and in the required progress reports and post-award accounting implementation. This solar project was completed in 2020.</p>\`
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
    contentHtml: \`<p>The Thermalito Water and Sewer District (TWSD) provides domestic water and sanitary sewer services to the Thermalito area of Oroville. The purpose of the East Trunk line project was to fix and replace the aging sewer line in a disadvantaged community. A successful State Water Resource Control Board – State Revolving Loan Fund Program application funded a $2,700,000 loan to the district, which was prepared by GMA, and consisted of Financials, Legal, Environmental and Technical materials. GMA worked with local engineers to pull the information together. Because the project deployed “green” attributes it allowed the district to qualify for 20% principal forgiveness on the loan - $540,000.</p>\`
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
    contentHtml: \`<p>Grant Management Associates was involved with the County of Riverside’s Economic Development Corporation’s multi-jurisdictional electric vehicle infrastructure deployment program. This application sought to deploy 24 publicly accessible EVSE Charging units throughout the County in key corridors in support of public charging. The proposal successfully brought in $3.4 M in support of these chargers allowing disadvantaged areas of the county and hard to access reaches an opportunity to participate in the electrification of the vehicle infrastructure. This program coordinated the diverse needs of thirteen key partners, several subcontractors and various local agencies.</p>\`
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
    contentHtml: \`<p><strong>Grant Writing Services.</strong> After locating and analyzing the funding opportunity for AltAir with a recommendation to pursue, GMA was then retained by AltAir in January of 2014 to prepare a grant application to the California Energy Commission (CEC). The purpose of the grant is to help pay for the costs associated with converting a closed petroleum refinery into a renewable biofuel refinery that produces renewable diesel and renewable jet fuel as well as usable byproducts. The refinery can utilize multiple feedstock types, making it extremely flexible. AltAir sought $5M from the CEC to help with the second stage of the conversion process after the first stage was capitalized privately and was already underway.</p>
<p>GMA assigned a team of 3 experienced grant writers who have previous experience preparing applications for the CEC. Supervisor (Kristin Cooper) provided oversight of the application development process and all resultant documents, including quality control and editing. Team Lead (Ed Ober) provided day-to-day management of the application process, provided much of the writing and organization of the application narrative, development of a complex budget and oversaw the work of the 2nd Chair. 2nd Chair (Emily Symmes) provided support on various sections of the application and was responsible for development of many of the attachments including the greenhouse gas calculations and CEQA compliance. Team Lead managed the assembly of all completed sections into the final document and assembled all attachments and exhibits. Supervisor reviewed and edited the final documents. The Team Lead managed the submission printing, binding and delivery.</p>
<p>There were no significant delays in the project and the application was submitted by the deadline of March 25, 2014. The application was successful and received a notice of award in the amount of $5,000,000 from the CEC in July 2014. The Team Lead participated in the process of adjusting the budget per the CEC’s request. AltAir also elected to utilize GMA to manage this grant award contract.</p>\`
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
    contentHtml: \`<p>ChargePoint is the largest network of Electric Vehicle Supply Equipment (EVSE) in the country with a mission of serving the US and international regions with EV charging capacity. GMA was retained by ChargePoint in October of 2009 to coordinate and apply for a grant with the California Energy Commission for the deployment of Electric Vehicle Supply Equipment (EVSE) for charging electric vehicles (EVs).</p>
<p>The project required the research, cultivation and coordination of 89 site locations and completing and meeting CEQA requirements for each installation location. The project required a match contribution and a detailed budget as well as a thorough narrative and justification for the site locations chosen. This justification required elements of research on the proposed site locations, traffic patterns, penetration of EVs in the area, existing EVSE locations and other demand and use-related data.</p>
<p>The grant application was successful and ChargePoint received three awards for a total of $2.1M, which allowed them to install 114 EVSE charging stations at 89 locations.</p>\`
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
    contentHtml: \`<p>El Dorado County contracted with GMA to help county agencies and local nonprofits bring new funding streams into the area. By providing capacity building, grant research, and grant writing, <strong><em>GMA was able to secure over $800,000 in new funding in the first six months of the program</em></strong>. Projects ranged from disaster mitigation to recidivism reduction to dental health and more.</p>
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
</ul>\`
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
    contentHtml: \`<p>TCL’s partner, GMA, was retained by Electric Utility Consultants, Inc. (EUCI) in August of 2012 to provide training services to attendants of the workshop.</p>
<p>The training was held in San Francisco at the Hyatt. It was a three day training on the subject of Energy–related Grant Funding and Grant Writing. The program complied with the ANSI/IACET Standards and EUCI was authorized to offer IACET 1.0 CEUs for accreditation units. The attendees were from all sectors; start ups and large corporations.</p>
<p>Kristin Cooper managed the client interactions and delivered the training program. The content for the training program was provided by GMA with Client approval.</p>
<p>GMA generated all of the workshop content and materials. The content came from professional experience and case studies. The material was highly interactive. There was ample time for the participants to share information, obtain feedback and refine their work. GMA uses a lot of examples and gives students’ assignments to work on both separately and together. GMA also prepared handouts for the program to be reviewed concurrent to the session. The course was appropriate for beginners to intermediate writers.</p>
<p>After each section we would spend time actively writing components. Once completed we would review these materials as a group. All of the group members become “reviewers” of each other’s materials. From the session evaluations, this was the most important aspect of the training. After a few section reviews all of the students started to excel with their writing, both in content and transitions.</p>
<p>This training can be easily modified to meet multiple time frames. The feedback on the training was positive with negative scores for the temperate of the room. Many of the students followed up with questions directly with GMA after the workshop ended.</p>\`
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
    contentHtml: \`<p>GMA was retained by Schneider Electric in October of 2011 to perform research services pertaining to electric vehicles. The client’s request included both current news and information about industry trends as well as funding opportunities (both grant and procurement).</p>
<p>Client expanded its scope of services with GMA from primarily the West Coast to all of the U.S. and added to research services liaison with State Agencies and Grant Development and Procurement Services.</p>
<p>The Research Associate signed up to multiple news sources and created multiple alerts for relevant news topics in the industry and business news which provided a regular stream of information in for evaluation. The Research Associate signed up for notifications from multiple relevant funding agencies. The Research Associate reviewed all incoming notifications for relevance and also actively reviews relevant agency websites for opportunities not notified via email. Where relevant information was discovered, the Associate dug deeper for additional relevant details such as companies, names, funding amounts, eligibility requirements, due dates for applications and other important details. The Research Associate forwarded all relevant notification, opportunities and details obtained to the Client’s distribution list.</p>
<p>The Client opted to pursue a grant opportunity that arose from this research and utilized GMA to prepare the application, which was successful and received two awards for $140,000 and $45,500 in March of 2013. GMA then assisted Schneider in the fiscal management of these contracts.</p>
<p>These are ongoing assignments with this Client. Because the Client has been pleased with the services provided thus far, the scope of the research for this Client has recently been expanded from primarily the West Coast to all of the United States and also expanded from strictly research services to also Liaison with State Agencies, Grant Development and Procurement Services. A Senior Associate consultant has been added to the team to provide these additional services.</p>\`
  }
];`;

const startIdx = content.indexOf('export const caseStudies: CaseStudy[] = [');
if (startIdx !== -1) {
    let brackets = 1;
    let i = startIdx + 'export const caseStudies: CaseStudy[] = ['.length;
    while (brackets > 0 && i < content.length) {
        if (content[i] === '[') brackets++;
        else if (content[i] === ']') brackets--;
        i++;
    }
    const endIdx = content.indexOf(';', i);
    if (endIdx !== -1) {
        content = content.substring(0, startIdx) + newCases + content.substring(endIdx + 1);
        fs.writeFileSync(contentPath, content, 'utf8');
        console.log("Successfully replaced case studies.");
    }
} else {
    console.log("Could not find bounds");
}
