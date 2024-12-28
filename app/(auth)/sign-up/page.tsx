import React from 'react';
import SignUpForm from '@/app/components/forms/SignUpForm';
import { authOptions } from "@/lib/auth";
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import UserAccountNav from "@/app/components/UserAccountNav";

async function signup() {
  const session = await getServerSession(authOptions);


  if (session?.user) {
return (
  <div className="mt-28">
 <p>You are already logged in!</p>
  <br></br>

  <div className='flex justify-center'>
  {session?.user ? (
            <UserAccountNav />
          ) : (
            <Link href='/login'><span className='btn block text-right mt-2 md:mt-0 cursor-pointer'>Login</span></Link>
          )}
  </div>
</div>
)}
return (
  <div>
       <SignUpForm />
    </div>
 
)
}

export default signup; 