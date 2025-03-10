"use client";

import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import { useState } from 'react';



const ResponsiveNavbar = () => {

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  }

  const handleCloseNav = () => {
    setShowNav(false);
  }

  return (
    <div>
        <Navbar openNav={handleShowNav} />
        <MobileNavbar showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default ResponsiveNavbar