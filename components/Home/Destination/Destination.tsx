import SectionHeading from "@/components/Helper/SectionHeading";


const Destination = () => {

    const heading = "Our Popular Destinations";
    const subHeading = "Explore the world with us and enjoy the beauty of nature.";

  return (
    <div className="py-20">
        {/* Heading Section */}
        <SectionHeading heading={heading} subHeading={subHeading} />

    </div>
  )
}

export default Destination;