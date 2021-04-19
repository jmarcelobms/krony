import { Express } from 'express'

class Logger {
  init(server: Express) {
    const [, , ...args] = process.argv

    if (args.includes('--log')) {
      server = this.log(server)
    }

    if (args.includes('--list')) {
      this.list(server._router.stack)
    }

    return server
  }

  private log(server: Express) {
    server.use((req, res, next) => {
      console.info(`${req.method} > ${req.url}`);
      next()
    })

    const stacks = server._router.stack
    const lasStack = stacks[stacks.length - 1]
    server._router.stack = [lasStack, ...server._router.stack]
    return server
  }
  
  private list(stack: any[]) {
    const routes = stack
      .map((route) => {
        if (route.route && route.route.path) {
          return {
            method: Object.keys(route.route.methods)[0].toUpperCase(),
            path: route.route.path,
          }
        }
      }).filter(v => v != undefined)

    console.table(routes)
  }
}

export default new Logger()