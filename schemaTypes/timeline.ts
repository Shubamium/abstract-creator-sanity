import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timeline',
  type: 'document',

  fields: [
    // Define your fields here
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
      name: 'description',
      type: 'text',
    }),
  ],
})
