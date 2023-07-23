import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AppError } from '../errors/ApplicationError';

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
export default catchAsync;
