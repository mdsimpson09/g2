export interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    bio: string;
    favoriteGames: string[];
    platforms: string[];
    looking_for?: string;
    username?: string;
    twitch?: string;
    discord?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  }
  