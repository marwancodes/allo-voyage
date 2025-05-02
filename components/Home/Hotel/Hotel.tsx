import SectionHeading from "@/components/Helper/SectionHeading"
import HotelCard from "./HotelCard";
import { hotelsData } from "@/data/data";



const Hotel = () => {

    const heading = "Recommended Hotels";
    const subHeading = "Book your stay at the best hotels in the world.";

  return (
    <div className="py-20">
        {/* Heading Section */}
        <SectionHeading heading={heading} subHeading={subHeading} />
        <div className="mx-auto w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
            {/* Hotel Cards */}
            {hotelsData.map((data, i) => (
                <div
                    key={data.id}
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={`${i * 100}`}
                >
                    <HotelCard hotel={data}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotel