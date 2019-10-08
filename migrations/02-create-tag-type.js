module.exports = function (migration) {
  const tag = migration.createContentType('tag')
    .name('Tag')
    .displayField('name')

  tag.createField('name')
    .type('Symbol')
    .required(true)
    .name('Name')
    .validations([{ unique: true }])

  tag.createField('slug')
    .type('Symbol')
    .required(true)
    .name('Slug')
    .validations([{ unique: true }])
}
