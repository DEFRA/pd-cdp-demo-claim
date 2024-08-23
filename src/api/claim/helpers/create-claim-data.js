async function createClaimData(db, data) {
  const result = await db.collection('claim-data').insertOne(data)

  return result
}

export { createClaimData }
