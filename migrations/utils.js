require('dotenv').config()
const { createClient } = require('contentful-management')

const config = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID,
}

const client = createClient(config)

const getContentType = async function(contentTypeId) {
  const space = await client.getSpace(config.spaceId)
  const environment = await space.getEnvironment(config.environmentId)
  return environment.getContentType(contentTypeId)
}

module.exports = {
  async upsertContentType(migration, contentTypeId) {
    try {
      await getContentType(contentTypeId)
      return migration.editContentType(contentTypeId)
    } catch (_) {
      return migration.createContentType(contentTypeId)
    }
  },

  async upsertField(contentType, fieldId) {
    try {
      const ct = await getContentType(contentType.id)
      if (ct.fields.some((fld) => fld.id === fieldId)) {
        return contentType.editField(fieldId)
      }
      throw new Error(`Field ${fieldId} does not exist.`)
    } catch (_) {
      return contentType.createField(fieldId)
    }
  },
}
