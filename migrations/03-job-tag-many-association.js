const { upsertContentType, upsertField } = require('./utils')

module.exports = async function(migration) {
  const job = await upsertContentType(migration, 'job')
  const tag = await upsertContentType(migration, 'tag')

  const tagsField = await upsertField(job, 'tags')
  const jobsField = await upsertField(tag, 'jobs')

  tagsField
    .type('Array')
    .name('Tags')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['tag'] }],
    })

  jobsField
    .type('Array')
    .name('Jobs')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['job'] }],
    })
}
