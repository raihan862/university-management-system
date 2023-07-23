import logger from '../../logs/setupLoger';
import { IUser } from './user.interface';
import { UserModel } from './user.model';
import { v4 as uuidv4 } from 'uuid';
const createUser = async (data: IUser): Promise<IUser | null> => {
  const userId = await generateUserId();
  const password = uuidv4() + '-' + Date.now();
  const userObject = {
    ...data,
    id: userId,
    password,
  };
  logger.info('User', userObject);
  const newUser = new UserModel(userObject);
  return newUser.save();
};
const generateUserId = async () => {
  const lastUserId = await UserModel.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  console.log('lastUserId', lastUserId);
  let id = '';
  if (!lastUserId?.id) {
    id = '00001';
  } else {
    id = String(parseInt(lastUserId.id) + 1);
  }
  return id.padStart(5, '0');
};
export const UserService = {
  createUser,
};
