import mongoose from 'mongoose';
import { IGenericErrorMessages, IGenericErrorResponse } from '../interfaces/error';

export const handleMongooseValidationError = (err: mongoose.Error.ValidationError): IGenericErrorResponse => {
  const errMessages: IGenericErrorMessages[] = Object.values(err.errors).map((item) => {
    return {
      path: item.path,
      message: item.message,
    };
  });
  return {
    message: 'Validation Error',
    errMessages,
    statusCode: 400,
  };
};
