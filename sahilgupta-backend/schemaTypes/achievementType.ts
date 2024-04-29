import {defineField, defineType} from 'sanity'

export const achievementType = defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    defineField({
      name: 'achievementName',
      type: 'string',
      validation: rule => rule.required().error("Achievement Name cannot be empty")
    }),
    defineField({
        name: 'receivedDate',
        type: 'datetime',
    }),
    defineField({
        name: 'description',
        type: 'string',
    }),
  ],
})
