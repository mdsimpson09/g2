import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session || !session.user) {
      console.log('No session or user found');
      return new NextResponse(JSON.stringify({ message: 'Authentication required' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const playerId = session.user.id;
    console.log('Player ID:', playerId);

    const matchesAsPlayer1 = await prisma.matchedProfile.findMany({
      where: { player_id_1: Number(playerId) },
      include: { player2: true },
    });

    const matchesAsPlayer2 = await prisma.matchedProfile.findMany({
      where: { player_id_2: Number(playerId) },
      include: { player1: true },
    });

    const combinedMatches = [
      ...matchesAsPlayer1.map((match) => match.player2.player_id),
      ...matchesAsPlayer2.map((match) => match.player1.player_id),
    ];

    console.log('Combined Matches:', combinedMatches);

    if (!combinedMatches.length) {
      console.log('No matches found for the user');
    }

    return new NextResponse(JSON.stringify({ matches: combinedMatches }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching matches:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal server error', error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}


//app/api/matches/route.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { NextRequest, NextResponse } from 'next/server';
// import { getServerSession } from 'next-auth';
// import { getSession } from 'next-auth/react';
// import { PrismaClient } from '@prisma/client';
// import { authOptions } from '@/lib/auth';

// const prisma = new PrismaClient();

// export async function GET(req: NextRequest, res: NextResponse){
//   try {
//     const session = await getServerSession(authOptions);
//      console.log('Session:', session);
 
//      if (!session?.user) {
//          console.log('No session');
//        return NextResponse.json(
//          { message: 'Authentication required' },
//          { status: 401 }
//        );
//      }
//      const playerId = session?.user?.id;
//     //  console.log('playerId:', playerId)

//      // Fetch matched profiles where the current user is player_id_1
//      const matchesAsPlayer1 = await prisma.matchedProfile.findMany({
//        where: { player_id_1: Number(playerId) },
//        include: { player2: true }
//      });
 
//      // Fetch matched profiles where the current user is player_id_2
//      const matchesAsPlayer2 = await prisma.matchedProfile.findMany({
//        where: { player_id_2: Number(playerId) },
//        include: { player1: true }
//      });
//      const combinedMatches = [
//       ...matchesAsPlayer1.map(match => match.player2.player_id),
//       ...matchesAsPlayer2.map(match => match.player1.player_id),
//     ]; 

//     // console.log('Matches from DB:', combinedMatches);
//     return NextResponse.json({ matches: combinedMatches });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ message: 'Internal server error', error });
//   }
// }

