const cli = require('./cli')
const client = require('./client')

const contentful = ({ spaceId, managementToken, environmentId }) => {
  const cliOptions = {
    spaceId,
    accessToken: managementToken,
    yes: true,
  }

  const clientOptions = {
    spaceId,
    accessToken: managementToken,
    environmentId,
  }

  return {
    ...cli(cliOptions),
    ...client(clientOptions),
  }
}

module.exports = contentful
