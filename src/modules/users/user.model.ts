import { Model, Schema } from 'mongoose';
import { IUser, IUserMethods, IUserModel } from './user.interface';
import { model } from 'mongoose';

const userSchema = new Schema<IUser, IUserModel, IUserMethods>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);
export const UserModel = model<IUser, IUserModel>('Users', userSchema);
