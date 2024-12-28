//profile/meetcontrols
import React, { useState, useEffect } from 'react'
import ExitIcon from '@mui/icons-material/ExitToAppOutlined';
import { IconButton } from '@mui/material';
import DislikeButton from './dislike-button';
import LikeButton from './like-button';
import Link from 'next/link';


interface MeetProps {
  player: {
    player_id: number | null;
    first_name: string | null;
    username: string | null;
    bio: string | null;
    looking_for: string | null;
    image: string | null;
    instagram?: string | null;
    twitter?: string | null;
    discord?: string | null;
    twitch?: string | null;
    facebook?: string | null;
  } | null;

  toggleRefresh: () => void;
}
const MeetControls: React.FC<MeetProps> = ({ player, toggleRefresh }) => {
  if (!player) {
    return null;
  }

return (
<div className="">

  <div className="flex justify-center items-center -mt-14 py-2 space-x-4 sm:space-x-3 md:space-x-4 lg:space-x-6">
    <div
      onClick={toggleRefresh}
      className="outline-white font-bold text-2xl sm:text-2xl md:text-3xl rounded-full bg-red-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 hover:bg-red-600 focus:outline-none focus:ring-opacity-50 shadow-xl flex items-center justify-center ring-1 ring-red-300"
    >
      <DislikeButton playerIdToDislike={player?.player_id} />
    </div>

    <div className="font-bold text-xl sm:text-xl md:text-2xl rounded-full bg-blue-400 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white hover:bg-blue-500 focus:outline-none focus:ring-opacity-50 shadow-xl flex items-center justify-center ring-1 ring-blue-300 lg:w-24 lg:h-24">
      <Link href="/">
        <IconButton>
          <ExitIcon className="text-gray-50" />
        </IconButton>
      </Link>
    </div>

    <div
      onClick={toggleRefresh}
      className="font-bold text-xl sm:text-2xl md:text-3xl rounded-full bg-green-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 hover:bg-green-600 focus:outline-none focus:ring-opacity-50 shadow-xl flex items-center justify-center ring-1 ring-green-400 lg:w-28 lg:h-28"
    >
      <LikeButton playerIdTolike={player?.player_id} />
    </div>
  </div>
</div>
);
}
export default MeetControls;