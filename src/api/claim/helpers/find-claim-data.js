/**
 * Finds and returns a single claim record from mongodb.
 * See src/server/helpers/mongodb.js for an claim of how the indexes are created for this collection.
 * @param { import('mongodb').Db } db
 * @param { string } id
 * @returns {Promise<{}|null>}
 */
async function findClaimData(db, id) {
  return await db
    .collection('claim-data')
    .findOne({ claimId: id }, { projection: { _id: 0 } })
}

export { findClaimData }
