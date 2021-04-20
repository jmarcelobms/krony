import { Request, Response } from 'express';

function Header(field: string, value?: string | string[]) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (req: Request, res: Response, next: any) {
      res.set(field, value);
      return originalMethod.bind(this)(req, res, next)
    };
  }
}

export { Header }