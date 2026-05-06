import { defineField, defineType } from 'sanity'

export const newsPost = defineType({
  name: 'newsPost',
  title: 'News Post',
  type: 'document',
  orderings: [{ title: 'Manual Order', name: 'manualOrder', by: [{ field: 'order', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'url', title: 'Read More URL', type: 'url', description: 'Link for the Read more button' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'date' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', media: 'image', date: 'publishedAt' },
    prepare({ title, media, date }) {
      return { title: title ?? 'Untitled', subtitle: date ?? undefined, media }
    },
  },
})
