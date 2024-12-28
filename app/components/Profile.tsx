//app/components/profile/profile.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { SlGameController } from 'react-icons/sl';
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from 'next/navigation';

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

const Profile: React.FC<ProfileProps> = ({ player }) => {
  const [profileData, setProfileData] =
    useState<ProfileProps["player"]>(player);
    const router = useRouter();

    const navigateToLink = (url: string | null) => {
      if (url) {
        window.open(url, '_blank');
      } else {
        
        console.log("This service is not linked.");
      }
    };

  useEffect(() => {
    const apiUrl = "/api/profile/";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.player) {
          setProfileData(data.player);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen">
      <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
    </div>
    );
  }

  return (
/////use this layout
<div className=' container flex justify-center items-center bg-indigo-300 p-5 md:p-10 rounded-xl w-full max-w-xs md:max-w-lg h-auto mb-0 max-h-[600px] md:max-h-[700px] lg:max-w-[500px] min-w-7'>
<div className='max-w-3xl py-4 px-4 md:py-6 md:px-6 bg-white shadow-md rounded-md my-8 w-full h-auto overflow-y-auto hide-scrollbar max-h-[500px] md:max-h-[550px] lg:max-w-[400px]'> 

        <img
          src={profileData.image || "/profile-image.jpg"}
          alt="Profile"
          className="w-full h-80 object-cover rounded-md mb-4"
        />
        <h5 className="text-2xl md:text-2xl font-semibold mb-2 capitalize">
          {profileData.first_name || ""}
        </h5>
        <h6 className="text-gray-500 mb-6 capitalize">{profileData.username || ""}</h6>
        <h4 className="text-gray-700 font-bold capitalize"> About Me: </h4>
        <p> {profileData.bio || ""}</p>
        <br></br>
        <h4 className="text-gray-700 font-bold capitalize"> I&apos;m looking for:</h4>
        <p className="text-gray-700">{profileData.looking_for || ""}</p>
        <br></br>
        <h4 className="text-gray-700 font-bold capitalize"> My Favorite Games: </h4>
        <p> {profileData.favorite_games || ""}</p>
        <br></br>
        <h4 className="text-gray-700 font-bold capitalize"> How I Play: </h4>
        <p> {profileData.favorite_device || ""}</p>
        <br></br>
    
        <h4 className="font-bold mb-4 text-center sm:text-lg md:text-xl lg:text-2xl">Where players can connect with you!</h4>


        <ul className="flex list-none p-0 justify-between">
          <li className="mr-4" onClick={() => navigateToLink(player.twitch)}>
            <div className="flex items-center justify-center bg-purple-700 rounded-lg cursor-pointer" style={{ width: '36px', height: '36px' }}>
              <FaTwitch className='text-white text-xl'/>
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(player.discord)}>
            <div className="flex items-center justify-center bg-indigo-400 rounded-lg cursor-pointer" style={{ width: '36px', height: '36px' }}>
              <FaDiscord className="text-white text-xl" />
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(player.instagram)}>
            <div className="flex items-center justify-center bg-pink-600 rounded-lg cursor-pointer" style={{ width: '36px', height: '36px' }}>
              <FaInstagram className="text-white text-xl" />
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(player.twitter)}>
            <div className="flex items-center justify-center bg-blue-500 rounded-lg cursor-pointer" style={{ width: '36px', height: '36px' }}>
              <FaXTwitter className="text-white text-xl" />
            </div>
          </li>
          <li onClick={() => navigateToLink(player.facebook)}>
            <div className="flex items-center justify-center bg-blue-600 rounded-full cursor-pointer" style={{ width: '36px', height: '36px' }}>
              <FaFacebook className="text-white text-xl" />
            </div>
          </li>
        </ul>
    
      </div>
    </div>
  );
};

export default Profile;

