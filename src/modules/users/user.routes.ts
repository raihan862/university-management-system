import express from 'express';
import UserController from './user.controller';
import UserValidationSchema from './user.validation';
import { validateRequest } from '../../middlewares/validateRequest';
const userRouter = express.Router();

userRouter.post(
  '/create-user',
  validateRequest(UserValidationSchema.CreateUserValidationSchema),
  UserController.createUserHandler,
);
export default userRouter;
