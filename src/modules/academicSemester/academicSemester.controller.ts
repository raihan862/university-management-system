import { NextFunction, Request, Response } from 'express';
import AcademicSemesterModel from './academicSemester.model';
import { createAcademicSemester, fetchAcademicSemesters } from './academicSemester.service';
import logger from '../../logs/setupLoger';
import catchAsync from '../../global/catchAsync';
import { AppError } from '../../errors/ApplicationError';
import sendResponse from '../../global/sendResponse';
import { IAcadamicSemester } from './academicSemester.inferface';
import { PickProperties } from '../../global/PickProperties';
import { paginationFields } from '../../constants/pagination';

export const createSemester = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  const newSemester = await createAcademicSemester(data);
  sendResponse<IAcadamicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'New Academic Semester Has Been Created Successfully',
    data: newSemester,
  });
});

export const fetchSemester = catchAsync(async (req: Request, res: Response) => {
  console.log('req', req.query);

  const paginationOption = PickProperties(req.query, paginationFields);
  console.log('paginationOption', paginationOption);

  const result = await fetchAcademicSemesters(paginationOption);

  sendResponse<IAcadamicSemester>(res, {
    success: true,
    message: '',
    statusCode: 200,
    meta: result.meta,
    data: result.data,
  });
});

export const academicSemesterHandler = {
  createSemester,
  fetchSemester,
};
