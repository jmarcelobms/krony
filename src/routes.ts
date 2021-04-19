import { Express } from 'express'

class Routes {
  public routes: Map<string, string>
  constructor() {
    this.routes = new Map<string, string>()
  }

  set(key: string, handler: string) {
    if (this.routes.has(key)) {
      console.error(`key: ${key} = handler: ${handler}`)
      throw new Error('Já tem essa rota adicionada')
    }

    this.routes.set(key, handler)
  }

  get(path: string, handler: string) {
    this.set(`GET - ${path}`, handler)
  }

  post(path: string, handler: string) {
    this.set(`POST - ${path}`, handler)
  }

  put(path: string, handler: string) {
    this.set(`PUT - ${path}`, handler)
  }

  delete(path: string, handler: string) {
    this.set(`PUT - ${path}`, handler)
  }
  
  head(path: string, handler: string) {
    this.set(`HEAD - ${path}`, handler)
  }

  connect(path: string, handler: string) {
    this.set(`CONNECT - ${path}`, handler)
  }

  options(path: string, handler: string) {
    this.set(`OPTIONS - ${path}`, handler)
  }

  trace(path: string, handler: string) {
    this.set(`TRACE - ${path}`, handler)
  }

  patch(path: string, handler: string) {
    this.set(`PATCH - ${path}`, handler)
  }
  
  all(path: string, handler: string) {
    this.set(`ALL - ${path}`, handler)
  }

  serverRoutes(instances: Controller[], server: Express) {
    this.routes.forEach((value, key) => {
      const [method, path] = key.split('-').map(v => v.trim())
      const [Class, MethodClass] = value.split('.').map(v => v.trim())
      const controller = instances.find(v => v.name === Class)
      if (controller && MethodClass in controller.instance) {
        const pathResolve = controller.instance.url === '/' ? '' : controller.instance.url
        server[method.toLowerCase()](`${pathResolve}${path}`, controller.instance[MethodClass])
      }
    })
  }
}

export default new Routes()