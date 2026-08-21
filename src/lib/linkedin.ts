// src/lib/linkedin.ts

export interface LinkedInPost {
  id: string;
  author: string;
  commentary: string;
  createdAt: number;
}

export async function getLinkedInPosts(): Promise<LinkedInPost[]> {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const authorUrn = process.env.LINKEDIN_AUTHOR_URN;

  if (!token || !authorUrn) {
    console.error("Missing LinkedIn credentials in .env.local");
    return [];
  }

  try {
    const url = `https://api.linkedin.com/rest/posts?author=${encodeURIComponent(authorUrn)}&q=author&count=20`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "LinkedIn-Version": "202401", 
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0"
      },
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`LinkedIn API Error ${response.status}: ${errorText}`);
      return [];
    }

    const data = await response.json();
    
    // Parse the LinkedIn API response to extract meaningful data
    return (data.elements || []).map((post: any) => ({
      id: post.id,
      author: post.author,
      commentary: post.commentary || "",
      createdAt: post.createdAt || Date.now(),
    }));

  } catch (error) {
    console.error("Failed to fetch LinkedIn posts:", error);
    return [];
  }
}
