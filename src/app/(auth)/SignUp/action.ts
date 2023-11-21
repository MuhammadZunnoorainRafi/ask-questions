'use server';

import { State } from '@/lib/definitions';
import { signUpValidations } from '@/lib/validations';

export const signUpAction = async (prevState: State, formData: FormData) => {
  const validateFields = signUpValidations.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Something went wrong',
    };
  }
};
