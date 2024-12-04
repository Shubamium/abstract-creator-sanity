import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'figure',
  title: 'Figure',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [
        defineField({
          name: 'detail',
          // title: '',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'info',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'lore',
      type: 'text',
    }),
  ],
})
