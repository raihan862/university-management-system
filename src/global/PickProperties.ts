import { IsPathRequired } from 'mongoose/types/inferschematype';
import { IPaginationgOption } from '../interfaces/pagination';
import { paginationFields } from '../constants/pagination';

export const PickProperties = <T extends Record<string, unknown>, K extends keyof T>(
  data: T,
  keys: K[],
): Partial<T> => {
  const newObj: Partial<T> = {};
  keys.forEach((key) => {
    if (data && Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
      newObj[key] = data[key];
    }
  });
  return newObj;
};
