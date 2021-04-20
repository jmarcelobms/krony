import fs from 'fs'
import { promisify } from 'util'

const readDir = promisify(fs.readdir)

const controllerInstances = async (config: Config) => {
  const files = await readDir(config.controllers, 'utf8')
  const instances: Controller[] = []

  for await (const file of files) {
    const Controller  = (await import(`${config.controllers}\\${file}`)).default

    instances.push({
      name: file.split('.')[0],
      instance: new Controller()
    })
  }

  return instances
}

export default controllerInstances