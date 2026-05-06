import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  orderings: [{ title: 'Manual Order', name: 'manualOrder', by: [{ field: 'order', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'clientRole', title: 'Client Role', type: 'string', description: 'Job title or position (e.g. Founder, Head of Marketing)' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'Client Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logoHeight', title: 'Logo Display Height (px)', type: 'number' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'company', media: 'logo' },
  },
})
