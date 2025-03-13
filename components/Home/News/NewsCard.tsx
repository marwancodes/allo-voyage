import Image from "next/image";

type NewsProps = {
    news: {
        image: string;
        title: string;
        date: string;
    }
}

const NewsCard = ({news}: NewsProps) => {
  return (
    <div>
        {/* Image */}
        <div className="h-[300px]">
            <Image src={news.image} alt={news.title} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
        </div>
        {/* Text Content */}
        <h1 className="text-gray-950 text-lg font-semibold mt-6 cursor-pointer">{news.title}</h1>
        <p className="text-gray-600 text-sm mt-3">{news.date}</p>
    </div>
  )
}

export default NewsCard;