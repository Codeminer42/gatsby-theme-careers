module.exports = function (migration) {
  const job = migration.editContentType('job')
  const tag = migration.editContentType('tag')

  job.createField('tags')
    .type('Array')
    .name('Tags')
    .items({ type: 'Link', linkType: 'Tag' })

  tag.createField('jobs')
    .type('Array')
    .name('Jobs')
    .items({ type: 'Link', linkType: 'Job' })
}
