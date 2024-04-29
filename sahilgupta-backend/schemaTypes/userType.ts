import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      validation: rule => rule.required().error("First Name cannot be empty")
    }),
    defineField({
      name: 'lastName',
      type: 'string',
    }),
    defineField({
      name: 'age',
      type: 'string',
    }),
    defineField({
      name: 'countryCode',
      type: 'number',
      validation: rule => rule.min(0).max(1000).error("Please enter valid country code")
    }),
    defineField({
      name: 'phone',
      type: 'number',
      validation: rule => rule.min(1000000000).max(9999999999).error("Please enter valid phone number")
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'profile',
      type: 'image',
    }),
  ],
})
