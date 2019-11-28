const path = require('path')
const cli = require('contentful-migration/built/bin/cli')

module.exports = (options) => {
  const runMigration = async (filePath) => {
    await cli.runMigration({
      ...options,
      filePath: path.resolve(filePath),
    })
  }

  return {
    runMigration,
  }
}
