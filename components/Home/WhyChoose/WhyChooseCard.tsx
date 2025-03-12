import Image from "next/image";

type WhyChooseCardProps = {
    whyChoose: {
        image: string;
        title: string;
        description: string;
    }
};

const WhyChooseCard = ({whyChoose}: WhyChooseCardProps) => {
  return (
    <div>
        {/* Images */}
        <Image src={whyChoose.image}
            alt={whyChoose.title}
            width={70}
            height={70}
            className="mx-auto"
        />
        {/* Title */}
        <h1 className="text-lg text-center font-medium text-gray-900 mt-6">{whyChoose.title}</h1>
        <p className="text-xs text-center mt-2 font-medium text-gray-700">
            {whyChoose.description}
        </p>
    </div>
  )
}

export default WhyChooseCard