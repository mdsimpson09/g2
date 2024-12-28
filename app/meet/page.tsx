import React from 'react'
import Meet from '../components/Meet';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
import Link from 'next/link';


async function MeetPage() {
    const session = await getServerSession(authOptions);

    if (session?.user) {
  return (
    <div >
      <div className="mt-6">
      <Meet />
      </div>
    <div>
      
    </div>

    </div>
  )}
  return (
    <h2 className="mt-24">Please 
        <Link className='text-blue-500 hover:underline' href= '/login'> login </Link> 
        to see other players!  </h2>
  )
}

export default MeetPage; 