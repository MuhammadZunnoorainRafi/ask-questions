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
import React from 'react';
import Link from 'next/link';

function SignIn() {
  return (
    <Card className="w-[350px] mt-14">
      <CardHeader>
        <CardTitle className="text-center">Sign In User</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 justify-center">
        <Button type="submit">Sign In</Button>
        <div className="flex items-center text-sm gap-1">
          <p>Don&apos;t have an account?</p>
          <Link href="/signUp" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
