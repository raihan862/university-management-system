import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './modules/users/user.routes';
import logger from './logs/setupLoger';
import CustomErrorHandler from './middlewares/customErrorMiddleware';
import SemesterRoute from './modules/academicSemester/academicSemester.route';
import AppRouter from './Routes';
import sendResponse from './global/sendResponse';
const app: Application = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', AppRouter);

app.get('/', (req, res) => {
  // Promise.reject(new Error('Unhandle Rejection'));
  // console.log(x);

  sendResponse<null>(res, {
    statusCode: 200,
    success: true,
    message: 'Application is Running',
  });
});
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    path: req.originalUrl,
    message: 'Path Not Found',
  });
});
app.use(CustomErrorHandler);
export default app;
