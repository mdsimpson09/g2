//app/components/matching.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdGames } from "react-icons/md";
import { SlGameController } from 'react-icons/sl';

interface Match {
  player_id: number;
  username: string | null;
}

interface MatchesResponse {
  matches: number[];
}

interface UsernameResponse {
  username: string;
}

interface MatchesProps {
  player_id: number;
}

const Matches: React.FC<MatchesProps> = ({ player_id }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/matches";

    const fetchMatches = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch matches');
        const { matches: matchIds }: MatchesResponse = await response.json();
        console.log('Received matches data:', matchIds);

        const matchesWithUsernames = await Promise.all(
          matchIds.map(async (id) => {
            const usernameResponse = await fetch(`/api/username/${id}`);
            if (!usernameResponse.ok) {
              console.error('Failed to fetch username for player ID:', id);
              return { player_id: id, username: 'Fetch Failed' }; // Fallback value
            }
            const { username }: UsernameResponse = await usernameResponse.json();
            return { player_id: id, username };
          })
        );

        setMatches(matchesWithUsernames);
        console.log("Processed matches with usernames:", matchesWithUsernames);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [player_id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
    </div>;
  }

  return (
<div className=' container mt-4 flex justify-center items-center bg-indigo-300 p-5 md:p-10 rounded-xl w-full max-w-xs md:max-w-lg h-auto mb-0 max-h-[600px] md:min-h-[700px] md:min-w-[400px] md:max-h-[700px] lg:max-w-[700px] min-w-[325px]'>
  <div className=' py-6 px-6 bg-white shadow-md rounded-md my-8 w-full lg:h-[600px] md:h-[600px] sm:h-[500px] overflow-y-auto hide-scrollbar '> 
    
       {/* <div className='flex justify-center items-center bg-indigo-200 p-10 rounded-xl min-w-7 w-[475px] h-[700px]'>
       <div className='max-w-3xl py-6 px-6 bg-white shadow-md rounded-md my-8 w-[500px] h-[600px] overflow-y-auto hide-scrollbar'> */}

    {/* <div className='flex justify-center items-center bg-indigo-200 p-5 md:p-8 rounded-xl mx-auto w-full sm:w-3/4 lg:w-3/4 lg:min-h-[75vh]'>

  <div className='py-6 px-4 sm:px-6 bg-white shadow-md rounded-md overflow-y-auto hide-scrollbar w-full my-8'> */}


        <h1 className="text-2xl font-semibold text-center mb-4 capitalize">Your Matches</h1>
        <div className='bg-indigo-50 p-5 rounded-sm flex flex-col justify-center items-center capitalize'>
          <ul className='list-none p-0 text-xl'>
            {matches.length > 0 ? matches.map((match) => (
              <Link href={`/player/${match.player_id}`} key={match.player_id}>
                <li className='flex items-center justify-between mb-2 cursor-pointer'>
                  <MdGames className='flex-shrink-0' />
                  <span className='mx-2'>{match.username ?? 'Unknown User'}</span>
                  <MdGames className='flex-shrink-0' />
                </li>
              </Link>
            )) : (
              <li>No matches found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Matches;



//app/components/matching.tsx
// 'use client'


// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { MdGames } from "react-icons/md";
// import { SlGameController } from 'react-icons/sl';



// interface Match {
//   player_id: number;
//   username: string | null;  
// }

// interface MatchesProps {
//   player_id: number;
// }

// const Matches: React.FC<MatchesProps> = ({ player_id }) => {
//   const [matches, setMatches] = useState<Match[]>([]);
//   const [loading, setLoading] = useState(true);
  

//   useEffect(() => {
//     const apiUrl = "/api/matches";

//     const fetchMatches = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         if (response.ok) {
//           const playerIds = await response.json();

       
//           const matchesWithUsernames = await Promise.all(playerIds.matches.map(async (id: number) => {
         
//             const usernameResponse = await fetch(`/api/username/${id}`);
//             const usernameData = await usernameResponse.json();
//             return { player_id: id, username: usernameData.username };
//           }));

//           setMatches(matchesWithUsernames);
//             // Log the matches after processing them to see the final structure
//         console.log("Processed matches with usernames:", matchesWithUsernames);
        
//         } else {
//           console.error('Failed to fetch matches');
//         }
//       } catch (error) {
//         console.error('Error fetching matches:', error);
//       }
//       setLoading(false);
//     };

//     fetchMatches();
  

//   }, [player_id]);

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">
//     <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
//   </div>;
//   }

//   return (
//     <div className='flex justify-center items-center bg-indigo-200 p-10 rounded-xl min-w-7 w-[475px] h-[700px]'>
//     <div className='max-w-3xl py-6 px-6 bg-white shadow-md rounded-md my-8 w-[500px] h-[600px] overflow-y-auto hide-scrollbar'>

//       <h1 className="text-2xl font-semibold text-center mb-4 capitalize">
//        Your Matches
//       </h1>


//       <br></br>
//       <div className= 'bg-indigo-50 p-5 rounded-sm min-w-7 flex flex-col justify-center items-center capitalize'>
//       <ul className='list-none p-0 text-xl'>
//     {matches.length > 0 ? (
//       matches.map((match) => (
//         <Link href={`/player/${match.player_id}`} key={match.player_id}>
//           <li className='flex items-center justify-between mb-2'>
//             <MdGames className='flex-shrink-0' />
//             <span className='mx-2'>{match.username ?? 'Unknown User'}</span>
//             <MdGames className='flex-shrink-0' />
//           </li>
//         </Link>
//       ))
//     ) : (
//       <li>No matches found</li>
//     )}
//   </ul>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Matches;
