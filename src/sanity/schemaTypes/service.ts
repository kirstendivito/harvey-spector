import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  orderings: [{ title: 'Manual Order', name: 'manualOrder', by: [{ field: 'order', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', order: 'order' },
    prepare({ title, order }) {
      return { title: `[${order}] ${title ?? 'Untitled'}` }
    },
  },
})
