import { Express } from 'express'
import controllerInstances from './controllers'
import Routes from './routes'
import Logger from './providers/Logger'

async function Core(config: Config = null) {
  const instances = await controllerInstances(config)

  const init = (server: Express) => {
    Routes.serverRoutes(instances, server)

    if (process.argv.length > 2)
      Logger.init(server)

    return server
  }

  return { init }
}

export { Core }