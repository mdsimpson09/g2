'use client'
import React, { useEffect, useState } from 'react';
import MeetUI from './MeetUI';
import MeetControls from './MeetControls';
import { SlGameController } from 'react-icons/sl';

interface PlayerProfile {
  player_id: number | null;
  first_name: string | null;
  username: string | null;
  bio: string | null;
  looking_for: string | null;
  favorite_games: string | null;
  favorite_device: string | null;
  image: string | null;
  instagram?: string | null;
    twitter?: string | null;
    discord?: string | null;
    twitch?: string | null;
    facebook?: string | null;
}

const Meet: React.FC = () => {
  const [profileData, setProfileData] = useState<PlayerProfile | null>(null);
  const [refresh, setRefresh] = useState(0);

  const handleToggleRefresh = () => {
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const apiUrl = "/api/meet";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.message === "Out of player profiles. Check back later for more") {
          setProfileData(null); 
        } else {
          setProfileData(data.player);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setProfileData(null); 
      }
    };

    fetchProfiles();
  }, [refresh]);

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
        <h1 className="text-lg">
      
        </h1>
        <br></br>
        <div>
     
      </div>
    </div>
    );
  }

  return (
    <div>
      <div>
      <MeetUI player={profileData} toggleRefresh={handleToggleRefresh} />
      </div>
      <div className="">
      <MeetControls player={profileData} toggleRefresh={handleToggleRefresh}/>
    </div>

    </div>
  );
};

export default Meet;
