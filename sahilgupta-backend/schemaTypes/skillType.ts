import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'skillName',
      type: 'string',
      validation: rule => rule.required().error("Skill Name cannot be empty")
    }),
    defineField({
      name: 'logo',
      type: 'image',
      validation: rule => rule.required().error("Skill logo cannot be empty")
  }),
  ],
})
