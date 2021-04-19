import Routes from '../routes'

function GET(path: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.get(path, `${target.constructor.name}.${key}`)
  }
}

function POST(path: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.post(path, `${target.constructor.name}.${key}`)
  }
}

function PUT(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.put(path, `${target.constructor.name}.${key}`)
  }
}

function DELETE(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.delete(path, `${target.constructor.name}.${key}`)
  }
}

function HEAD(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.head(path, `${target.constructor.name}.${key}`)
  }
}

function CONNECT(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.connect(path, `${target.constructor.name}.${key}`)
  }
}

function OPTIONS(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.options(path, `${target.constructor.name}.${key}`)
  }
}

function TRACE(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.trace(path, `${target.constructor.name}.${key}`)
  }
}

function PATCH(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.patch(path, `${target.constructor.name}.${key}`)
  }
}

function ALL(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.all(path, `${target.constructor.name}.${key}`)
  }
}

export { GET, POST, PUT, DELETE, TRACE, HEAD, ALL, OPTIONS, PATCH, CONNECT }