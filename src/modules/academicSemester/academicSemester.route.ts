import express from 'express';
import { academicSemesterHandler } from './academicSemester.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { SemesterValiationSchema } from './academicSemester.validation';
const SemesterRoute = express.Router();
SemesterRoute.post(
  '/create-semester',
  validateRequest(SemesterValiationSchema.createSemesterValiation),
  academicSemesterHandler.createSemester,
);
SemesterRoute.get('/', academicSemesterHandler.fetchSemester);
export default SemesterRoute;
