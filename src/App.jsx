import React, { useEffect, useRef, useState } from "react";

import lim1 from "../src/assets/limited1.png";
import lim2 from "../src/assets/limited2.jpg";

import TitleSection from "./components/TitleSection";
import FavoriteSection from "./components/FavoriteSection";
import LimitedSection from "./components/LimitedSection";
import SwipeSection from "./components/SwipeSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
const App = () => {
  const carousel = useRef();
  const favCarousel = useRef();

  return (
    <section className="flex h-full w-full flex-col">
      <TitleSection />

      <FavoriteSection carouselRef={favCarousel}/>

      <LimitedSection pic={lim1} title={"TRUFFLE MUSHROOM DELUXE"} bg={'bg-primary-orange'} textHighlight={'text-primary-orange'}/>

      <SwipeSection carouselRef={carousel} />

      <LimitedSection pic={lim2} title={"PEPPERONI CHEESY DELIGHT"} bg={'bg-accent-black'} textHighlight={'text-primary-red'}/>

      <Testimonials carouselRef={carousel}/>

      <ContactSection />
    </section>
  );
};

export default App;
