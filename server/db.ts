import Surreal from 'surrealdb.js'

export const db = new class {
  private db

  private ready = false

  constructor() {
    this.db = new Surreal('http://surrealdb:8000/rpc')
  }

  async delete(...args: Parameters<Surreal['delete']>) {
    if (!this.ready) {
      await this.init()
    }

    return this.db.delete(...args)
  }

  async init() {
    await this.db.signin({
      user: 'root',
      pass: 'root',
    })

    await this.db.use({ ns: 'test', db: 'test' })
    
    this.ready = true
  }

  async select<T extends Record<string, unknown>>(...args: Parameters<Surreal['select']>) {
    if (!this.ready) {
      await this.init()
    }

    return this.db.select<T>(...args)
  }
}
