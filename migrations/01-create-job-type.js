const { upsertContentType, upsertField } = require('./utils')

module.exports = async function(migration) {
  const job = await upsertContentType(migration, 'job')
  const title = await upsertField(job, 'title')
  const slug = await upsertField(job, 'slug')
  const body = await upsertField(job, 'body')

  job
    .name('Job')
    .description('Job Position')
    .displayField('title')

  title
    .type('Symbol')
    .required(true)
    .name('Title')
    .validations([{ unique: true }])

  slug
    .type('Symbol')
    .required(true)
    .name('Slug')
    .validations([{ unique: true }])

  body
    .type('RichText')
    .required(true)
    .name('Body')

  job.changeFieldControl('slug', 'builtin', 'slugEditor', {
    helpText: 'It will be used for the URL: /jobs/<slug>',
  })
}
