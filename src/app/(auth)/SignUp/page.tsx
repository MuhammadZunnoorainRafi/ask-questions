'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { signUpAction } from './action';

function SignUp() {
  const initialState = {
    errors: {},
    message: null,
  };
  const [state, dispatch] = useFormState(signUpAction, initialState);
  return (
    <Card className="w-[350px] mt-14">
      <CardHeader>
        <CardTitle className="text-center">Sign Up User</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={dispatch}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter your name" />
              {state?.errors.name?.map((val) => (
                <p key={val} className="text-red-500 text-sm">
                  {val}
                </p>
              ))}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Enter your email" />
              {state?.errors.email?.map((val) => (
                <p key={val} className="text-red-500 text-sm">
                  {val}
                </p>
              ))}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              {state?.errors.password?.map((val) => (
                <p key={val} className="text-red-500 text-sm">
                  {val}
                </p>
              ))}
            </div>
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 justify-center">
        <div className="flex items-center text-sm gap-1">
          <p>Already have an account?</p>
          <Link href="/signIn" className="text-blue-500 hover:text-blue-700">
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignUp;
