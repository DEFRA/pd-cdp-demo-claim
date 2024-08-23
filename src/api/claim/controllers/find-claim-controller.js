import Boom from '@hapi/boom'
import isNull from 'lodash/isNull.js'

import { findClaimData } from '../helpers/find-claim-data.js'

/**
 *
 * @satisfies {Partial<ServerRoute>}
 */
const findClaimController = {
  /**
   * @param { import('@hapi/hapi').Request & MongoDBPlugin } request
   * @param { import('@hapi/hapi').ResponseToolkit } h
   * @returns {Promise<*>}
   */
  handler: async (request, h) => {
    const entity = await findClaimData(request.db, request.params.claimId)
    if (isNull(entity)) {
      return Boom.boomify(Boom.notFound())
    }

    return h.response({ message: 'success', entity }).code(200)
  }
}

export { findClaimController }

/**
 * @import { ServerRoute} from '@hapi/hapi'
 * @import { MongoDBPlugin } from '~/src/helpers/mongodb.js'
 */
