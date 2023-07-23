import { Request } from 'express';
import { z } from 'zod';

const CreateUserValidationSchema = z.object({
  body: z.object({
    user: z.object({
      role: z.string({ required_error: 'Role is Requried', invalid_type_error: 'Invalid Input' }),
      password: z.string({ invalid_type_error: 'Invalid Input' }).optional(),
    }),
  }),
});
const UserValidationSchema = { CreateUserValidationSchema };
export default UserValidationSchema;
