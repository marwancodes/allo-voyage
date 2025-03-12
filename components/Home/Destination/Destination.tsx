import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";


const Destination = () => {

    const heading = "Our Popular Destinations";
    const subHeading = "Explore the world with us and enjoy the beauty of nature.";

  return (
    <div className="py-20">
        {/* Heading Section */}
        <SectionHeading heading={heading} subHeading={subHeading} />

        {/* Destination Content */}
        <div className="mt-14 w-[80%] mx-auto">
            {/* Slider */}
            <DestinationSlider />
        </div>

    </div>
  )
}

export default Destination;