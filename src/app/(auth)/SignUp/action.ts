'use server';

import { prismaDb } from '@/lib/db';
import { type Error, State } from '@/lib/definitions';
import { errorHandler } from '@/lib/utils';
import { signUpValidations } from '@/lib/validations';
import bcrypt from 'bcrypt';

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
    const alreadyExists = await prismaDb.user.findUnique({
      where: {
        email,
      },
    });
    if (alreadyExists) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prismaDb.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
  } catch (error) {
    throw new Error(errorHandler(error as Error));
  }
};
