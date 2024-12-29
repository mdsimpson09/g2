
'use client';
import React, { useEffect, useState } from 'react';
import { SlGameController } from 'react-icons/sl';
import { FaXTwitter, FaTwitch, FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa6';
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
  const [profileData, setProfileData] = useState<ProfileProps['player']>(player);
  const router = useRouter();

  const navigateToLink = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('This service is not linked.');
    }
  };

  useEffect(() => {
    const apiUrl = '/api/profile/';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.player) {
          setProfileData(data.player);
        }
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
    <div className="max-w-7xl mx-auto text-center">
        {/* Banner and Profile Image */}
        <div className="relative mb-8">
          <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg"></div>
          <img
            src={profileData.image || '/profile-image.jpg'}
            alt="Profile"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-gray-900 object-cover"
          />
        </div>

        {/* Username and Bio */}
        <div className="pt-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {profileData.first_name || 'Anonymous'}
          </h1>
          <p className="text-xl text-indigo-300">@{profileData.username || 'username'}</p>

        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 gap-6">
          <div
            className="flex items-center justify-center bg-purple-700 rounded-lg cursor-pointer w-12 h-12"
            onClick={() => navigateToLink(profileData.twitch)}
          >
            <FaTwitch className="text-white text-2xl" />
          </div>
          <div
            className="flex items-center justify-center bg-indigo-400 rounded-lg cursor-pointer w-12 h-12"
            onClick={() => navigateToLink(profileData.discord)}
          >
            <FaDiscord className="text-white text-2xl" />
          </div>
          <div
            className="flex items-center justify-center bg-pink-600 rounded-lg cursor-pointer w-12 h-12"
            onClick={() => navigateToLink(profileData.instagram)}
          >
            <FaInstagram className="text-white text-2xl" />
          </div>
          <div
            className="flex items-center justify-center bg-blue-500 rounded-lg cursor-pointer w-12 h-12"
            onClick={() => navigateToLink(profileData.twitter)}
          >
            <FaXTwitter className="text-white text-2xl" />
          </div>
          <div
            className="flex items-center justify-center bg-blue-600 rounded-full cursor-pointer w-12 h-12"
            onClick={() => navigateToLink(profileData.facebook)}
          >
            <FaFacebook className="text-white text-2xl" />
          </div>
        </div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-400">
              <SlGameController className="mr-2" /> About Me
            </h2>
            <p className="text-gray-300">{profileData.bio || 'No bio available'}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-pink-400">
              <SlGameController className="mr-2" /> Looking For
            </h2>
            <p className="text-gray-300">{profileData.looking_for || 'Not specified'}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-400">
              <SlGameController className="mr-2" /> Favorite Games
            </h2>
            <p className="text-gray-300">{profileData.favorite_games || 'No favorite games listed'}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-400">
              <SlGameController className="mr-2" /> Gaming Setup
            </h2>
            <p className="text-gray-300">{profileData.favorite_device || 'No gaming setup specified'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;