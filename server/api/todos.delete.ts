import Surreal from 'surrealdb.js'
import { Todo } from '../../types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const db = new Surreal('http://surrealdb:8000/rpc')

    await db.signin({
      user: 'root',
      pass: 'root',
    })

    await db.use({ ns: 'test', db: 'test' })

    await db.delete(body.id)

    const todos = await db.select<Todo>('todos')

    return {
      status: 'success',
      todos,
    }
  } catch (e) {
    return {
      status: 'failed',
      todos: [],
    }
  }
})
