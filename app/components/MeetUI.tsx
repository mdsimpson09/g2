'use client';
import React, { useEffect, useState } from 'react';
import DislikeButton from './dislike-button';
import LikeButton from '../like-button';
import Link from 'next/link';
import { useSession } from 'next-auth/react'

import HeartIcon from '@mui/icons-material/FavoriteOutlined';
import HateIcon from '@mui/icons-material/CloseOutlined';
import ExitIcon from '@mui/icons-material/ExitToAppOutlined';
import RedoIcon from '@mui/icons-material/ReplayOutlined';
import { Icon, IconButton } from '@mui/material';

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
    instagram?: string | null;
    twitter?: string | null;
    discord?: string | null;
    twitch?: string | null;
    facebook?: string | null;
  } | null;
  toggleRefresh: () => void;
}

const MeetUI: React.FC<MeetProps> = ({ player }) => {

  if (!player) {
    return null;
  }

  return (
    
<div className=' container -mt-6 flex justify-center items-center bg-indigo-300 p-5 md:p-10 rounded-xl w-full max-w-xs md:max-w-lg h-auto mb-0 max-h-[600px] md:min-h-[700px] md:min-w-[400px] md:max-h-[700px] lg:max-w-[700px] min-w-[325px] lg:-mt-10'>
  <div className='max-w-3xl py-4 px-4 md:py-6 md:px-6 bg-white shadow-md rounded-md my-8 w-full h-auto overflow-y-auto hide-scrollbar max-h-[500px] md:max-h-[550px] lg:w-[400px]'> 

  
    <img
      src={player.image || "/profile-image.jpg"}
      alt="Profile"
      className="w-full h-40 md:h-64 object-cover rounded-md mb-4"
    />
    <h5 className="text-2xl md:text-2xl font-semibold mb-2 capitalize">
      {player.first_name || ""}
    </h5>
    <h6 className="text-gray-500 mb-6 capitalize">{player.username || ""}</h6>
    <h4 className="text-gray-700 font-bold capitalize"> about me: </h4>
    <p>{player.bio || ""}</p>
    <br />

    <h4 className="text-gray-700 font-bold capitalize"> I'm looking for:</h4>
    <p className="text-gray-700">{player.looking_for || ""}</p>
    <br />
    <h4 className="text-gray-700 font-bold capitalize"> My Favorite Games: </h4>
    <p>{player.favorite_games || ""}</p>
    <br></br>
    <h4 className="text-gray-700 font-bold capitalize"> How I Play: </h4>
    <p className= 'mb-4'>{player.favorite_device || ""}</p>
  </div>

      <br></br>
      
      
    </div>
  );
};

export default MeetUI;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import DislikeButton from './dislike-button';
// import LikeButton from './like-button';
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
    
//     <div className='container flex justify-center items-center bg-indigo-300 p-10 rounded-xl min-w-7 w-[475px] h-[625px] mb-0'>
//       <div className='max-w-3xl py-6 px-6 bg-white shadow-md rounded-md my-8 w-[500px] h-[525px] overflow-y-auto hide-scrollbar'>
//         <img
//           src={player.image || "/profile-image.jpg"}
//           alt="Profile"
//           className="w-full h-64 object-cover rounded-md mb-4"
//         />
//         <h1 className="text-2xl font-semibold mb-2 capitalize">
//           {player.first_name || ""}
//         </h1>
//         <p className="text-gray-500 mb-4">{player.username || ""}</p>
//         <p className="text-gray-700 font-bold capitalize"> about me: </p>
//         <p>{player.bio || ""}</p>
//         <br />

//         <p className="text-gray-700 font-bold capitalize"> I&apos;m looking for:</p>
//         <p className="text-gray-700">{player.looking_for || ""}</p>
//         <br />
//         <p className="text-gray-700 font-bold capitalize"> My Favorite Games: </p>
//         <p>{player.favorite_games || ""}</p>
//         <br></br>
//         <p className="text-gray-700 font-bold capitalize"> How I Play: </p>
//         <p>{player.favorite_device || ""}</p>


//       </div>
//       <br></br>
      
      
//     </div>
//   );
// };

// export default MeetUI;
