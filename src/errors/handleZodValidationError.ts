import { ZodError } from 'zod';
import { IGenericErrorMessages, IGenericErrorResponse } from '../interfaces/error';

export const handleZodValidationError = (err: ZodError): IGenericErrorResponse => {
  console.log('err', err);

  const errMessages: IGenericErrorMessages[] = err.issues.map((issue) => {
    console.log('path', issue.path);

    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  return {
    message: 'Validation Error',
    errMessages,
    statusCode: 400,
  };
};
