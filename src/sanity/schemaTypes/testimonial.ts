import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  orderings: [{ title: 'Manual Order', name: 'manualOrder', by: [{ field: 'order', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
    defineField({ name: 'logo', title: 'Client Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logoHeight', title: 'Logo Display Height (px)', type: 'number' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'clientName', media: 'logo' },
  },
})
