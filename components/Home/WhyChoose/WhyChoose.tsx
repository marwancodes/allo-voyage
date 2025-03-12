import SectionHeading from "@/components/Helper/SectionHeading"
import WhyChooseCard from "./WhyChooseCard";
import { whyChooseData } from "@/data/data";



const WhyChoose = () => {

    const heading = "Why Choose Us";
    const subHeading = "We provide the best services for our customers.";
  return (
    <div className="py-20">
        {/* Heading Section */}
        <SectionHeading heading={heading} subHeading={subHeading} />
        
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-12 w-[80%] mx-auto ">
            {/* Why Choose Us Card */}
            {whyChooseData.map((data) => (
                <div key={data.id}>
                    <WhyChooseCard whyChoose={data} />
                </div>
            ))}
        </div>

    </div>
  )
}

export default WhyChoose