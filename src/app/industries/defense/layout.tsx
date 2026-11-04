import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Defense & Dual-Use Funding (SBIR, DIU, OTA)",
  description: "Capture non-dilutive defense innovation funding across SBIR, DIU, OTA, and APFIT vehicles with Grant Management Associates.",
  alternates: {
    canonical: "https://www.grantmanagementassoc.com/industries/defense",
  },
};

export default function DefenseLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

