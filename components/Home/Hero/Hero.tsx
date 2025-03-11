import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";



const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
        {/* OverLay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>

        {/* Video Background */}
        <video src="/images/hero1.mp4"
            autoPlay
            muted
            loop
            preload="metadata"
            className="h-full w-full object-cover"
        />

        {/* Content */}
        <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-col items-center justify-center w-full h-full ">
                <div>
                    <h1 className="text-white font-bold uppercase text-[45px] mb-4 md:mb-0  text-center md:text[35px] lg:text-[45] tracking-[0.3rem]">
                        Lets Enjoy The Nature
                    </h1>
                    <p className="text-white font-normal text-center text-lg  [word-spacing:2px]">
                        Travel with us and explore the beauty of nature and the world.
                    </p>
                </div>

                {/* Search Box */}
                <SearchBox />
                <Link href="#"
                    className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group 
                                bg-rose-600 relative hover:bg-gradient-to-r 
                                hover:from-rose-500 hover:to-rose-400 text-white 
                                hover:ring-2 hover:ring-offset-2 hover:ring-red-400 
                                transition-all ease-out duration-300"
                    >
                    <span
                        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 
                                transform translate-x-12 bg-white opacity-10 rotate-12 
                                group-hover:-translate-x-40 ease"
                    ></span>
                    <span className="relative font-bold">Search</span>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Hero;