import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" });
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ message: "Authentication required" });
    }

    // Fix: Access correct user property
    const currentPlayerId = Number(session.user.id);

    const body = await req.json();
    const { disliked_player_id } = body;
    const dislikedPlayerId = Number(disliked_player_id);

    // Check if the player is trying to dislike themselves
    if (disliked_player_id === currentPlayerId) {
      return NextResponse.json({ message: "You cannot dislike yourself" });
    }

    // Check if the dislike relationship already exists
    const existingDislike = await prisma.dislikedProfile.findUnique({
      where: {
        player_id_disliked_player_id: {
          player_id: currentPlayerId,
          disliked_player_id: disliked_player_id,
        },
      },
      
    });

    if (existingDislike) {
      return NextResponse.json({
        message: "You have already disliked this player",
      });
    }

    // Create the dislike relationship
    await prisma.dislikedProfile.create({
      data: {
        player_id: currentPlayerId,
        disliked_player_id,
      },
    });
    console.log(`Player ${currentPlayerId} successfully disliked player ${dislikedPlayerId}`);
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}


