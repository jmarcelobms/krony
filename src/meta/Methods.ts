import Routes from '../routes'

function GET(path: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`GET - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function POST(path: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`POST - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function PUT(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`PUT - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function DELETE(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`DELETE - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function HEAD(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`HEAD - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function CONNECT(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`CONNECT - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function OPTIONS(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`OPTIONS - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function TRACE(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`TRACE - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function PATCH(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`PATCH - ${path}`, `${target.constructor.name}.${key}`)
  }
}

function ALL(path: string, handler: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Routes.set(`ALL - ${path}`, `${target.constructor.name}.${key}`)
  }
}

export { GET, POST, PUT, DELETE, TRACE, HEAD, ALL, OPTIONS, PATCH, CONNECT }