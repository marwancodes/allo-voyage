"use client";

import Destination from "./Destination/Destination";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import Review from "./Reviews/Review";
import WhyChoose from "./WhyChoose/WhyChoose";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";


const Home = () => {

    // Initialize AOS
    useEffect(() =>{
      const initAOS = async() => {
          AOS.init({
              duration: 1000,
              easing: 'ease',
              once: true,
              anchorPlacement: 'top-bottom',
          })
      };
      
      initAOS();
  }, [])

  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <Newsletter />
    </div>
  )
}

export default Home;