import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/ApplicationError';
import config from '../config';
import { IGenericErrorMessages, IGenericErrorResponse } from '../interfaces/error';
import { handleMongooseValidationError } from '../errors/handleMongooseValidationError';
import { ZodError } from 'zod';
import { handleZodValidationError } from '../errors/handleZodValidationError';

const CustomErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let message = 'Something went wrong!';
  let errMessages: IGenericErrorMessages[] = [];
  let statusCode = 500;
  // console.log('err', err);

  if (err?.name === 'ValidationError') {
    const simplifiedResponse: IGenericErrorResponse = handleMongooseValidationError(err);
    message = simplifiedResponse.message;
    errMessages = simplifiedResponse.errMessages;
    statusCode = simplifiedResponse.statusCode;
  } else if (err instanceof ZodError) {
    const simplifiedResponse: IGenericErrorResponse = handleZodValidationError(err);
    message = simplifiedResponse.message;
    errMessages = simplifiedResponse.errMessages;
    statusCode = simplifiedResponse.statusCode;
  } else if (err instanceof AppError) {
    message = err.message;
    statusCode = err.statusCode;
    errMessages = err.message ? [{ path: '', message: err.message }] : [];
  } else if (err instanceof Error) {
    message = err.message;

    errMessages = err.message ? [{ path: '', message: err.message }] : [];
  }
  const response = {
    success: false,
    message,
    errMessages,
    stack: config.env === 'production' ? null : err.stack,
  };
  res.status(statusCode).json(response);
};
export default CustomErrorHandler;
