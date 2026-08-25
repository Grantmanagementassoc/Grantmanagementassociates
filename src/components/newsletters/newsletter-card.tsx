import { ExternalLink, DollarSign, Calendar, Building, Info } from "lucide-react";

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
  "Description"?: string;
}

export function NewsletterCard({ grant }: { grant: GrantData }) {
  const link = grant["Link to NOFO"] || grant["Link to Solicitation"];
  const title = grant["Opportunity #"] || "Funding Opportunity";
  
  return (
    <div className="bg-slate-900 border border-glass-border rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h4 className="text-xl font-display font-semibold text-white mb-2">
            {title}
          </h4>
          {grant["Agency / Funder"] && (
            <div className="flex items-center gap-2 text-cyan-400 font-medium">
              <Building className="h-4 w-4" />
              <span>{grant["Agency / Funder"]}</span>
            </div>
          )}
        </div>
        {link && (
          <a
            href={link !== "N/A" && !link.startsWith("http") ? `https://${link}` : link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            View Solicitation <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-slate-800/50 rounded-lg p-4">
        {grant["Total Funding"] && (
          <div>
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Total Funding</span>
            <span className="text-sm text-slate-200">{grant["Total Funding"]}</span>
          </div>
        )}
        {grant["Award Range"] && (
          <div>
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Award Range</span>
            <span className="text-sm text-slate-200">{grant["Award Range"]}</span>
          </div>
        )}
        {grant["Posting Date"] && (
          <div>
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Timeline</span>
            <span className="text-sm text-slate-200">{grant["Posting Date"]}</span>
          </div>
        )}
        {grant["Cost Share / Match"] && (
          <div>
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Cost Share</span>
            <span className="text-sm text-slate-200">{grant["Cost Share / Match"]}</span>
          </div>
        )}
      </div>

      {/* Description / Details */}
      <div className="space-y-4 text-sm text-slate-300">
        {grant["Description"] && (
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="leading-relaxed">{grant["Description"]}</p>
          </div>
        )}
        
        {grant["Eligible Applicants"] && (
          <div>
            <span className="font-semibold text-white">Eligible Applicants: </span>
            {grant["Eligible Applicants"]}
          </div>
        )}
        
        {grant["Program Focus"] && (
          <div>
            <span className="font-semibold text-white">Program Focus: </span>
            {grant["Program Focus"]}
          </div>
        )}
      </div>
    </div>
  );
}
