const { getContentful } = require('../contentful')

module.exports = async (migration) => {
  const { upsertContentType, upsertField } = getContentful()

  const tag = await upsertContentType(migration, 'tag')
  const name = await upsertField(tag, 'name')
  const slug = await upsertField(tag, 'slug')

  tag
    .name('Tag')
    .description('Job Tag')
    .displayField('name')

  name
    .type('Symbol')
    .required(true)
    .name('Name')
    .validations([{ unique: true }])

  slug
    .type('Symbol')
    .required(true)
    .name('Slug')
    .validations([{ unique: true }])

  tag.changeFieldControl('slug', 'builtin', 'slugEditor', {
    helpText:
      'It will be used for the URL listing jobs with this tag: /tags/<slug>',
  })
}
