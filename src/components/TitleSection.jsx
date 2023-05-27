import React, { useEffect, useState } from "react";
import pizz4 from "../../src/assets/pizza4.png";
import { motion } from "framer-motion";
import slides from "../../data/slides";
const TitleSection = () => {
  const [index, setIndex] = useState(0);
  const slidesVariants = {
    initial: {
      x: "300",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -200,
      opacity: 0,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <section className="relative hidden w-full justify-between overflow-hidden lg:flex">
        <div className="relative flex flex-col items-center justify-center gap-12 bg-accent-orange px-12 py-4 lg:gap-6 lg:px-8">
          <div className="title flex flex-col gap-1">
            <h1 className="lg:text-10xl text-center font-oswald text-7xl font-semibold">
              MENU
            </h1>
            <div className="text-md flex items-center justify-center gap-4 font-berk text-white lg:text-sm">
              <h2 className="">PIZZAS</h2>
              <h2 className="">SIDES</h2>
              <h2 className="">DESSERTS</h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:gap-6">
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-oswald text-4xl font-bold text-black lg:text-2xl">
                CLASSIC PIZZAS
              </h2>
              <h3 className="text-md font-berk text-white lg:text-sm">
                Margherita, Pepperoni, Hawaiian, Supreme, Veggie
              </h3>
            </div>

            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-oswald text-4xl font-bold text-black lg:text-2xl">
                GOURMET PIZZAS
              </h2>
              <h3 className="text-md font-berk text-white lg:text-sm">
                Margherita, Pepperoni, Hawaiian, Supreme, Veggie
              </h3>
            </div>

            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-oswald text-4xl font-bold text-black lg:text-2xl">
                SPECIALTY PIZZAS
              </h2>
              <h3 className="text-md font-berk text-white lg:text-sm">
                Margherita, Pepperoni, Hawaiian, Supreme
              </h3>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center lg:mb-0 lg:mt-3">
            <button
              type="button"
              className="bg-white px-16 py-1 font-berk text-3xl shadow-2xl lg:text-2xl "
            >
              Menu
            </button>
          </div>
          <div className="absolute right-48 top-20 h-32 w-32 rounded-full bg-yellow-200 blur-[6rem]" />
        </div>

        {/* <div className="flex flex-[2] items-center justify-center">
          <div className="w-2/3 min-w-[20rem]">
            <img src={pizz4} alt="Pizza" />
          </div>
        </div> */}

        <div className="flex flex-[2] items-center justify-center overflow-x-hidden">
          <motion.div
            key={index}
            variants={slidesVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-2/3 min-w-[15rem] h-[10rem]"
          >
            <img src={slides[index]} alt="" />
          </motion.div>
        </div>

        <div className="relative flex flex-col items-end pr-16">
          <div className="flex max-w-[90%] flex-col items-center justify-center bg-accent-orange p-10">
            <h2 className="mb-2 w-full text-left font-berk text-lg text-white">
              Authentic
            </h2>
            <h1 className="font-oswald text-8xl font-bold lg:text-7xl">
              PIZZARIA
            </h1>
            <h2 className="mb-4 w-full text-left font-berk text-lg">
              Indulge in the Perfect Slice
            </h2>
          </div>
          <div className="flex w-full flex-col items-end justify-center gap-10 py-12">
            <h1 className="font-oswald text-8xl font-bold  text-white lg:text-7xl">
              ORDER NOW
            </h1>
            <div className="flex w-[60%]">
              <button
                type="button"
                className="w-full bg-accent-orange py-2 font-berk text-xl text-white  shadow-2xl lg:text-lg"
              >
                Choose your perfect slice
              </button>
            </div>
          </div>
          <div className="absolute right-32 top-10 h-20 w-20 rounded-full bg-yellow-200 blur-[6rem]" />
        </div>

        <div className="absolute -top-20 flex w-full flex-1 items-center justify-center">
          <div className="mr-16 h-32 w-64 rounded-full bg-white blur-[12rem]"></div>
        </div>
        <div className="absolute -bottom-48 flex w-full flex-1 items-center justify-center">
          <div className="mr-16 h-32 w-72 rounded-full bg-black blur-[18rem]"></div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mb-20 flex w-full flex-col  gap-12 bg-[#313131] md:gap-10 lg:hidden">
        <div className="md:py-18 flex h-[5rem] flex-col items-center justify-center bg-accent-orange py-12 text-5xl text-white md:h-[8rem]">
          <h2 className="md:text-md font-berk text-[0.8rem] text-white">
            Indulge in the Perfect Slice
          </h2>
          <h1 className="font-oswald text-6xl font-bold text-accent-black md:text-8xl">
            PIZZARIA
          </h1>
        </div>

        <div className="flex flex-[2] items-center justify-center overflow-x-hidden">
          <motion.div
            key={index}
            variants={slidesVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-2/3 min-w-[15rem] h-[10rem]"
          >
            <img src={slides[index]} alt="" />
          </motion.div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="font-oswald text-5xl font-bold text-white">
            ORDER NOW
          </h1>
          <button className="bg-accent-orange px-4 py-2 font-berk text-sm text-white shadow-lg">
            Choose your perfect slice
          </button>
        </div>

        <div className="relative flex w-full flex-col items-center gap-2 bg-accent-orange px-4 pb-6 pt-2">
          <h1 className="font-oswald text-5xl font-bold text-accent-black">
            MENU
          </h1>
          <div className="text-s flex items-center justify-between gap-4 font-berk text-white">
            <h3 className="">PIZZAS</h3>
            <h3 className="">SIDES</h3>
            <h3 className="">DESSERTS</h3>
          </div>
          <div className="flex w-full items-center justify-evenly gap-4">
            <div className="relative flex h-[7.2rem] w-[5.4rem] flex-col items-center justify-start rounded-xl bg-accent-black p-2 font-oswald font-bold text-white shadow-lg">
              <h2 className="text-2xl">CLASSIC</h2>
              <h2 className="-mt-1 text-lg">PIZZAS</h2>
              <div className="absolute bottom-0 w-[110%]">
                <img src={pizz4} alt="" />
              </div>
            </div>
            <div className="relative flex h-[7.2rem] w-[5.4rem] flex-col items-center justify-start rounded-xl bg-accent-black p-2 font-oswald font-bold text-white shadow-lg">
              <h2 className="text-2xl">GOURMET</h2>
              <h2 className="-mt-1 text-lg">PIZZAS</h2>
              <div className="absolute bottom-0 w-[110%]">
                <img src={pizz4} alt="" />
              </div>
            </div>
            <div className="relative flex h-[7.2rem] w-[5.4rem] flex-col items-center justify-start rounded-xl bg-accent-black p-2 font-oswald font-bold text-white shadow-lg">
              <h2 className="text-2xl">SPECIALTY</h2>
              <h2 className="-mt-1 text-lg">PIZZAS</h2>
              <div className="absolute bottom-0 w-[110%]">
                <img src={pizz4} alt="" />
              </div>
            </div>
          </div>

          <button className="absolute -bottom-8 bg-white px-6 py-1 font-berk text-2xl text-accent-black shadow-xl">
            View Menu
          </button>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
