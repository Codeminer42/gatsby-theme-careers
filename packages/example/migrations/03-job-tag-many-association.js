const { upsertContentType, upsertField } = require('./utils')

module.exports = async function(migration) {
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
