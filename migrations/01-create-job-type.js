module.exports = function (migration) {
  const job = migration.createContentType('job')
    .name('Job')
    .displayField('title')

  job.createField('title')
    .type('Symbol')
    .required(true)
    .name('Title')
    .validations([{ unique: true }])

  job.createField('slug')
    .type('Symbol')
    .required(true)
    .name('Slug')
    .validations([{ unique: true }])

  job.changeFieldControl('slug', 'builtin', 'slugEditor')

  job.createField('body')
    .type('RichText')
    .required(true)
    .name('Body')
}
