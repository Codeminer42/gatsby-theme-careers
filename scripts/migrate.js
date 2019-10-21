require('dotenv').config()
const path = require('path')
const runMigration = require('contentful-migration/built/bin/cli').runMigration

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
  yes: true,
}

const migrate = async () => {
  await runMigration({
    ...options,
    filePath: path.resolve('./migrations/01-create-job-type.js'),
  })
  await runMigration({
    ...options,
    filePath: path.resolve('./migrations/02-create-tag-type.js'),
  })
  await runMigration({
    ...options,
    filePath: path.resolve('./migrations/03-job-tag-many-association.js'),
  })
}

migrate()
