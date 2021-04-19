class Cache {
  public cache: Map<string, string>
  constructor() {
    this.cache = new Map<string, string>()
  }
}

export default new Cache()