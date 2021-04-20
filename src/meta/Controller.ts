
function Controller(value: string) {
  return function (constructor: any) {
    constructor.prototype.URLDECORATOR = value;
  }
}

export {
  Controller
}