import { IAcadamicSemesterMonths, IAcademicSemesterCodes, IAcedemicSemesterTitle } from './academicSemester.inferface';

export const academicSemesterTitle: IAcedemicSemesterTitle[] = ['Autumn', 'Summer', 'Fall'];
export const academicSemesterCodes: IAcademicSemesterCodes[] = ['01', '02', '03'];

export const acdemicSemesterMonths: IAcadamicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const getSemesterCodes: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
