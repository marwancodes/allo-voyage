import { FaCalendarWeek, FaMap } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6";



const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]" >
            {/* 1st Search Input  */}
            <div className="flex items-center space-x-6">
                <FaMap className="h-6 w-6 text-blue-600"/>
                <div>
                    <p className="text-lg font-medium mb-[0.2rem]">Location</p>
                    <input type="text" placeholder="Where are you going?" className="outline-none border-none placeholder:text-gray-800 placeholder:text-[0.9rem]" />
                </div>
            </div>

            {/* 2nd Search Input  */}
            <div className="flex items-center space-x-6">
                <FaCalendarWeek className="h-6 w-6 text-blue-600"/>
                <div>
                    <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
                    <input type="date" className="outline-none border-none placeholder:text-gray-800 placeholder:text-[0.9rem]" />
                </div>
            </div>

            {/* 3rd Search Input  */}
            <div className="flex items-center space-x-6">
                <FaCalendarWeek className="h-6 w-6 text-blue-600"/>
                <div>
                    <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
                    <input type="date" className="outline-none border-none placeholder:text-gray-800 placeholder:text-[0.9rem]" />
                </div>
            </div>

            {/* 4th Search Input  */}
            <div className="flex items-center space-x-6">
                <FaUserGroup className="h-6 w-6 text-blue-600"/>
                <div>
                    <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
                    <p className="font-normal">1 Guest 1 Room</p>
                </div>
            </div>
    </div>
  )
}

export default SearchBox;