import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'decription',
      type: 'text',
    }),
    defineField({
      name: 'price',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'product_link',
      title: 'Product Link',
      description: 'Product link to your printify store',
      placeholder: 'https://yourstore.printify.me/product/810240/product-name',
      type: 'url',
    }),
  ],
})
