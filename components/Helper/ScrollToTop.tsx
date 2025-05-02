'use client';

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

// Description: This component is used to scroll the page to the top when the user clicks on it.

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

  return (
    <div className="fixed bottom-4 right-4 animate-pulse">
        {isVisible && (
            <button onClick={scrollToTop} className="bg-teal-600 text-white rounded-full h-12 w-12 flex items-center justify-center focus:outline-none cursor-pointer">
                <FaArrowUp />
            </button>
        )}
    </div>
  )
}

export default ScrollToTop