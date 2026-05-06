import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import FullImageSection from "@/components/FullImageSection";
import ServicesSection from "@/components/ServicesSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";
import { sanityFetch } from "@/sanity/lib/live";
import {
  siteSettingsQuery,
  servicesQuery,
  projectsQuery,
  testimonialsQuery,
  newsPostsQuery,
} from "@/sanity/lib/queries";
import type {
  SiteSettings,
  ServiceItem,
  ProjectItem,
  TestimonialItem,
  NewsPostItem,
} from "@/sanity/lib/types";

export default async function Home() {
  const [
    { data: settings },
    { data: services },
    { data: projects },
    { data: testimonials },
    { data: newsPosts },
  ] = await Promise.all([
    sanityFetch({ query: siteSettingsQuery }),
    sanityFetch({ query: servicesQuery }),
    sanityFetch({ query: projectsQuery }),
    sanityFetch({ query: testimonialsQuery }),
    sanityFetch({ query: newsPostsQuery }),
  ]);

  return (
    <main>
      <HeroSection settings={settings as SiteSettings} />
      <AboutSection settings={settings as SiteSettings} />
      <BioSection settings={settings as SiteSettings} />
      <FullImageSection />
      <ServicesSection services={services as ServiceItem[]} />
      <SelectedWorkSection projects={projects as ProjectItem[]} />
      <TestimonialsSection testimonials={testimonials as TestimonialItem[]} />
      <NewsSection newsPosts={newsPosts as NewsPostItem[]} />
      <FooterSection />
    </main>
  );
}
