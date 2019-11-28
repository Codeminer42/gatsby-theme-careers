const { getContentful } = require('../contentful')

module.exports = async (migration) => {
  const { upsertContentType, upsertField } = getContentful()

  const job = await upsertContentType(migration, 'job')
  const tag = await upsertContentType(migration, 'tag')

  await upsertField(job, 'tags', {
    type: 'Array',
    name: 'Tags',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['tag'] }],
    },
  })

  await upsertField(tag, 'jobs', {
    type: 'Array',
    name: 'Jobs',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['job'] }],
    },
  })
}
