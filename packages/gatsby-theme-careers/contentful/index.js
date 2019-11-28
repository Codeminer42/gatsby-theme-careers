const contentful = require('./contentful')

const container = () => {
  let currentContentful

  const createContentful = (options) => {
    currentContentful = contentful(options)

    return getContentful()
  }

  const getContentful = () => ({
    ...currentContentful,
  })

  return {
    createContentful,
    getContentful,
  }
}

module.exports = container()
