import { AppError } from '../../errors/ApplicationError';
import { IApiResponse } from '../../global/sendResponse';
import { calculatePagination } from '../../helper/paginationHelper';
import { IGenericResponse } from '../../interfaces/common';

import { IPaginationgOption } from '../../interfaces/pagination';
import { getSemesterCodes } from './academicSemester.constant';
import { IAcadamicSemester } from './academicSemester.inferface';
import AcademicSemesterModel from './academicSemester.model';
import { SortOrder } from 'mongoose';
export const createAcademicSemester = (data: IAcadamicSemester) => {
  const isValidSemester = getSemesterCodes[data.title] === data.code;
  if (!isValidSemester) throw new AppError(400, 'Semester Title And Code Dose Not Match', null);
  const newSemester = new AcademicSemesterModel(data);
  return newSemester.save();
};

export const fetchAcademicSemesters = async (
  paginationOption: Partial<IPaginationgOption>,
): Promise<IGenericResponse<IAcadamicSemester[]>> => {
  const { page, skip, limit, sortBy, sortOrder } = calculatePagination(paginationOption);
  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const data: IAcadamicSemester[] = await AcademicSemesterModel.find({}).sort(sortCondition).skip(skip).limit(limit);
  const total = await AcademicSemesterModel.count();
  return {
    data,
    meta: {
      page,
      limit,
      total,
    },
  };
};
