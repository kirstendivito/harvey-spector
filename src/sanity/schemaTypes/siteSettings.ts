import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero Label', type: 'string', description: 'e.g. "Hello i\'m"' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 4 }),
    defineField({ name: 'aboutYearsLabel', title: 'About Years Label', type: 'string', description: 'e.g. "8+ years in industry"' }),
    defineField({ name: 'bioText', title: 'Bio Text', type: 'text', rows: 6 }),
    defineField({ name: 'bioImage', title: 'Bio Image', type: 'image', options: { hotspot: true } }),
  ],
})
