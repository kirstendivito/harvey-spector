import { defineQuery } from 'next-sanity'

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    heroLabel,
    heroDescription,
    aboutYearsLabel,
    bioText,
    "bioImageUrl": bioImage.asset->url
  }
`)

export const servicesQuery = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    name,
    tagline,
    description,
    deliverables,
    "imageUrl": image.asset->url,
    order
  }
`)

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    name,
    tags,
    description,
    url,
    year,
    "imageUrl": image.asset->url,
    order
  }
`)

export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    clientName,
    clientRole,
    company,
    quote,
    "logoUrl": logo.asset->url,
    logoHeight,
    order
  }
`)

export const newsPostsQuery = defineQuery(`
  *[_type == "newsPost"] | order(order asc) {
    _id,
    title,
    excerpt,
    url,
    publishedAt,
    "imageUrl": image.asset->url,
    order
  }
`)
