
'use client' 
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLinkClick = (href: string) => {
    router.push(href);
  };

  const isActive = (path: string) => {
    const active = pathname === path;
    return `cursor-pointer px-4 py-2 ${
      active ? "font-bold" : "hover:font-bold"
    } text-indigo-300`;
  };

  return (
    <footer className='flex justify-between items-center mt-4 bottom-0 w-full text-sm text-center border-indigo-300 p-4'>

<div className='flex-1 text-left'>
      <Link href='/faqs'>
        <span onClick={() => handleLinkClick('/faqs')} className={isActive('/faqs')}>Community Guidelines</span>
      </Link>
      </div>


      <div className='flex-1 text-right'>
      <Link href='/contact'>
        <span onClick={() => handleLinkClick('/contact')} className={isActive('/contact')}>Contact Us</span>
      </Link>
      </div>
    </footer>
  );
};

export default Footer;