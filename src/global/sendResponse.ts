import { Response } from 'express';

export type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};
const sendResponse = <T>(res: Response, data: ApiResponse<T>) => {
  const newResponse: ApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    meta: data.meta || undefined,
    data: data.data || null,
  };
  res.status(newResponse.statusCode).json(newResponse);
};
export default sendResponse;
