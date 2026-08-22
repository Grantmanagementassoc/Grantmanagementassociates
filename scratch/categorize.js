const fs = require('fs');
const path = require('path');

const mappings = [
  { topic: "Defense & National Security", link: "https://www.linkedin.com/posts/kristinccarter_anduril-is-currently-valued-at-61-billion-ugcPost-7482448185240547328-Hwia/", title: "The $61B Lesson: Every Defense Tech Giant Started With a Government Grant" },
  { topic: "Defense & National Security", link: "https://www.linkedin.com/pulse/defense-funding-surge-2025-2026-kristin-cooper-vtsdc", title: "DEFENSE FUNDING SURGE 2025-2026" },
  { topic: "Defense & National Security", link: "https://www.linkedin.com/pulse/defense-today-kristin-cooper-06a7c", title: "Defense Today" },
  { topic: "Defense & National Security", link: "https://www.linkedin.com/pulse/dont-like-bob-did-look-free-money-from-air-force-kristin-cooper-zobfc", title: "Don't be like Bob. Bob Did Not Look at Free Money from the Air Force." },
  { topic: "Defense & National Security", link: "https://www.linkedin.com/pulse/us-army-futures-command-ai-integration-center-broad-agency-cooper-vca8c", title: "U.S. Army Futures Command AI Integration Center Broad Agency Announcement" },
  { topic: "Defense & National Security", link: "https://www.linkedin.com/pulse/age-autonomous-flight-kristin-cooper-kjwoc", title: "The Age of Autonomous Flight" },
  { topic: "Defense & National Security", link: "https://www.linkedin.com/pulse/defense-supply-chain-order-grant-applicants-cannot-ignore-cooper-adnff", title: "The Defense Supply-Chain Order Grant Applicants Cannot Ignore" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/agriculture-food-system-funding-kristin-cooper-carter", title: "Agriculture and Food System Funding" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/farm-security-national-new-era-us-agriculture-funding-kristin-cooper-a6j0c", title: "Farm Security is National Security" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/gma-helps-agricultural-producers-apply-disaster-kristin-cooper-carter", title: "GMA helps Agricultural Producers apply for Disaster Funding" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/gma-insight-usda-grant-rule-changes-senate-farm-bill-draft-cooper-lhrpc", title: "GMA Insight: USDA Grant Rule Changes" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/job-creation-rural-america-kristin-cooper-carter", title: "Job Creation in Rural America" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/new-funding-food-safety-outreach-program-fsop-kristin-cooper-carter", title: "NEW FUNDING - Food Safety Outreach Program" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/regional-centers-food-safety-training-kristin-cooper-carter", title: "Regional Centers for Food Safety Training" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/specialty-crop-block-grant-program-kristin-cooper-carter", title: "Specialty Crop Block Grant Program" },
  { topic: "Agriculture & Food", link: "https://www.linkedin.com/pulse/usda-under-trump-kristin-cooper-carter", title: "USDA Under Trump" },
  { topic: "Community & Municipal Infrastructure", link: "https://www.linkedin.com/pulse/funding-opportunities-community-infrastructure-kristin-cooper-cpzrc", title: "Funding Opportunities for Community Infrastructure" },
  { topic: "Community & Municipal Infrastructure", link: "https://www.linkedin.com/pulse/funding-us-cities-kristin-cooper-carter", title: "Funding for US Cities" },
  { topic: "Community & Municipal Infrastructure", link: "https://www.linkedin.com/pulse/solve-real-world-problems-enter-smart-cities-bases-challenge-cooper-5doxc", title: "Solve Real-World Problems" },
  { topic: "Community & Municipal Infrastructure", link: "https://www.linkedin.com/pulse/two-cities-choices-what-happens-when-you-take-money-kristin-cooper-j2yue", title: "Two Cities, Two Choices" },
  { topic: "Economic Development & Business Growth", link: "https://www.linkedin.com/pulse/unlocking-growth-everything-you-need-know-california-competes-cooper-xemgc", title: "Unlocking Growth: Everything You Need to Know About the California Competes Tax Credit" },
  { topic: "Emergency Management, Disaster Resilience & Wildfire", link: "https://www.linkedin.com/pulse/fema-disaster-recovery-reform-kristin-cooper-carter", title: "FEMA Disaster Recovery Reform" },
  { topic: "Emergency Management, Disaster Resilience & Wildfire", link: "https://www.linkedin.com/pulse/fire-funding-fix-wildfire-suppression-kristin-cooper-carter", title: "Fire Funding Fix - Wildfire Suppression" },
  { topic: "Emergency Management, Disaster Resilience & Wildfire", link: "https://www.linkedin.com/pulse/resilience-bond-what-can-do-your-community-kristin-cooper-carter", title: "Resilience Bond" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/beyond-disruption-how-chinas-new-mineral-export-controls-cooper-wbctc", title: "Beyond Disruption" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/californias-cerri-program-funding-grid-reliability-community-cooper-7id5c", title: "California's CERRI Program" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/critical-minerals-supply-chain-risks-longer-what-latest-cooper-y2khc", title: "Critical Minerals Supply Chain Risks" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/does-grid-deployment-office-new-leadership-brings-cooper-carter-oxg5c", title: "DOE's Grid Deployment Office" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/funding-pulse-what-weeks-energy-agenda-means-future-dec-cooper-j9cbc", title: "What This Week's Energy Agenda Means" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/fy2026-energy-water-appropriations-act-unpacked-kristin-cooper-xc0lc", title: "FY2026 Energy and Water Appropriations Act" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/metal-inside-every-semiconductor-you-own-and-we-running-cooper-ze0hc", title: "The Metal Inside Every Semiconductor You Own" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/navigating-new-feoc-rules-how-grant-management-helps-clean-cooper-ec2tc", title: "Navigating New FEOC Rules" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/positioning-californias-next-wave-building-funding-how-kristin-cooper-fcgyc", title: "Positioning for California's Next Wave of Building Decarbonization" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/seizing-techconnects-8b-critical-technology-challenge-kristin-cooper-egire", title: "Seizing TechConnect's $8B+ Critical Technology Challenge" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/summary-accf-report-implementing-president-trumps-cooper-carter-sy3yc", title: "Summary of ACCF Report" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/summary-mckinsey-report-powering-new-era-us-energy-cooper-carter-wwz6c", title: "Summary of the McKinsey Report" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/sunshot-program-community-impact-kristin-cooper-carter", title: "SunShot Program" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/unpack-republican-fy-2026-energy-water-draft-budget-leaner-cooper-7huwc", title: "UNPACK the Republican FY 2026 Energy & Water Draft Budget" },
  { topic: "Energy, Clean Technology & Critical Minerals", link: "https://www.linkedin.com/pulse/next-wave-transmission-funding-being-shaped-now-kristin-cooper-u3lzc", title: "The Next Wave of Transmission Funding Is Being Shaped Now" },
  { topic: "Environmental & Climate Finance", link: "https://www.linkedin.com/pulse/environmental-impact-bonds-kristin-cooper-carter", title: "Environmental Impact Bonds" },
  { topic: "Environmental & Climate Finance", link: "https://www.linkedin.com/pulse/public-comment-state-california-climate-plan-kristin-cooper-carter", title: "Public Comment on State of California Climate Plan" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/610-million-line-56-days-win-kristin-cooper-ceo-grant-kristin-cooper-q9dvc", title: "$610 Million on the Line" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/20141002235221-55517318-grant-writing-success", title: "Grant Writing Success" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/from-passthrough-power-player-how-states-can-win-next-kristin-cooper-wdqqc", title: "From Pass-Through to Power Player" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/funding-pulse-weekly-grant-policy-outlook-kristin-cooper-cgsjf", title: "Weekly Grant & Policy Outlook" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/funding-release-department-interior-kristin-cooper-djw2c", title: "Funding Release - Department of the Interior" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/gfo-25-802-qa-analysis-must-read-kristin-cooper-tw2rc", title: "GFO 25-802 Q&A Analysis" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/grant-writing-workshop-free-nevada-city-ca-kristin-cooper-carter", title: "Grant Writing Workshop" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/holiday-grant-writing-kristin-cooper-carter", title: "Holiday Grant Writing" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/rfp-out-your-team-missing-action-now-what-kristin-cooper-w8slc", title: "The RFP Is Out and Your Team Is Missing In Action" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/sbir-2017-kristin-cooper-carter", title: "SBIR 2017" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/sbir-sttr-what-can-program-do-you-kristin-cooper-carter", title: "SBIR-STTR" },
  { topic: "Federal Grants, Funding & Policy", link: "https://www.linkedin.com/pulse/upcoming-federal-grant-opportunities-springsummer-cooper-carter-rjvdc", title: "Upcoming Federal Grant Opportunities" },
  { topic: "General / Grant Management", link: "", title: "Curtail Grant Writing Stress" },
  { topic: "General / Grant Management", link: "https://www.linkedin.com/pulse/20141013152952-55517318-numbers-game", title: "Numbers Game" },
  { topic: "General / Grant Management", link: "https://www.linkedin.com/pulse/how-turn-big-ideas-bucks-kristin-cooper-carter", title: "How to Turn Big Ideas into Big Bucks" },
  { topic: "General / Grant Management", link: "https://www.linkedin.com/pulse/project-vault-kristin-cooper-7fj7c", title: "Project Vault" },
  { topic: "General / Grant Management", link: "https://www.linkedin.com/pulse/why-should-you-reconsider-partnering-national-labs-cooper-carter", title: "Why should you reconsider partnering with National Labs" },
  { topic: "General / Grant Management", link: "https://www.linkedin.com/pulse/part-2-whats-actually-your-community-kristin-cooper-aekzf", title: "What's Actually In It For Your Community" },
  { topic: "General / Grant Management", link: "https://www.linkedin.com/pulse/twenty-projects-fifty-two-million-dollars-scoring-rubric-cooper-ehn5c", title: "Twenty Projects, Fifty-Two Million Dollars" },
  { topic: "Housing & Community Development", link: "https://www.linkedin.com/pulse/20141013152952-55517318-numbers-game", title: "Affordable Housing 2018 Omnibus Spending" }, // Note: user's table reused a link here, I'll match by title substring.
  { topic: "Public Safety & Cybersecurity", link: "https://www.linkedin.com/pulse/cops-funding-kristin-cooper-carter-xihgc", title: "COPS Funding" },
  { topic: "Public Safety & Cybersecurity", link: "https://www.linkedin.com/pulse/do-miss-your-opportunity-apply-funding-under-following-kristin-cooper-elrbc", title: "COPS Office Notice of Funding" },
  { topic: "Transportation & Transit", link: "https://www.linkedin.com/pulse/bus-you-dont-think-until-its-better-part-1-4-kristin-cooper-vhhqf", title: "The Bus You Don't Think About" },
  { topic: "Transportation & Transit", link: "https://www.linkedin.com/pulse/observations-95m-plan-critical-clean-transportation-cooper-carter", title: "Observations about the $95M-Plan" },
  { topic: "Transportation & Transit", link: "https://www.linkedin.com/pulse/sb-1-california-transportation-bill-kristin-cooper-carter", title: "SB 1 California Transportation Bill" },
  { topic: "Transportation & Transit", link: "https://www.linkedin.com/pulse/125-trillion-trench-why-next-infrastructure-fortunes-wont-cooper-yfvnf", title: "The $1.25 Trillion Trench" },
  { topic: "Transportation & Transit", link: "https://www.linkedin.com/pulse/fta-no-lo-grant-deciding-right-now-part-4-kristin-cooper-whnme", title: "The FTA No-Lo Grant" },
  { topic: "Water & Environmental Infrastructure", link: "https://www.linkedin.com/pulse/epa-water-finance-clearinghouse-kristin-cooper-carter", title: "EPA Water Finance Clearinghouse" },
  { topic: "Water & Environmental Infrastructure", link: "https://www.linkedin.com/pulse/resilient-funding-uncertain-times-what-weeks-federal-budget-cooper-dhk0c", title: "Resilient Funding in Uncertain Times" },
  { topic: "Water & Environmental Infrastructure", link: "https://www.linkedin.com/pulse/yocha-dehe-wintun-nations-investment-madison-blueprint-kristin-cooper-q3kyc", title: "Yocha Dehe Wintun Nation" }
];

function getCategory(slug, title) {
  const match = mappings.find(m => {
    const linkSlug = m.link.split('/').pop().split('?')[0];
    if (linkSlug && slug === linkSlug) return true;
    if (title && title.toLowerCase().includes(m.title.toLowerCase().substring(0, 15))) return true;
    return false;
  });
  return match ? match.topic : "General";
}

function getLink(slug, title) {
  const match = mappings.find(m => {
    const linkSlug = m.link.split('/').pop().split('?')[0];
    if (linkSlug && slug === linkSlug) return true;
    if (title && title.toLowerCase().includes(m.title.toLowerCase().substring(0, 15))) return true;
    return false;
  });
  return match ? match.link : "";
}

// 1. Update scraped-articles.ts
const tsFile = path.join(__dirname, '..', 'src', 'lib', 'scraped-articles.ts');
let tsContent = fs.readFileSync(tsFile, 'utf8');

// Update Article type
tsContent = tsContent.replace(
  '  author?: string;\n};',
  '  author?: string;\n  linkedinUrl?: string;\n};'
);

// We need to carefully parse the array, update it, and write it back.
// Since it's valid JSON for the most part, we can parse it from the string.
const articlesMatch = tsContent.match(/export const articles: Article\[\] = (\[[\s\S]*?\]);/);
if (articlesMatch) {
  let articles = [];
  try {
    // Some keys might not be quoted if it was generated poorly, but previous script used JSON.stringify
    articles = eval(articlesMatch[1]);
  } catch (e) {
    console.error("Failed to parse articles array", e);
  }
  
  const allTopics = new Set();

  articles.forEach(a => {
    const newCat = getCategory(a.slug, a.title);
    a.category = newCat;
    allTopics.add(newCat);
    
    const ln = getLink(a.slug, a.title);
    if (ln) a.linkedinUrl = ln;
  });
  
  const topicsArray = Array.from(allTopics).sort();
  
  // Update categories
  tsContent = tsContent.replace(
    /export const categories: string\[\] = \[[\s\S]*?\];/,
    `export const categories: string[] = ${JSON.stringify(topicsArray, null, 2)};`
  );
  
  // Update articles
  tsContent = tsContent.replace(
    /export const articles: Article\[\] = \[[\s\S]*?\];/,
    `export const articles: Article[] = ${JSON.stringify(articles, null, 2)};`
  );
  
  fs.writeFileSync(tsFile, tsContent);
  console.log("Updated scraped-articles.ts");
} else {
  console.error("Could not find articles array in ts file");
}
