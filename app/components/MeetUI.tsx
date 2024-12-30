// //app/components/meetui
// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useSession } from 'next-auth/react'
// import HeartIcon from '@mui/icons-material/FavoriteOutlined';
// import HateIcon from '@mui/icons-material/CloseOutlined';
// import ExitIcon from '@mui/icons-material/ExitToAppOutlined';
// import RedoIcon from '@mui/icons-material/ReplayOutlined';
// import { Icon, IconButton } from '@mui/material';

// interface MeetProps {
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
//   } | null;
//   toggleRefresh: () => void;
// }

// const MeetUI: React.FC<MeetProps> = ({ player }) => {

//   if (!player) {
//     return null;
//   }

//   return (
    
// <div className=' container -mt-6 flex justify-center items-center bg-indigo-300 p-5 md:p-10 rounded-xl w-full max-w-xs md:max-w-lg h-auto mb-0 max-h-[600px] md:min-h-[700px] md:min-w-[400px] md:max-h-[700px] lg:max-w-[700px] min-w-[325px] lg:-mt-10'>
//   <div className='max-w-3xl py-4 px-4 md:py-6 md:px-6 bg-white shadow-md rounded-md my-8 w-full h-auto overflow-y-auto hide-scrollbar max-h-[500px] md:max-h-[550px] lg:w-[400px]'> 

  
//     <img
//       src={player.image || "/profile-image.jpg"}
//       alt="Profile"
//       className="w-full h-40 md:h-64 object-cover rounded-md mb-4"
//     />
//     <h5 className="text-2xl md:text-2xl font-semibold mb-2 capitalize">
//       {player.first_name || ""}
//     </h5>
//     <h6 className="text-gray-500 mb-6 capitalize">{player.username || ""}</h6>
//     <h4 className="text-gray-700 font-bold capitalize"> about me: </h4>
//     <p>{player.bio || ""}</p>
//     <br />

//     <h4 className="text-gray-700 font-bold capitalize"> I'm looking for:</h4>
//     <p className="text-gray-700">{player.looking_for || ""}</p>
//     <br />
//     <h4 className="text-gray-700 font-bold capitalize"> My Favorite Games: </h4>
//     <p>{player.favorite_games || ""}</p>
//     <br></br>
//     <h4 className="text-gray-700 font-bold capitalize"> How I Play: </h4>
//     <p className= 'mb-4'>{player.favorite_device || ""}</p>
//   </div>

//       <br></br>
      
      
//     </div>
//   );
// };

// export default MeetUI;

'use client';
import React from 'react';
import { SlGameController } from 'react-icons/sl';
import DislikeButton from './dislike-button';
import LikeButton from './like-button';
import ExitIcon from '@mui/icons-material/ExitToAppOutlined';
import { IconButton } from '@mui/material';

interface MeetProps {
  player: {
    first_name?: string | null;
    username?: string | null;
    bio?: string | null;
    looking_for?: string | null;
    favorite_games?: string | null;
    favorite_device?: string | null;
    image?: string | null;
    player_id?: number;
  } | null;
  toggleRefresh: () => void;
}

const MeetUI: React.FC<MeetProps> = ({ player, toggleRefresh }) => {
  if (!player) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto text-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Banner and Profile Image */}
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-r from-purple-600 to-pink-500"></div>
          <img
            src={player.image || '/profile-image.jpg'}
            alt="Profile"
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-gray-800 object-cover"
          />
        </div>

        <div className="p-6 pt-20">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {player.first_name || 'Anonymous'}
          </h1>
          <p className="text-indigo-300 text-lg">@{player.username || 'username'}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-purple-400">About Me</h2>
              <p className="text-gray-300 mt-2">{player.bio || 'No bio available'}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-pink-400">Looking For</h2>
              <p className="text-gray-300 mt-2">{player.looking_for || 'Not specified'}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-indigo-400">Favorite Games</h2>
              <p className="text-gray-300 mt-2">{player.favorite_games || 'No favorite games listed'}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-400">Gaming Setup</h2>
              <p className="text-gray-300 mt-2">{player.favorite_device || 'No gaming setup specified'}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={toggleRefresh}
              className="bg-red-500 hover:bg-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            >
              <DislikeButton playerIdToDislike={player.player_id} />
            </button>
            <IconButton
              href="/"
              className="bg-blue-500 hover:bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            >
              <ExitIcon className="text-white" />
            </IconButton>
            <button
              onClick={toggleRefresh}
              className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            >
              <LikeButton playerIdTolike={player.player_id} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUI;
