import { Model } from 'mongoose';

export interface IUser {
  id: string;
  role: string;
  password: string;
}

export interface IUserMethods {
  test(): string;
}
export interface IUserModel extends Model<IUser, Record<string, unknown>, IUserMethods> {
  demoFunction(name: string): string;
}
