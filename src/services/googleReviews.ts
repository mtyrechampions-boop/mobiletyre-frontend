const FALLBACK_STRAPI_URL = 'https://enduring-morning-cf86e59201.strapiapp.com';

// Accepts either a bare origin (NEXT_PUBLIC_STRAPI_URL) or an origin already
// ending in /api (VITE_STRAPI_API_URL, kept from the previous Vite setup).
function getStrapiOrigin(): string {
  const configured =
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    process.env.VITE_STRAPI_API_URL ||
    FALLBACK_STRAPI_URL;

  return configured.replace(/\/+$/, '').replace(/\/api$/, '');
}

export interface GoogleReview {
  authorName: string;
  authorPhoto: string;
  rating: number;
  text: string;
  publishTime: string;
  relativePublishTimeDescription: string;
}

export interface GoogleReviewsData {
  businessName: string;
  rating: number;
  totalReviews: number;
  googleMapsUrl: string;
  reviews: GoogleReview[];
}

export interface ApiResponse {
  success: boolean;
  data?: GoogleReviewsData;
  message?: string;
}

export async function getGoogleReviews(): Promise<ApiResponse> {
  try {
    const res = await fetch(`${getStrapiOrigin()}/api/google-reviews`, {
      next: { revalidate: 3600 }, // Cache on frontend for 1 hour
      signal: AbortSignal.timeout(8000), // Never let a slow Strapi stall a render
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch reviews: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching Google Business Profile reviews:', error);
    return {
      success: false,
      message: error.message || 'Unable to fetch Google reviews.',
    };
  }
}
