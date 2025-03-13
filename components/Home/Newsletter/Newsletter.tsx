import { BsEnvelopePaper } from "react-icons/bs"
import { FiSend } from "react-icons/fi"



const Newsletter = () => {
  return (
    <div className="bg-black py-16 flex flex-col items-center justify-center w-full">
        <BsEnvelopePaper className="w-16 h-16 mt-20 text-white"/>
        <h1 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mt-10 tracking-widest">Your Travel Journey Start Here</h1>
        <p className="text-white text-xs sm:text-sm mt-3">Sign up and we&apos;ll send the best deals to you</p>

        {/* Subscription Input & Button */}
        <div className="w-full">
            <input type="text" placeholder="Email" className="bg-white px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"/>
            <button className="bg-blue-900 text-white hover:bg-blue-950 px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none cursor-pointer transition-all duration-200">
                <div className="flex flex-row items-center justify-center gap-2">
                    Subsription <FiSend />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Newsletter