import { db } from '@/server/db'
import { Todo } from '@/app/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
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
