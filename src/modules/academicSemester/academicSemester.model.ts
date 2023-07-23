import { Schema, model } from 'mongoose';
import { IAcadamicSemester, IAcademicSemesterModel } from './academicSemester.inferface';
import { academicSemesterCodes, academicSemesterTitle, acdemicSemesterMonths } from './academicSemester.constant';
import { AppError } from '../../errors/ApplicationError';

const academicSemesterSchema = new Schema<IAcadamicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: acdemicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: acdemicSemesterMonths,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
academicSemesterSchema.pre('save', async function (next) {
  const isExit = await AcademicSemesterModel.findOne({ title: this.title, year: this.year });
  console.log('isExist');
  if (isExit) {
    next(new AppError(409, 'This Semester is already Exist', null));
  }
  next();
});
const AcademicSemesterModel = model('academicSemester', academicSemesterSchema);

export default AcademicSemesterModel;
