import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type Error } from './definitions';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const errorHandler = (error: Error) => {
  return error?.response?.data?.message || error?.message;
};
