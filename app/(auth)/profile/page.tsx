import React from 'react'
import Profile from '@/app/components/Profile';
import { getServerSession } from 'next-auth';
import { Button } from '@/app/components/ui/button';
import { authOptions } from "@/lib/auth";
import Link from 'next/link';


interface ProfileProps {
  player: {
    first_name?: string | null;
    username?: string | null;
    bio?: string | null;
    looking_for?: string | null;
    favorite_games?: string | null;
    favorite_device?: string | null;
    image?: string | null;
    player_id?: number;
    instagram?: string | null;
    twitter?: string | null;
    discord?: string | null;
    twitch?: string | null;
    facebook?: string | null;
  };
}


async function ProfilePage() {
    const session = await getServerSession(authOptions);

    if (session?.user) {
  return (
    <div>
    <Profile player={{
        first_name: '',
        username: '',
        bio: '',
        looking_for: '',
        favorite_games: '',
        favorite_device: '',
        image: '',
        player_id: 0,
        instagram: '',
        twitter: '',
        discord: '',
        twitch: '',
        facebook: ''
      }} />
    <br></br>
  
    <div className='flex justify-center'>
    <Button className='outline uppercase text-md text-white bg-indigo-600 w-full -mt-2 ' type="submit">
        <Link href="/edit">Make your profile cooler!</Link>
       </Button>
    </div>
</div>
  )}
  return (
    <div className="mt-32 text-center text-1xl">
    <h2>Hey! 
      <br></br>
      <br></br>
      You need to 
        <Link className='text-blue-500 hover:underline' href= '/login'> login </Link> 
        to see and edit your profile page! </h2>
        </div>
  )
}

export default ProfilePage; 