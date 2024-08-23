import Boom from '@hapi/boom'
import isNull from 'lodash/isNull.js'

import { createClaimData } from '../helpers/create-claim-data.js'

/**
 *
 * @satisfies {Partial<ServerRoute>}
 */
const createClaimController = {
  /**
   * @param { import('@hapi/hapi').Request & MongoDBPlugin } request
   * @param { import('@hapi/hapi').ResponseToolkit } h
   * @returns {Promise<*>}
   */
  handler: async (request, h) => {
    const entity = await createClaimData(request.db, request.payload)
    if (isNull(entity)) {
      return Boom.boomify(Boom.notFound())
    }

    return h.response({ message: 'success', entity }).code(200)
  }
}

export { createClaimController }

/**
 * @import { ServerRoute} from '@hapi/hapi'
 * @import { MongoDBPlugin } from '~/src/helpers/mongodb.js'
 */
