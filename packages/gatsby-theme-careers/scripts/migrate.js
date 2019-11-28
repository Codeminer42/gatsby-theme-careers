const path = require('path')
const { createContentful } = require('../contentful')

const migrate = async (options) => {
  const { runMigration } = createContentful(options)

  const filePath = (file) => path.resolve(__dirname, `../migrations${file}`)

  try {
    await runMigration(filePath('/01-create-job-type.js'))
    await runMigration(filePath('/02-create-tag-type.js'))
    await runMigration(filePath('/03-job-tag-many-association.js'))
  } catch (error) {
    console.error(error)
  }
}

module.exports = migrate
