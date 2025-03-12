import Image from "next/image";
import { FaHeart } from "react-icons/fa";


type HotelCardProps = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string
    }
}

const HotelCard = ({hotel}: HotelCardProps) => {
  return (
    <div>
        <div className="relative h-[300px] w-full rounded-lg cursor-pointer overflow-hidden group">
            {/* Add fav Button */}
            <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex flex-col items-center justify-center">
                <FaHeart className="w-3 h-3"/>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            {/* Image */}
            <Image src={hotel.image}
                alt={hotel.name}
                width={500}
                height={500}
                className="overflow-hidden h-full w-full transition-all duration-300 group-hover:scale-110 object-cover" />
        </div>
        {/* Text Content */}
        <div>
            <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">{hotel.name}</h1>
            <p className="text-sm text-gray-600 mt-3 mb-6 font-medium">{hotel.location}</p>
            {/* rating */}
            <div className="flex items-center space-x-2">
                <div className="text-white bg-blue-800 p-2 rounded-md font-bold text-xs">
                    {hotel.rating}
                </div>
                <p className="text-sm text-gray-800 ">Exceptional</p>
                <p className="text-sm font-bold text-gray-800">{hotel.reviews} Reviews</p>
            </div>
            {/* Price */}
            <p className="text-gray-700 mt-3 font-medium">
                Starting from <span className="text-blue-600 font-bold">£{hotel.price}</span>
            </p>
        </div>
    </div>
  )
}

export default HotelCard;