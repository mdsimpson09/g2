// 'use server'

import Link from "next/link";
import { Button } from '../components/ui/button'

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Main() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
  return (
   
    <div>
    
    <div className="flex justify-center items-center bg-indigo-200 p-5 sm:p-10 rounded-xl w-full mt-6">
  <div className="bg-white shadow-md rounded-md overflow-y-auto w-full max-w-none lg:max-w-6xl mx-auto p-6">
    <div className="flex lg:flex-row items-center ">
      <img className="h-44 w-44 md:h-32 md:w-32 lg:h-40 lg:w-40 object-cover rounded-full" src="/logo.png" alt="logo" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 lg:mt-0">Gamer-Date</h1>
    
            </div>
          
    
          <section className="mt-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-center">Hello! Welcome to Gamer Date {session?.user?.username}!</h2>
      <br></br>
      <p className="text-2xl md:text-lg lg:text-xl text-center mb-2">Where gamers meet other gamers.</p>
      <p className="text-xl md:text-lg lg:text-xl text-center mb-8">Find your friends, build your squad!</p>
            <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg text-center">
            
              <p>
                Welcome to Gamer Date, where gamers can connect, play, and build
                meaningful relationships.
              </p>
            <br></br>
              <p>
                Say goodbye to the days where your team is filled with children. 
              </p>
              </div>
            </section>
            <br></br>
           <section>
           <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg text-center">
            
           <p>Check out your profile by clicking the button below</p>
           <p>Be sure to add more to your profile before trying to find other players</p>
           <br></br>
           
    
           <Button ><Link href="/profile">View Profile</Link></Button>
            </div>
           </section>
            </div>
            </div>
            </div>

  )
}
return (
    <main>
    <img  className ='flex flex-col justify-left items-left h-25 w-25' src= "/logo.png" alt="logo"  /> 
    <br></br>
  
    <h1 className='flex flex-col justify-center items-center text-4xl'>Hello! Welcome to Gamer Date!</h1>
    <div className='flex flex-col justify-center items-center'>
<br></br>
<br></br>
    <Button ><Link href="/profile">Login</Link></Button>
    </div>
  </main>
    )
}