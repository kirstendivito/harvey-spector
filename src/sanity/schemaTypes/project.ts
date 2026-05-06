import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  orderings: [{ title: 'Manual Order', name: 'manualOrder', by: [{ field: 'order', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], description: 'Discipline tags shown on the card (e.g. Photography, Brand Identity)' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, description: 'Brief summary of the project' }),
    defineField({ name: 'url', title: 'Project URL', type: 'url', description: 'Link to the live work' }),
    defineField({ name: 'year', title: 'Year', type: 'number', description: 'Year the project was completed' }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', media: 'image', year: 'year' },
    prepare({ title, media, year }) {
      return { title: title ?? 'Untitled', subtitle: year ? String(year) : undefined, media }
    },
  },
})
