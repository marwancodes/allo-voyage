import SectionHeading from "@/components/Helper/SectionHeading";
import NewsCard from "./NewsCard";
import { newsData } from "@/data/data";



const News = () => {

    const heading = "Exciting Travel News for You";
    const subHeading = "Lorem ipsum dolor sit amet consectetur";

  return (
    <div className="py-16">
        {/* Heading Section */}
        <SectionHeading heading={heading} subHeading={subHeading}/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8 w-[80%] mx-auto mt-20">
            {newsData.map((data) => (
                <div key={data.id}>
                    <NewsCard news={data} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default News;