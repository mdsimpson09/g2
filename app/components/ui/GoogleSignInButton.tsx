
import React from 'react'
import { Button } from './button'
import { FC, ReactNode } from 'react'
import { signIn } from 'next-auth/react';


interface GoogleSignInButtonProps{
    children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps>= ({ children }) => {
  const logInWithGoogle = () => signIn('google',{callbackUrl: 'http://localhost:3001/admin'});
  return (
    
  <Button onClick= {logInWithGoogle} className= " text-white uppercase text-md w-full bg-blue-700 ring-2 ring-indigo-400">
    {children}
  </Button>

  )
  
}

export default GoogleSignInButton;
