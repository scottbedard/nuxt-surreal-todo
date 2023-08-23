import Surreal from 'surrealdb.js'

export const db = new class {
  private db

  private ready = false

  constructor() {
    this.db = new Surreal('http://surrealdb:8000/rpc')
  }

  async create<T extends Record<string, unknown>, U extends Record<string, unknown> = T>(thing: string, data?: U) {
    if (!this.ready) {
      await this.init()
    }

    return await this.db.create<T, U>(thing, data)
  }

  async delete<T extends Record<string, unknown> = Record<string, unknown>>(thing: string) {
    if (!this.ready) {
      await this.init()
    }

    return await this.db.delete<T>(thing)
  }

  async init() {
    await this.db.signin({
      user: 'root',
      pass: 'root',
    })

    await this.db.use({ ns: 'test', db: 'test' })
    
    this.ready = true
  }

  async select<T extends Record<string, unknown>>(thing: string) {
    if (!this.ready) {
      await this.init()
    }

    return await this.db.select<T>(thing)
  }
}
