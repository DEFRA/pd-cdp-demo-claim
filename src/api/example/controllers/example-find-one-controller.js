import Boom from '@hapi/boom'
import isNull from 'lodash/isNull.js'

import { findExampleData } from '~/src/api/example/helpers/find-example-data.js'

/**
 *
 * @satisfies {Partial<ServerRoute>}
 */
const exampleFindOneController = {
  /**
   * @param { import('@hapi/hapi').Request & MongoDBPlugin } request
   * @param { import('@hapi/hapi').ResponseToolkit } h
   * @returns {Promise<*>}
   */
  handler: async (request, h) => {
    const entity = await findExampleData(request.db, request.params.exampleId)
    if (isNull(entity)) {
      return Boom.boomify(Boom.notFound())
    }

    return h.response({ message: 'success', entity }).code(200)
  }
}

export { exampleFindOneController }

/**
 * @import { ServerRoute} from '@hapi/hapi'
 * @import { MongoDBPlugin } from '~/src/helpers/mongodb.js'
 */
