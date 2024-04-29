import {defineField, defineType, defineArrayMember} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      type: 'string',
      validation: rule => rule.required().error("Project Name cannot be empty")
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
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'preview',
      type: 'image',
    }),
    defineField({
      name: 'relevantSkills',
      type: 'array',
      title: 'Skill used in project',
      of: [
        defineArrayMember({
          name: 'skill',
          type: 'reference',
          to: [{type: 'skill'}]
        })
      ]
    }),
  ],
})
