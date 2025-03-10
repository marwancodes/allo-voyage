"use client";

import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoAirplaneSharp } from "react-icons/io5";

type Props = {
  openNav: () => void;
}

const Navbar = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if(window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    }
    // add event listener
    window.addEventListener('scroll', handler);
    // cleanup
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className={`bg-blue-950 ${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className='flex justify-between items-center w-[90%] xl:w-[80%] mx-auto h-full'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
            <IoAirplaneSharp className='text-white w-6 h-6 -rotate-45 ' />
          </div>
          <h1 className='text-white font-bold text-xl md:text-2xl uppercase'>
            Allo Voyage
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id} >
              <p className="relative text-white font-medium text-sm md:text-base block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:transition after:duration-300 hover:after:scale-x-100 after:origin-right ">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* button */}
        <div className='flex items-center space-x-4'>
          <button className='md:px-12 md:py-2.5 px-8 py-2 text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer'>Book Now</button>
        </div>

        {/* BURGER MENU */}
        <HiBars3BottomRight onClick={openNav} className='lg:hidden w-8 h-8 text-white cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar