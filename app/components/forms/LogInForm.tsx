'use client';
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link';
import  GoogleSignInButton  from '../ui/GoogleSignInButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';





const FormSchema = z.object({
  email: z.string().min(2, 'Email is required').email('Invalid Email'),
  password: z.string().min(1, 'Passowrd is required').min(8, 'Password must have 8 characters'),
})

const LogInForm = () => {

  

  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

   async function onSubmit(values:z.infer<typeof FormSchema>) {
    const signInData = await signIn('credentials',{
      email: values.email, 
      password: values.password,
      redirect:false,
    });

    console.log(signInData);

    if(signInData?.error){
      toast({
        title: "Error",
        description: "Oops! Something went wrong!",
        variant: "destructive",
      })      
      return;
    } 
    else {
       
        router.push('/');
        router.refresh()
    }
  }

  return (
    <div className='flex justify-center items-center bg-indigo-200 p-10 rounded-xl min-w-7 w-[475px] h-[650px] mt-8'>
    <div className='max-w-3xl py-6 px-6 bg-white shadow-md rounded-md my-8 w-[375px] h-[550px] overflow-y-auto hide-scrollbar'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
       <div className= 'space-y-2'>
 
       <FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <input 
          className='border-0 border-b border-indigo-500 focus:border-b-2 focus:outline-none w-full py-1' 
          placeholder="" 
          {...field} 
        />
      </FormControl>
      <FormLabel className="text-md mt-2 block">Email:</FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <input 
          type="password"
          className='border-0 border-b border-indigo-500 focus:border-b-2 focus:outline-none w-full py-1' 
          placeholder="" 
          {...field} 
        />
      </FormControl>
      <FormLabel className="text-md mt-2 block">Password:</FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>
        <br></br>
      </div>
      <Button className='outline uppercase text-md text-white bg-indigo-600 w-full mt-2' type="submit">Login</Button>
     
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:bloack after:h-px after:flex-grow after:bg-stone-400'>
       or
      </div>
      <GoogleSignInButton>Login with Google</GoogleSignInButton>
    <p className= "text-center text-sm text-gray-600 mt-2">
          If you don&apos;t have an account, please&nbsp; 
          <Link className='text-blue-500 hover:underline' href= '/sign-up'>Sign up</Link>.
    </p>
    </Form>
    </div>
    </div>
  );
};
export default LogInForm