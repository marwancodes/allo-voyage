import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({showNav, closeNav}: Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 bg-black opacity-70 w-full h-screen z-[1005]`}></div>

      {/* Navlinks */}
      <div className={`text-white ${navOpen} bg-rose-900 z-[1060] space-y-6 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] transform transition-transform duration-500 delay-300`}>
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id} >
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose onClick={closeNav} className='absolute top-[1.4rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />

      </div>


    </div>
  )
}

export default MobileNavbar