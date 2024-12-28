import { User } from '../types/user';

export const preloadedUsers: User[] = [
  {
    id: '1',
    name: 'Alice',
    email: 'alice@example.com',
    image: '/placeholder.svg?height=100&width=100',
    bio: 'Avid RPG player and streamer',
    favoriteGames: ['The Witcher 3', 'Final Fantasy VII', 'Stardew Valley'],
    platforms: ['PC', 'PlayStation'],
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@example.com',
    image: '/placeholder.svg?height=100&width=100',
    bio: 'FPS enthusiast and esports fan',
    favoriteGames: ['Counter-Strike: Global Offensive', 'Valorant', 'Apex Legends'],
    platforms: ['PC', 'Xbox'],
  },
  // Add more pre-loaded users as needed
];

export function getUsers(): User[] {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : preloadedUsers;
}

export function setUsers(users: User[]): void {
  localStorage.setItem('users', JSON.stringify(users));
}

export function addUser(user: User): void {
  const users = getUsers();
  users.push(user);
  setUsers(users);
}

export function getUserByEmail(email: string): User | undefined {
  const users = getUsers();
  return users.find(user => user.email === email);
}

export function updateUser(updatedUser: User): void {
  const users = getUsers();
  const index = users.findIndex(user => user.id === updatedUser.id);
  if (index !== -1) {
    users[index] = updatedUser;
    setUsers(users);
  }
}