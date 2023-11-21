'use server';

import { prismaDb } from '@/lib/db';
import { type Error, State } from '@/lib/definitions';
import { errorHandler } from '@/lib/utils';
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

  const { name, email, password } = validateFields.data;

  try {
    const alreadyExists = await prismaDb.user.f;
    const newUser = await prismaDb.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  } catch (error) {
    throw new Error(errorHandler(error as Error));
  }
};
