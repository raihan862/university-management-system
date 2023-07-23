export interface IGenericErrorMessages {
  path: string | number;
  message: string;
}
export interface IGenericErrorResponse {
  message: string;
  errMessages: IGenericErrorMessages[];
  statusCode: number;
}

