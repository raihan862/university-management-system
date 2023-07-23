export class AppError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string, stack: string | undefined | null) {
    super(message);

    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
