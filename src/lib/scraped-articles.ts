export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  bodyText?: string;
  category: string;
  image?: string;
  date?: string;
  author?: string;
};

export const categories: string[] = [
  "Agriculture",
  "Arts",
  "Broadband",
  "Budget Highlights",
  "Business And Commerce",
  "Community Development",
  "Consumer Protection",
  "Disaster Preparedness",
  "Education",
  "Electric Vehicles",
  "Employment Labor And Training",
  "Energy",
  "Environment",
  "Ev Charging",
  "Food And Nutrition",
  "General",
  "Government",
  "Health",
  "Housing",
  "Humanities",
  "Hydrogen",
  "Iija",
  "Income Security And Social Services",
  "Information And Statistics",
  "Information Sessions",
  "Infrastructure",
  "Last Week In Review",
  "Law Legal Systems And Justice",
  "Natural Resources",
  "Oceans Lakes And Rivers",
  "Parks And Recreation",
  "Pollution",
  "Regional Development",
  "Request For Information",
  "Research And Development",
  "Technology",
  "Transportation",
  "Tribal",
  "Water",
  "Wind",
  "Workforce"
];

// Replaced with dynamic LinkedIn posts in the articles page.
export const articles: Article[] = [];
