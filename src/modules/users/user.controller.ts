import { RequestHandler } from 'express';

import logger from '../../logs/setupLoger';
import { AppError } from '../../errors/ApplicationError';
import { UserService } from './user.service';
import { z } from 'zod';
import sendResponse from '../../global/sendResponse';
import { IUser } from './user.interface';
import catchAsync from '../../global/catchAsync';
const createUserHandler = catchAsync(async (req, res, next) => {
  const { user } = req.body;
  const userData = await UserService.createUser(user);
  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: userData,
  });
});

const UserController = {
  createUserHandler,
};
export default UserController;
