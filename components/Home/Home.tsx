import Destination from "./Destination/Destination";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import News from "./News/News";
import Review from "./Reviews/Review";
import WhyChoose from "./WhyChoose/WhyChoose";



const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
    </div>
  )
}

export default Home;