
// 'use client' 
// import React from 'react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';

// const Footer = () => {
//   const router = useRouter();
//   const pathname = usePathname();
  
//   const handleLinkClick = (href: string) => {
//     router.push(href);
//   };

//   const isActive = (path: string) => {
//     const active = pathname === path;
//     return `cursor-pointer px-4 py-2 ${
//       active ? "font-bold" : "hover:font-bold"
//     } text-indigo-300`;
//   };

//   return (
//     <footer className='flex justify-between items-center mt-4 bottom-0 w-full text-sm text-center border-indigo-300 p-4'>

// <div className='flex-1 text-left'>
//       <Link href='/faqs'>
//         <span onClick={() => handleLinkClick('/faqs')} className={isActive('/faqs')}>Community Guidelines</span>
//       </Link>
//       </div>


//       <div className='flex-1 text-right'>
//       <Link href='/contact'>
//         <span onClick={() => handleLinkClick('/contact')} className={isActive('/contact')}>Contact Us</span>
//       </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

'use client';

'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Branding */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-green-400 to-blue-500">
            Gamer Date
          </h1>
          <p className="text-gray-400">Find your squad</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/faqs"
                className="hover:text-gradient-to-r hover:from-purple-500 hover:via-green-400 hover:to-blue-500 transition-colors duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/community-guidelines"
                className="hover:text-gradient-to-r hover:from-purple-500 hover:via-green-400 hover:to-blue-500 transition-colors duration-300"
              >
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gradient-to-r hover:from-purple-500 hover:via-green-400 hover:to-blue-500 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h2>
          <p className="text-gray-400">Email: support@gamerdate.com</p>
          <p className="text-gray-400">Phone: (555) 123-4567</p>
          <p className="text-gray-400">Address: 123 Gaming Lane, Suite 100</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Gamer Date. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;