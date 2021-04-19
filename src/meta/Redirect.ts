import { Request, Response } from 'express';

function Redirect(url: string, statusCode: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    descriptor.value = function (req: Request, res: Response) {
      return res.status(statusCode).redirect(url);
    };
  }
}

export { Redirect }