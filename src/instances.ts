import fs from 'fs'
import { promisify } from 'util'

const readDir = promisify(fs.readdir)

const instancesController = async (config: Config) => {
  const files = await readDir(config.controllers, 'utf8')
  const instances: Controller[] = []

  for await (const controller of files) {
    const Controller = (await import(`${config.controllers}\\${controller}`)).default
    
    instances.push({
      name: controller.split('.')[0],
      instance: new Controller()
    })
  }

  return instances
}

export default instancesController