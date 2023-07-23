import express from 'express';
import userRouter from '../modules/users/user.routes';
import SemesterRoute from '../modules/academicSemester/academicSemester.route';
import app from '../app';
const AppRouter = express.Router();
const allRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/academic-semester',
    route: SemesterRoute,
  },
];

allRoutes.forEach((item) => {
  AppRouter.use(item.path, item.route);
});
export default AppRouter;
