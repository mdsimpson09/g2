//app/matches/page.tsx
import React from 'react'
import Matches from '@/app/components/matching';
import { getServerSession } from 'next-auth';
import 'next-auth';
import { authOptions } from "@/lib/auth";
import Link from 'next/link';


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
      <div>
      
        <Matches player_id={player_id} />
      </div>
    );
  }
  return (
    <h2 className="mt-24">
      Please
      <Link className="text-blue-500 hover:underline" href="/login">
        {" "}
        login{" "}
      </Link>
      to see other players!
    </h2>
  );
}

export default MatchPage; 