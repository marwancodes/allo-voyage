import { FaStar } from "react-icons/fa"
import ReviewSlider from "./ReviewSlider";



const Review = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-[#13357b]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto w-[80%] ">
            {/* Text Content */}
            <div>
                <h1 className="text-white text-2xl font-semibold">What our customers are saying?</h1>
                <p className="text-gray-200 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore quisquam dolor sit tempore eos nobis recusandae, voluptatum fugiat illum, eaque, velit dolorem quidem soluta libero temporibus odio. Provident, reiciendis!</p>
                {/* Ratings */}
                <div className="flex items-center space-x-6 mt-6">
                  <div>
                    <p className="text-white font-bold text-2xl">4.71</p>
                    <p className="text-white mb-2">Overall Rating</p>
                    <div className="flex items-center">
                      <FaStar className="text-white"/>
                      <FaStar className="text-white"/>
                      <FaStar className="text-white"/>
                      <FaStar className="text-white"/>
                      <FaStar className="text-white"/>
                    </div>
                  </div>
                </div>
            </div>
            {/* Slider */}
            <div className="overflow-hidden">
              <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Review;