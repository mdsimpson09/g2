// //app/matches/page.tsx
// import React from 'react'
// import Matches from '@/app/components/matching';
// import { getServerSession } from 'next-auth';
// import 'next-auth';
// import { authOptions } from "@/lib/auth";
// import Link from 'next/link';


// interface CustomUser {
//   id: string | number;
//   name?: string;
//   email?: string;
//   image?: string;
//   username?: string;
// }

// async function MatchPage() {
//   const session = await getServerSession(authOptions);
 
//   const player_id = (session?.user as CustomUser)?.id as number;
//   const username = (session?.user as CustomUser)?.username;
//   if (session?.user) {
//     return (
//       <div>
      
//         <Matches player_id={player_id} />
//       </div>
//     );
//   }
//   return (
//     <h2 className="mt-24">
//       Please
//       <Link className="text-blue-500 hover:underline" href="/login">
//         {" "}
//         login{" "}
//       </Link>
//       to see other players!
//     </h2>
//   );
// }

// export default MatchPage; 

import React from 'react';
import Matches from '@/app/components/matching';
import { getServerSession } from 'next-auth';
import 'next-auth';
import { authOptions } from "@/lib/auth";
import Link from 'next/link';
import { SlGameController } from 'react-icons/sl';

interface CustomUser {
  id: string | number;
  name?: string;
  email?: string;
  image?: string;
  username?: string;
}

async function MatchPage() {
  const session = await getServerSession(authOptions);

  const player_id = (session?.user as CustomUser)?.id as number;
  const username = (session?.user as CustomUser)?.username;

  if (session?.user) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center">
             {username || 'Player'}
          </h1>
          <p className="text-gray-300 text-center mt-2">
         
          </p>
          <div className="mt-8">
            <Matches player_id={player_id} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-300">
          Please{' '}
          <Link className="text-pink-400 hover:underline" href="/login">
            login
          </Link>{' '}
          to see your matches!
        </h2>
        <SlGameController className="text-indigo-400 text-6xl mt-4" />
      </div>
    </div>
  );
}

export default MatchPage;
