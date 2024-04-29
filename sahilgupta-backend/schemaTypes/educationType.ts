import {defineField, defineType} from 'sanity'

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'schoolName',
      type: 'string',
      validation: rule => rule.required().error("School Name cannot be empty")
    }),
    defineField({
      name: 'startDate',
      type: 'date',
    }),
    defineField({
        name: 'endDate',
        type: 'date',
        validation: rule => rule.min(rule.valueOfField('startDate'))
    }),
    defineField({
        name: 'degree',
        type: 'string',
    }),
    defineField({
        name: 'location',
        type: 'string',
    }),
    defineField({
        name: 'coursework',
        type: 'string',
    }),
  ],
})
