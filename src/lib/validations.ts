import { z } from 'zod';

export const signUpValidations = z.object({
  name: z.string().min(1, 'Enter your name'),
  email: z.string().min(1, 'Enter your Email').email('Enter a valid email'),
  password: z.string().min(5, 'Password must be above 5 characters'),
});
