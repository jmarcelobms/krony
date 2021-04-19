import { Express } from 'express'
import Instances from './instances'
import Routes from './routes'
import Logger from './providers/Logger'

class Core {
  private config: Config
  constructor(_config: Config = null) {

    if (_config === null) {
      throw new Error('Configuração passada inválida.')
    }

    this.config = _config
  }

  async init(server: Express) {
    const instances = await Instances(this.config)

    Routes.serverRoutes(instances, server)

      if (process.argv.length > 2)
      Logger.init(server)

    return server
  }
}

export default Core