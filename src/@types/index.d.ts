export { }

declare global {
  type Config = {
    controllers: string,
    logger: boolean
  }

  type Controller = {
    name: string,
    instance: any
  }
}
