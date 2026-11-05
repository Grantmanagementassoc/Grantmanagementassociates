import { NextResponse } from "next/server";
import { db } from "@/db";
import { assessmentResponses } from "@/db/schema";
import { dispatchLead } from "@/lib/integrations";

export const dynamic = "force-dynamic";

type Payload = {
  organizationName: string;
  organizationType?: string;
  industry?: string;
  projectDescription?: string;
  fundingAmount?: string;
  timeline?: string;
  priorGrants?: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  optInNewsletter?: boolean;
};

export type MatchedProgram = {
  name: string;
  agency: string;
  awardCeiling: string;
  timeline: string;
  fitReason: string;
};

export type ReadinessRead = {
  overallScore: number;
  pillars: { name: string; score: number; verdict: string }[];
  matchedPrograms: MatchedProgram[];
  writtenAnalysis: string;
  recommendations: string[];
};

function generateFundingAnalysis(p: Payload): ReadinessRead {
  let baseScore = 62;
  const recommendations: string[] = [];

  // 1. Grant History Weighting
  if (p.priorGrants === "yes-multiple") {
    baseScore += 16;
    recommendations.push("Established Grant Track Record: Your prior grant history significantly reduces perceived performance risk in federal merit reviews.");
  } else if (p.priorGrants === "yes-one") {
    baseScore += 10;
    recommendations.push("Demonstrated Award Capacity: Well-positioned to leverage your single prior award to compete for larger multi-year federal funding.");
  } else {
    recommendations.push("First-Time Applicant Strategy: Recommend starting with a rigorous Go/No-Go Key Considerations Analysis before committing resources to an open FOA.");
  }

  // 2. Organization Type Considerations
  const orgType = (p.organizationType || "").toLowerCase();
  if (orgType === "nonprofit") {
    recommendations.push("Nonprofit Fit: Priority alignment with foundation grants, USDA Rural Development, and agency community-benefit set-asides.");
  } else if (orgType === "corporation" || orgType === "startup") {
    recommendations.push("Commercial Innovation: High competitiveness for DOE, DOD SBIR/STTR, and Commerce/NIST commercialization grants.");
  } else if (orgType === "tribal") {
    baseScore += 6;
    recommendations.push("Tribal Sovereignty Set-Asides: Distinct eligibility for non-competitive and reduced-competition federal tribal appropriations (BIA, DOE-IE).");
  } else if (orgType === "government") {
    baseScore += 5;
    recommendations.push("Public Agency Infrastructure: Exceptional alignment with DOT (RAISE/INFRA/Low-No) and EPA revolving funds.");
  }

  // 3. Funding Target Calibration
  const amt = p.fundingAmount || "";
  if (amt.includes("10M+")) {
    baseScore += 10;
    recommendations.push("Large-Scale Capital Stack: Projects exceeding $10M benefit from multi-tier funding (grants paired with tax credits and agency loan guarantees).");
  } else if (amt.includes("1M")) {
    baseScore += 5;
  }

  const finalScore = Math.min(97, Math.max(58, baseScore));

  // 4. Generate Matched Programs based on Sector & Profile
  const ind = (p.industry || "").toLowerCase();
  const matchedPrograms: MatchedProgram[] = [];

  if (ind.includes("energy") || ind.includes("clean") || ind.includes("climate") || ind.includes("environment")) {
    matchedPrograms.push({
      name: "Clean Energy Demonstrations & Deployment (OCED / EPIC)",
      agency: "U.S. Department of Energy / State Energy Commissions",
      awardCeiling: "$1,000,000 – $25,000,000",
      timeline: "Rolling Solicitations & Q2/Q3 2026 Deadlines",
      fitReason: "Direct alignment with high-readiness clean energy, storage, and emissions mitigation technologies.",
    });
    matchedPrograms.push({
      name: "Inflation Reduction Act Section 48C Advanced Energy Project Credit",
      agency: "Internal Revenue Service & U.S. Department of Energy",
      awardCeiling: "Up to 30% Investment Tax Credit (Multi-Million)",
      timeline: "Annual Allocation Cycles",
      fitReason: "High-value tax credit pairing for domestic clean energy equipment manufacturing and processing.",
    });
  } else if (ind.includes("transport") || ind.includes("transit") || ind.includes("fleet")) {
    matchedPrograms.push({
      name: "Low or No Emission (Low-No) Vehicle Program",
      agency: "Federal Transit Administration (FTA)",
      awardCeiling: "$5,000,000 – $120,000,000",
      timeline: "Annual Spring/Summer Solicitations",
      fitReason: "GMA has secured over $310M in transit grants, including the landmark $117M Golden Empire Transit award.",
    });
    matchedPrograms.push({
      name: "Rebuilding American Infrastructure with Sustainability & Equity (RAISE)",
      agency: "U.S. Department of Transportation (USDOT)",
      awardCeiling: "$5,000,000 – $25,000,000",
      timeline: "Annual FY2026 Window",
      fitReason: "Supports multimodal, port, transit, and critical corridor modernization initiatives.",
    });
  } else if (ind.includes("tech") || ind.includes("software") || ind.includes("defense") || ind.includes("cyber")) {
    matchedPrograms.push({
      name: "CHIPS and Science Act Commercialization / Defense RDT&E",
      agency: "National Institute of Standards and Technology (NIST) & DoD",
      awardCeiling: "$2,000,000 – $45,000,000",
      timeline: "Open Funding Windows 2026",
      fitReason: "Targeted support for critical technology, semiconductor ecosystem, and domestic defense industrial base.",
    });
    matchedPrograms.push({
      name: "National Science Foundation TIP (Technology, Innovation & Partnerships)",
      agency: "National Science Foundation (NSF)",
      awardCeiling: "$500,000 – $5,000,000",
      timeline: "Phased Proposal Submissions",
      fitReason: "Accelerates translation of breakthrough technological discoveries to market scale.",
    });
  } else if (orgType === "nonprofit" || ind.includes("community") || ind.includes("health")) {
    matchedPrograms.push({
      name: "Community Facilities & Direct Technical Assistance Grants",
      agency: "U.S. Department of Agriculture (USDA) / HHS",
      awardCeiling: "$250,000 – $3,000,000",
      timeline: "Year-Round Quarterly Cycles",
      fitReason: "Supports essential community infrastructure, workforce, and public health delivery.",
    });
    matchedPrograms.push({
      name: "Private & National Foundation Strategic Initiatives",
      agency: "Major Philanthropic Foundations & State Endowments",
      awardCeiling: "$100,000 – $1,500,000",
      timeline: "Continuous Review Cadence",
      fitReason: "Ideal for programmatic expansion with flexible reporting and ongoing operational support.",
    });
  } else {
    matchedPrograms.push({
      name: "Federal Targeted Program Appropriations & Grants.gov Solicitations",
      agency: "Interagency Federal Grantmaking Offices",
      awardCeiling: "$500,000 – $10,000,000",
      timeline: "Fiscal Year 2026 Cycles",
      fitReason: "Tailored competitive solicitations matching your specific organizational mission and project scope.",
    });
  }

  // Always include a secondary federal opportunity
  if (matchedPrograms.length < 2) {
    matchedPrograms.push({
      name: "Economic Development Administration (EDA) Public Works & Innovation",
      agency: "U.S. Department of Commerce (EDA)",
      awardCeiling: "$1,000,000 – $10,000,000",
      timeline: "Continuous / Rolling FY2026",
      fitReason: "Funds job creation, regional innovation hubs, and capital infrastructure projects.",
    });
  }

  // 5. Pillars Breakdown
  const pillars = [
    {
      name: "Strategic & Agency Alignment",
      score: Math.min(98, finalScore + 4),
      verdict: "Strong. Project objectives reflect active federal administration priorities and high-impact economic outcomes.",
    },
    {
      name: "Technical & Scope Readiness",
      score: Math.min(95, finalScore - 2),
      verdict: "Favorable. Project scope demonstrates actionable maturity, with standard engineering or execution milestones.",
    },
    {
      name: "Budget & Match Feasibility",
      score: Math.min(92, finalScore - 5),
      verdict: "Targeted. Most competitive awards require 20% to 50% matching commitments; early documentation is recommended.",
    },
    {
      name: "Reviewer Scoreability & Narrative Strength",
      score: finalScore,
      verdict: "High Potential. Clear differentiation exists; proposal must rigorously adhere to agency evaluation scoring matrices.",
    },
  ];

  // 6. Written Analysis
  const writtenAnalysis = `Based on your assessment profile for ${p.organizationName || "your organization"}, your project demonstrates a Funding Potential Score of ${finalScore}/100. Organizations in your posture typically face high reviewer competition but possess compelling differentiators. Key funding agencies are currently allocating record resources under bipartisan authorizations. To maximize your win probability, we recommend a disciplined pursuit sequence: (1) Execute a rigorous Go/No-Go Key Considerations Analysis against target NOFO rubrics; (2) Pre-assemble matching fund commitments and partner letters of support 60 days before submission; and (3) Map your budget directly to allowable federal cost principles under 2 CFR 200.`;

  return {
    overallScore: finalScore,
    pillars,
    matchedPrograms,
    writtenAnalysis,
    recommendations,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload & { _website_hp?: string; _rendered_at?: number };

    // Anti-spam honeypot and time-trap protection
    if (body._website_hp) {
      return NextResponse.json({
        score: 75,
        analysis: generateFundingAnalysis(body),
        recommendations: ["Thank you. Your assessment has been received."],
      });
    }
    if (body._rendered_at && Date.now() - Number(body._rendered_at) < 1000) {
      return NextResponse.json({
        score: 75,
        analysis: generateFundingAnalysis(body),
        recommendations: ["Thank you. Your assessment has been received."],
      });
    }

    if (!body.organizationName || !body.contactName || !body.contactEmail) {
      return NextResponse.json({ error: "Organization, name, and email required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.contactEmail)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (body.contactPhone && !/^\+?[1-9]\d{1,14}$/.test(body.contactPhone.replace(/[\s-()]/g, ""))) {
      return NextResponse.json({ error: "Please provide a valid phone number with country code." }, { status: 400 });
    }

    const analysis = generateFundingAnalysis(body);

    const [row] = await db
      .insert(assessmentResponses)
      .values({
        organizationName: body.organizationName,
        organizationType: body.organizationType ?? null,
        industry: body.industry ?? null,
        projectDescription: body.projectDescription ?? null,
        fundingAmount: body.fundingAmount ?? null,
        timeline: body.timeline ?? null,
        priorGrants: body.priorGrants ?? null,
        contactName: body.contactName,
        contactEmail: body.contactEmail.toLowerCase().trim(),
        contactPhone: body.contactPhone ?? null,
        score: analysis.overallScore,
        recommendations: analysis.recommendations,
      })
      .returning({ id: assessmentResponses.id });

    // Sync to Pipedrive & Shared Inbox Notification
    await dispatchLead({
      name: body.contactName,
      email: body.contactEmail,
      phone: body.contactPhone || null,
      organization: body.organizationName,
      sourceTag: "free-funding-analysis",
      notes: `Target Funding: ${body.fundingAmount || "N/A"}\nTimeline: ${body.timeline || "N/A"}\nPrior Grants: ${body.priorGrants || "N/A"}\nProject: ${body.projectDescription || "N/A"}\nScore: ${analysis.overallScore}/100`,
      details: {
        assessmentId: row.id,
        score: analysis.overallScore,
        industry: body.industry,
        orgType: body.organizationType,
        matchedPrograms: analysis.matchedPrograms,
        writtenAnalysis: analysis.writtenAnalysis,
      },
      optInNewsletter: Boolean(body.optInNewsletter),
    });

    return NextResponse.json({
      ok: true,
      id: row.id,
      score: analysis.overallScore,
      analysis,
      recommendations: analysis.recommendations,
    });
  } catch (err: any) {
    console.error("Assessment error:", err);
    return NextResponse.json(
      {
        error: "Database error",
        message: err.message,
      },
      { status: 500 }
    );
  }
}
