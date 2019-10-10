require('dotenv').config()
const runMigration = require('contentful-migration/built/bin/cli').runMigration

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  yes: true,
}

const migrate = async () => {
  await runMigration({...options, ...{ filePath: '01-create-job-type.js' }})
  await runMigration({...options, ...{ filePath: '02-create-tag-type.js' }})
  await runMigration({...options, ...{ filePath: '03-job-tag-many-association.js' }})
}

migrate()
