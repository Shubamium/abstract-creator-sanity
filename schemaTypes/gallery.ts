import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
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
      name: 'comments',
      type: 'array',
      initialValue: [{}],
      of: [
        defineField({
          name: 'comment',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
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
              name: 'postedAt',
              type: 'datetime',
            }),
            defineField({
              name: 'message',
              title: 'Message',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
