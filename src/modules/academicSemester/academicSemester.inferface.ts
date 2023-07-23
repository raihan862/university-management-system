import { Model } from 'mongoose';

export type IAcadamicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcedemicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCodes = '01' | '02' | '03';
export interface IAcadamicSemester {
  title: IAcedemicSemesterTitle;
  year: string;
  code: IAcademicSemesterCodes;
  startMonth: IAcadamicSemesterMonths;
  endMonth: IAcadamicSemesterMonths;
}
export type IAcademicSemesterModel = Model<IAcadamicSemester>;
