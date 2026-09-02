import { ExternalLink, Building, Info, FileText } from "lucide-react";
import Link from "next/link";

interface GrantData {
  "Opportunity #"?: string;
  "Agency / Funder"?: string;
  "Total Funding"?: string;
  "Award Range"?: string;
  "Eligible Applicants"?: string;
  "Program Focus"?: string;
  "Funding Instrument"?: string;
  "Cost Share / Match"?: string;
  "Primary Sector"?: string;
  "Link to NOFO"?: string;
  "Link to Solicitation"?: string;
  "Posting Date"?: string;
  "Deadline"?: string;
  "Description"?: string;
  
  // Policy fields
  "Document"?: string;
  "What It Is"?: string;
  "Allocation Breakdown"?: string;
  "The Requirement That Shapes Scoping"?: string;
  "Program Context"?: string;
  "Link to Announcement"?: string;
}

// Helper to extract the first URL from a string that might contain HTML anchors
function extractFirstUrl(text: string | undefined): string | null {
  if (!text || text === "N/A") return null;
  const hrefMatch = text.match(/href=["'](https?:\/\/[^"']+)["']/);
  if (hrefMatch && hrefMatch[1]) return hrefMatch[1];
  const urlMatch = text.match(/(https?:\/\/[^\s<]+)/);
  if (urlMatch && urlMatch[1]) return urlMatch[1].replace(/["']$/, '');
  if (!text.includes('<a') && !text.includes(' ') && text.length > 4) {
    return text.startsWith('http') ? text : `https://${text}`;
  }
  return null;
}

export function NewsletterCard({ grant, isPolicy }: { grant: GrantData; isPolicy?: boolean }) {
  // If it's explicitly passed as a policy or has policy-specific fields
  if (isPolicy || grant["What It Is"] || grant["Document"]) {
    return <PolicyCard grant={grant} />;
  }

  // STANDARD OPPORTUNITY CARD
  const linkText = grant["Link to NOFO"] || grant["Link to Solicitation"];
  const validLink = extractFirstUrl(linkText);
  const isLinkValid = !!validLink;
  const title = grant["Description"] || "Funding Opportunity"; // Description is usually the actual title in this JSON structure
  const subTitle = grant["Opportunity #"];
  
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h4 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-2">
            {title}
          </h4>
          {subTitle && (
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              {subTitle}
            </div>
          )}
          {grant["Agency / Funder"] && (
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
              <Building className="h-4 w-4" />
              <span>{grant["Agency / Funder"]}</span>
            </div>
          )}
        </div>
        {isLinkValid ? (
          <a
            href={validLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            View Solicitation <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-semibold rounded-lg whitespace-nowrap cursor-not-allowed" title="Link unavailable">
            No Link Provided
          </div>
        )}
      </div>

      {/* Primary Stats - 4 Field Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-100 dark:border-transparent">
        {grant["Total Funding"] && (
          <div>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Total Funding</span>
            <span className="text-sm text-slate-900 dark:text-slate-200">{grant["Total Funding"]}</span>
          </div>
        )}
        {grant["Award Range"] && (
          <div>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Award Range</span>
            <span className="text-sm text-slate-900 dark:text-slate-200">{grant["Award Range"]}</span>
          </div>
        )}
        {(grant["Deadline"] || grant["Posting Date"]) && (
          <div>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Timeline</span>
            <span className="text-sm text-slate-900 dark:text-slate-200">{grant["Deadline"] || grant["Posting Date"]}</span>
          </div>
        )}
        {grant["Cost Share / Match"] && (
          <div>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Cost Share</span>
            <span className="text-sm text-slate-900 dark:text-slate-200">{grant["Cost Share / Match"]}</span>
          </div>
        )}
      </div>

      {/* Description / Details */}
      <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
        {grant["Program Focus"] && (
          <div className="prose prose-slate dark:prose-invert prose-sm max-w-none">
            <span className="font-semibold text-slate-900 dark:text-white block mb-1">Program Focus: </span>
            <p className="leading-relaxed">{grant["Program Focus"]}</p>
          </div>
        )}
        
        {grant["Eligible Applicants"] && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/50 mt-4">
            <span className="font-semibold text-slate-900 dark:text-white">Eligible Applicants: </span>
            <span className="leading-relaxed">{grant["Eligible Applicants"]}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ALTERNATE POLICY CARD
function PolicyCard({ grant }: { grant: GrantData }) {
  const title = grant["Description"] || grant["Document"] || "Policy Update";
  const linkText = grant["Link to Announcement"];
  const validLink = extractFirstUrl(linkText);
  const isLinkValid = !!validLink;

  return (
    <div className="bg-white dark:bg-slate-900 border-l-4 border-l-amber-500 border-y border-r border-y-slate-200 border-r-slate-200 dark:border-y-slate-800 dark:border-r-slate-800 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium mb-2 uppercase tracking-wider text-xs">
            <FileText className="h-4 w-4" />
            <span>Policy Update</span>
          </div>
          <h4 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-2">
            {title}
          </h4>
          {grant["Document"] && grant["Document"] !== title && (
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {grant["Document"]}
            </div>
          )}
        </div>
        {isLinkValid ? (
          <a
            href={validLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 dark:text-amber-400 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            View Announcement <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-semibold rounded-lg whitespace-nowrap cursor-not-allowed" title="Link unavailable">
            No Link Provided
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/30 p-5 rounded-lg border border-slate-100 dark:border-transparent">
        {grant["What It Is"] && (
          <div>
            <span className="font-semibold text-slate-900 dark:text-white block mb-1">What It Is:</span>
            <p className="leading-relaxed">{grant["What It Is"]}</p>
          </div>
        )}
        
        {grant["The Requirement That Shapes Scoping"] && (
          <div className="pt-3 border-t border-slate-200 dark:border-slate-700/50 mt-3">
            <span className="font-semibold text-slate-900 dark:text-white block mb-1">Impact on Scoping:</span>
            <p className="leading-relaxed">{grant["The Requirement That Shapes Scoping"]}</p>
          </div>
        )}
        
        {grant["Program Context"] && (
          <div className="pt-3 border-t border-slate-200 dark:border-slate-700/50 mt-3">
            <span className="font-semibold text-slate-900 dark:text-white block mb-1">Program Context:</span>
            <p className="leading-relaxed">{grant["Program Context"]}</p>
          </div>
        )}

        {grant["Allocation Breakdown"] && (
          <div className="pt-3 border-t border-slate-200 dark:border-slate-700/50 mt-3">
            <span className="font-semibold text-slate-900 dark:text-white block mb-1">Allocation Breakdown:</span>
            <p className="leading-relaxed">{grant["Allocation Breakdown"]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
