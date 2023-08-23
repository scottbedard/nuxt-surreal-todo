import { db } from '@/server/db'
import { Todo } from '@/app/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const [todo] = await db.create<Todo, Pick<Todo, 'description'>>('todos', {
      description: body.description,
    })

    return {
      status: 'success',
      todo,
    }
  } catch (e) {
    return {
      status: 'failed',
      todo: null,
    }
  }
})
