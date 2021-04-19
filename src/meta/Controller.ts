
function Controller(value: string) {
  return function (constructor) {
    constructor.prototype.url = value;
  }
}

export {
  Controller
}