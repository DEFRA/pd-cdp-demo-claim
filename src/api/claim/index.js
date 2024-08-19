import {
  findClaimController,
  createClaimController
} from '~/src/api/claim/controllers/index.js'

/**
 * @satisfies {ServerRegisterPluginObject<void>}
 */
const claim = {
  plugin: {
    name: 'claim',
    register: (server) => {
      server.route([
        {
          method: 'GET',
          path: '/claim/{claimId}',
          ...findClaimController
        },
        {
          method: 'POST',
          path: '/claim',
          ...createClaimController
        }
      ])
    }
  }
}

export { claim }

/**
 * @import { ServerRegisterPluginObject } from '@hapi/hapi'
 */
