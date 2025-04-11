import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
      <div className="py-16">
        <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1st part */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Company</h1>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              About Us
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Careers
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Blog
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Gift Cards
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Magazine
            </p>
          </div>
          {/* 2nd part */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Support</h1>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Contact
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Legal Notice
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Privacy Policy
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Terms & Condition
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Sitemap
            </p>
          </div>
          {/* 3rd part */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Other Services</h1>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Car hire
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Activity Finder
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Tour List
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Flight Finder
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Travel Agents
            </p>
          </div>
          
          {/* 4th part */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Contact Us</h1>
            <div className="mt-6">
                <h1 className="text-gray-600 text-sm">Mobile Number</h1>
                <h1 className="font-bold text-blue-950 mt-1 text-base">+44 782 1010 855</h1>
            </div>
            <div className="mt-6">
                <h1 className="text-gray-600 text-sm">Email</h1>
                <h1 className="font-bold text-blue-950 mt-1 text-base">marouaneord@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="text-gray-600 text-sm mx-auto mt-8 w-[80%] border-t-[.5px] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            Copyright © 2025 MarwanCodes. All rights reserved.
          </p>
          <div className="flex items-center space-x-5 mt-4 md:mt-0">
            <span>Social : </span>
            <Link href="#" className="text-gray-500 hover:text-gray-800"><FaXTwitter /></Link>
            <Link href="https://www.facebook.com/marouane.ord/" className="text-gray-500 hover:text-gray-800"><FaFacebook /></Link>
            <Link href="https://www.instagram.com/marwanfitvlogs" className="text-gray-500 hover:text-gray-800"><FaInstagram /></Link>
          </div>
        </div>
      </div>
    );
}

export default Footer;