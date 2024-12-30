// // 'use server'
// import Link from "next/link";
// import { Button } from './components/ui/button'// import Button from '@mui/material/Button';



// export default async function Home() {
 

//   return (

//     <div>
//       <div className="flex justify-center items-center bg-indigo-200 p-5 sm:p-10 rounded-xl w-full mt-6">
//         <div className="bg-white shadow-md rounded-md overflow-y-auto w-full max-w-none lg:max-w-6xl mx-auto p-6">
//           <div className="flex lg:flex-row items-center">
//             <img className="mt-4 ml-2 sm:ml-6 sm:w-auto w-[75%] -mb-24 sm:-mb-48 md:-mb-42 lg:-mb-48" src="/combo.png" alt="logo" />
//           </div>
//           <section className="mt-4">
//             <br></br>
//             <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg text-center">
//               <p>Welcome to Gamer Date, where gamers can connect, play, and build meaningful relationships.</p>
//               <br></br>
//               <p> Say goodbye to the days where your team is filled with children. </p>
//             </div>
//           </section>
//           <br></br>
//           <section>
//             <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg text-center">
//               <p>Check out your profile by clicking the button below</p>
//               <p>Be sure to add more to your profile before trying to find other players</p>
//               <br></br>
//             </div>
//           </section>
//           <br></br>
//           <Button className='w-full bg-indigo-700 text-white hover:bg-indigo-500 text-md uppercase'>
//             <Link href="/profile" className="">Check out your profile!</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }
'use server';

import Link from "next/link";
import { Button } from './components/ui/button';

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-gray-100 p-4 sm:p-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center ">
        <div >
          <img
            className="w-80 h-80"
            src="/newlogo2.jpg"
            alt="Gamer Date Logo"
          />
        </div>
        <div className="-mt-56 -mb-44">
          <img
          className="w-200 h-200"
          src="/title.jpg"
          alt="Gamer Date Logo"
          />
        </div>
        {/* <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-black mt-6">
          Welcome to Gamer Date
        </h1> */}
        <p className="-mb-8 text-lg md:text-xl text-gray-300">
          Connect, play, and build meaningful relationships with gamers around the globe.
        </p>
      </div>

      {/* About Section */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl my-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-6">
          About Gamer Date
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
          <p className="mb-4">
            Welcome to Gamer Date, where gamers can connect, play, and build meaningful relationships. Say goodbye to
            the days where your team is filled with children.
          </p>
          <p>
            We strive to provide the best opportunities to meet and connect with other gamers above the age of 18. Find
            your squad today!
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl my-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-6">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300">
            <h3 className="font-semibold text-purple-400 mb-2">Sign Up</h3>
            <p>Create your account and start building your gaming profile.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300">
            <h3 className="font-semibold text-indigo-400 mb-2">Connect</h3>
            <p>Find gamers who share your interests and start building friendships.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300">
            <h3 className="font-semibold text-pink-400 mb-2">Match</h3>
            <p>When mutual interest is shown, connect and start gaming together.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300">
            <h3 className="font-semibold text-green-400 mb-2">Play</h3>
            <p>Form squads, dominate leaderboards, or enjoy co-op campaigns.</p>
          </div>
        </div>
      </div>

      {/* Extended Information Section */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl my-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 text-center mb-6">
          How It Works
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
          <ol className="list-decimal pl-6">
            <li className="mb-4">
              <strong>Sign Up:</strong> Create your account and start exploring the platform.
            </li>
            <li className="mb-4">
              <strong>Build Your Profile:</strong> Add details about your gaming interests and preferences.
            </li>
            <li className="mb-4">
              <strong>Explore Gamers:</strong> Browse profiles and find your perfect squad or duo partner.
            </li>
            <li className="mb-4">
              <strong>Connect:</strong> Interact with your matches and build meaningful relationships.
            </li>
          </ol>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Create your account, customize your profile, and start connecting with other gamers today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-bold uppercase transition-transform hover:scale-105">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white font-bold uppercase transition-transform hover:scale-105">
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

