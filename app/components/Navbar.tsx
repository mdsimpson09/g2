
// 'use client'

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useSession } from 'next-auth/react';
// import UserAccountNav from './UserAccountNav';
// import { usePathname, useRouter } from 'next/navigation';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { data: session } = useSession();
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     document.body.style.padding = '0';
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };


//   const handleLinkClick = (href: string) => {
//     // Only toggle the menu off if it's currently open
//     if (isMenuOpen) {
//         setIsMenuOpen(false);
//     }
//     router.push(href);
// };

//   const isActive = (path: string) => {
//     const active = pathname === path;
//     return `block mt-2 cursor-pointer px-4 py-2 rounded-full text-white transition-colors duration-200 ${active ? 'bg-indigo-700 text-white ring-2 ring-white' : 'hover:bg-indigo-700 hover:text-white'} hover:ring-2 hover:ring-white`;

//   };

//   return (
//     <div className='bg-indigo-400 fixed w-full z-10 top-0 text-lg overflow-visible'>
//       <div className='flex items-center justify-between p-4'>
//       <Link href='/'>
//   <div className="flex justify-center -ml-8 w-44 h-44 -mt-6 -mb-24" style={{ borderRadius: '50%', position: 'relative' }}>
//     <img src="/logo.png" alt="Logo" className='w-auto h-36 cursor-pointer' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
//   </div>
// </Link>

//     <div className="hidden -ml-20 md:-ml-12 space-x-20 md:flex navfont">
//             <div className={isActive('/profile')} onClick={() => handleLinkClick('/profile')}>Profile</div>
//             <div className={isActive('/meet')} onClick={() => handleLinkClick('/meet')}>Meet Players</div>
//             <div className={isActive('/matches')} onClick={() => handleLinkClick('/matches')}>Your Matches</div>
//           </div>
    
//         <button onClick={toggleMenu} className="text-4xl text-white">
//           {isMenuOpen ? '✕' : '☰'}
//         </button>

    
//         <div className={`bg-indigo-400 outline outline-indigo-200 w-[250px] navfont absolute right-1 top-full -mt-2 p-4 flex flex-col items-center space-y-1 shadow-md rounded-lg transition-all duration-300 ease-in-out  py-4 ${isMenuOpen ? 'block' : 'hidden'}`}>

//   <Link href='/'><span onClick={() => handleLinkClick('/about')} className={isActive('/')}>Home</span></Link>

//   <Link href='/about'><span onClick={() => handleLinkClick('/about')} className={isActive('/about')}>About</span></Link>

//   <Link href='/profile'><span onClick={() => handleLinkClick('/profile')} className={isActive('/profile')}>Profile</span></Link>

//   <Link href='/edit'><span onClick={() => handleLinkClick('/edit')} className={isActive('/edit')}>Edit Profile</span></Link>

//   <Link href='/meet'><span onClick={() => handleLinkClick('/meet')} className={isActive('/meet')}>Meet Players</span></Link>

//   <Link href='/matches'><span onClick={() => handleLinkClick('/matches')} className={isActive('/matches')}>Your Matches</span></Link>

//   <Link href='/faqs'><span onClick={() => handleLinkClick('/faqs')} className={isActive('/faqs')}>Community Guidelines</span></Link>

//   <Link href='/contact'><span onClick={() => handleLinkClick('/contact')} className={isActive('/contact')}>Contact Us</span></Link>

// <div className = 'pb-4'>
//   {!session?.user && (
//        <Link href='/sign-up'><span onClick={() => handleLinkClick('/sign-up')} className={isActive('/sign-up')}>Sign-up</span></Link>
//       )}
//   </div>

  
//   {session?.user ? (
//     <UserAccountNav />
//   ) : (
//     <Link href='/login'><span onClick={() => handleLinkClick('/login')} className=' text-white block cursor-pointer'>Login</span></Link>
//   )}

// </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import UserAccountNav from './UserAccountNav';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.padding = '0';
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    router.push(href);
  };

  const linkStyle = `relative text-transparent font-semibold px-6 py-3 text-md bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 cursor-pointer hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-500 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <div className="bg-black fixed w-full z-10 top-0 text-lg shadow-lg">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Navbar Links (Visible on Medium and Large Screens) */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 items-center navfont">
          <div onClick={() => handleLinkClick('/')} className={linkStyle}>
            Home
          </div>
          <div onClick={() => handleLinkClick('/about')} className={linkStyle}>
            About
          </div>
          <div onClick={() => handleLinkClick('/profile')} className={linkStyle}>
            Profile
          </div>
          <div onClick={() => handleLinkClick('/meet')} className={linkStyle}>
            Meet Players
          </div>
          <div onClick={() => handleLinkClick('/matches')} className={linkStyle}>
            Your Matches
          </div>
        
        </div>

        {/* Hamburger Menu Button (Visible on Small Screens Only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl transition-transform transform hover:scale-110 cursor-pointer"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Visible on Small Screens Only) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white z-20 shadow-lg px-6 py-8">
          <div className="flex flex-col space-y-4 navfont">
            <div onClick={() => handleLinkClick('/')} className={linkStyle}>
              Home
            </div>
            <div onClick={() => handleLinkClick('/about')} className={linkStyle}>
              About
            </div>
            <div onClick={() => handleLinkClick('/profile')} className={linkStyle}>
              Profile
            </div>
            <div onClick={() => handleLinkClick('/meet')} className={linkStyle}>
              Meet Players
            </div>
            <div onClick={() => handleLinkClick('/matches')} className={linkStyle}>
              Your Matches
            </div>
          
            {/* <div onClick={() => handleLinkClick('/edit')} className={linkStyle}>
              Edit Profile
            </div> */}
            {/* <div onClick={() => handleLinkClick('/faqs')} className={linkStyle}>
              Community Guidelines
            </div> */}
            {/* <div onClick={() => handleLinkClick('/contact')} className={linkStyle}>
              Contact Us
            </div> */}
            {!session?.user && (
              <div onClick={() => handleLinkClick('/sign-up')} className={linkStyle}>
                Sign Up
              </div>
            )}
            {session?.user ? (
              <UserAccountNav />
            ) : (
              <div
                onClick={() => handleLinkClick('/login')}
                className={`${linkStyle} text-sm`}
              >
                Login
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
