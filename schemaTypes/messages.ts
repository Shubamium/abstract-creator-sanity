import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'messages',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Pink', value: '#E4009F'},
          {title: 'Red', value: '#E6356C'},
          {title: 'Purple', value: '#B400FF'},
          {title: 'Green', value: '#00DF73'},
          {title: 'Yellow', value: '#F1E53D'},
          {title: 'Blue', value: '#8ADCEC'},
        ],
      },
    }),
    defineField({
      name: 'message',
      type: 'text',
    }),
    defineField({
      name: 'replies',
      type: 'array',
      of: [
        defineField({
          name: 'reply',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'messages',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
})
