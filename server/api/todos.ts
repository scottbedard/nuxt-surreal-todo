import Surreal from 'surrealdb.js'

export default defineEventHandler(async () => {
  try {
    const db = new Surreal('http://surrealdb:8000/rpc')

    await db.signin({
      user: 'root',
      pass: 'root',
    })

    await db.use({ ns: 'test', db: 'test' })

    const data = await db.query("SELECT * FROM todos")

    return { data }
  } catch (e) {
    return { status: 'failed' }
  }
})
