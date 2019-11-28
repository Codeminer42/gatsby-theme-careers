const { createClient } = require('contentful-management')

module.exports = (options) => {
  const client = createClient(options)

  const getContentType = async function(contentTypeId) {
    const space = await client.getSpace(options.spaceId)
    const environment = await space.getEnvironment(options.environmentId)

    return environment.getContentType(contentTypeId)
  }

  const hasFieldInContentType = (ct, fieldId) =>
    ct.fields.some((fld) => fld.id === fieldId)

  return {
    async upsertContentType(migration, contentTypeId) {
      try {
        await getContentType(contentTypeId)

        return migration.editContentType(contentTypeId)
      } catch {
        return migration.createContentType(contentTypeId)
      }
    },

    async upsertField(contentType, fieldId, options = {}) {
      try {
        const ct = await getContentType(contentType.id)
        if (hasFieldInContentType(ct, fieldId)) {
          return contentType.editField(fieldId, options)
        }
        throw new Error(`Field ${fieldId} does not exist.`)
      } catch {
        return contentType.createField(fieldId, options)
      }
    },
  }
}
