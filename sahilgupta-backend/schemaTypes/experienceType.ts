import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      validation: rule => rule.required().error("Company Name cannot be empty")
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
        name: 'location',
        type: 'string',
    }),
    defineField({
        name: 'description',
        type: 'string',
    }),
  ],
})
