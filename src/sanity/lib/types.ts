export type SiteSettings = {
  heroLabel?: string | null;
  heroDescription?: string | null;
  aboutYearsLabel?: string | null;
  bioText?: string | null;
  bioImageUrl?: string | null;
} | null;

export type ServiceItem = {
  _id?: string;
  name: string;
  tagline?: string | null;
  description: string;
  deliverables?: string[] | null;
  imageUrl?: string | null;
  order?: number;
};

export type ProjectItem = {
  _id?: string;
  name: string;
  tags: string[];
  description?: string | null;
  url?: string | null;
  year?: number | null;
  imageUrl?: string | null;
  order?: number;
};

export type TestimonialItem = {
  _id?: string;
  clientName?: string;
  clientRole?: string | null;
  company?: string | null;
  quote: string;
  logoUrl?: string | null;
  logoHeight: number;
  order?: number;
};

export type NewsPostItem = {
  _id?: string;
  excerpt?: string | null;
  imageUrl?: string | null;
  order?: number;
};
