// import React from 'react'
// import Profile from '@/app/components/Profile';
// import { getServerSession } from 'next-auth';
// import { Button } from '@/app/components/ui/button';
// import { authOptions } from "@/lib/auth";
// import Link from 'next/link';




// interface ProfileProps {
//   player: {
//     first_name?: string | null;
//     username?: string | null;
//     bio?: string | null;
//     looking_for?: string | null;
//     favorite_games?: string | null;
//     favorite_device?: string | null;
//     image?: string | null;
//     player_id?: number;
//     instagram?: string | null;
//     twitter?: string | null;
//     discord?: string | null;
//     twitch?: string | null;
//     facebook?: string | null;
//   };
// }


// async function ProfilePage() {
//     const session = await getServerSession(authOptions);

//     if (session?.user) {
//   return (
//     <div>
//     <Profile player={{
//         first_name: '',
//         username: '',
//         bio: '',
//         looking_for: '',
//         favorite_games: '',
//         favorite_device: '',
//         image: '',
//         player_id: 0,
//         instagram: '',
//         twitter: '',
//         discord: '',
//         twitch: '',
//         facebook: ''
//       }} />
//     <br></br>
  
//     <div className='flex justify-center'>
//     <Button className='outline uppercase text-md text-white bg-indigo-600 w-full -mt-2 ' type="submit">
//         <Link href="/edit">Make your profile cooler!</Link>
//        </Button>
//     </div>
// </div>
//   )}
//   return (
//     <div className="mt-32 text-center text-1xl">
//     <h2>Hey! 
//       <br></br>
//       <br></br>
//       You need to 
//         <Link className='text-blue-500 hover:underline' href= '/login'> login </Link> 
//         to see and edit your profile page! </h2>
//         </div>
//   )
// }

// export default ProfilePage; 

// import React from 'react'
// import Profile from '@/app/components/Profile';
// import { getServerSession } from 'next-auth';
// import { Button } from '@/app/components/ui/button';
// import { authOptions } from "@/lib/auth";
// import Link from 'next/link';

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

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#7b5bc7] to-[#ea388d] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
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
          <div className="px-6 py-4 bg-gray-900">
            <Button className="w-full bg-gradient-to-r from-[#ff3d63] to-[#f88b4b] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase transition-transform hover:scale-105" type="submit">
              <Link href="/meet">Find Players</Link>
            </Button>
            <p>
            <Link 
                href="/edit" 
                className="flex justify-center mt-2 font-semibold bg-gradient-to-r from-[rgb(123,91,199)] to-[#41fa56] bg-clip-text text-transparent hover:underline hover:text-lg transition-all duration-300"
              >
                Edit Profile
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7b5bc7] to-[#ea388d] px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Access Denied</h2>
        <p className="text-gray-600 text-center mb-8">You need to log in to view and edit your profile.</p>
        <Button className="w-full bg-gradient-to-r from-[#ff3d63] to-[#f88b4b] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase transition-transform hover:scale-105">
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </div>
  )
}

 
