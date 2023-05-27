import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import swiperCards from "../../data/swiperCards";
import sides from "../../data/sides";
const SwipeSection = ({ carouselRef }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const [activeSide, setActiveSide] = useState("sides");

  return (
    <>
      <section className="hidden w-full flex-col gap-8 overflow-x-hidden bg-primary-orange py-16 lg:flex">
        <div className="mb-0 flex flex-col items-center justify-center">
          <h1 className="font-oswald text-6xl font-semibold text-white">
            SWIPE YOUR SLICE
          </h1>
          <h2 className="font-berk text-2xl text-white">swipe away</h2>
        </div>

        <motion.div
          ref={carouselRef}
          className="carousel cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel flex"
          >
            {swiperCards.map((card, index) => {
              return (
                <motion.div key={index} className="item min-w-[27rem]  p-10">
                  <div className="flex h-[28rem] flex-col gap-4 rounded-2xl bg-accent-black p-12 shadow-xl">
                    <div className="flex w-full cursor-default justify-center">
                      <img
                        src={card.img}
                        alt="slide_image"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-0">
                      <h3 className="text-md font-berk text-primary-orange">
                        {card.category}
                      </h3>
                      <h1 className="font-oswald text-4xl font-bold text-white">
                        {card.name}
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col items-center justify-center gap-0">
                        <h3 className="text-md text-center font-berk text-primary-orange">
                          Ingredients
                        </h3>
                        <div className="flex flex-col gap-0 font-berk text-xl text-white">
                          {card.ingredients.map((ingredients, index) => {
                            return (
                              <h2 className="" key={index}>
                                {ingredients}
                              </h2>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-center gap-4 font-berk">
                        <h1 className="text-5xl text-primary-orange">
                          ${card.price}
                        </h1>
                        <div className="flex">
                          <button className="rounded-xl bg-primary-orange px-4 py-1 text-2xl text-black shadow-lg">
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="flex w-full items-center justify-center gap-4">
            {swiperCards.map((swipe, index) => {
              return (
                <div className="cursor-pointer" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="font-oswald text-6xl font-semibold text-white">
            CHOOSE A PARTNER
          </h1>
          <h2 className="font-berk text-2xl text-white">
            add a side to your main
          </h2>
        </div>

        <div className="flex w-full items-center justify-center bg-white py-8">
          <div className="grid w-2/3 grid-cols-2 gap-20">
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="font-oswald text-4xl font-bold text-primary-orange">
                SIDES
              </h1>
              <div className="grid grid-cols-2 gap-10">
                {sides.map((item, index) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-center gap-2"
                      key={index}
                    >
                      <img src={item.pic} alt="pic" className="w-3/5" />
                      <h2 className="font-berk text-primary-orange">
                        {item.name}
                      </h2>
                      <button className="w-1/3 rounded-2xl bg-primary-orange text-center font-berk text-xl text-white shadow-xl">
                        Add
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="font-oswald text-4xl font-bold text-primary-red">
                DESSERT
              </h1>
              <div className="grid grid-cols-2 gap-10">
                {sides.map((item, index) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-center gap-2"
                      key={index}
                    >
                      <img src={item.pic} alt="pic" className="w-3/5" />
                      <h2 className="font-berk text-primary-red">
                        {item.name}
                      </h2>
                      <button className="w-1/3 rounded-2xl bg-primary-red text-center font-berk text-xl text-white shadow-xl">
                        Add
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-1 flex w-full flex-col bg-primary-orange pt-4 lg:hidden">
        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="w-full  text-center font-oswald text-4xl font-bold text-white">
            SWIPE YOUR SLICE
          </h2>
          <h3 className="font-berk text-xl text-white">swipe away</h3>
        </div>

        <motion.div
          ref={carouselRef}
          className="carousel cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel flex"
          >
            {swiperCards.map((card, index) => {
              return (
                <motion.div
                  key={index}
                  className="item flex min-w-[25rem] flex-col items-center justify-center gap-4 p-10"
                >
                  <div className="relative h-[10rem]">
                    <img src={card.img} alt="" className="h-full" />
                    <div className="absolute -bottom-2 flex w-full items-center justify-center font-berk text-2xl text-white">
                      <button className="rounded-xl bg-primary-red px-2 shadow-xl ">
                        Order
                      </button>
                    </div>
                  </div>
                  <div className="relative flex h-[12rem] w-full flex-col rounded-2xl bg-accent-black p-4 text-white shadow-xl">
                    <h2 className="font-berk text-xl ">{card.category}</h2>
                    <h1 className="font-oswald text-3xl font-bold leading-5">
                      {card.name}
                    </h1>
                    <div className="my-2 h-[0.3rem] w-2/3 bg-white" />
                    <div className="font-lg flex flex-col pl-2 text-left font-berk text-primary-orange">
                      {card.ingredients.map((item, indexI) => {
                        return <h3 key={indexI}>{item}</h3>;
                      })}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="absolute right-full rotate-12 font-berk text-6xl font-bold text-primary-orange">
                        $
                      </span>
                      <div className="bg-full flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-primary-orange font-berk text-6xl text-accent-black">
                        <h1 className="-mt-2">12 </h1>
                        <span className="text-xl">.99</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="flex w-full flex-col gap-4 bg-white px-4 py-8">
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="w-full  text-center font-oswald text-4xl font-bold text-primary-red">
              CHOOSE A PARTNER
            </h2>
            <h3 className="font-berk text-xl text-primary-red">
              add a side to your main
            </h3>
          </div>

          <div className="mx-auto flex w-1/3 justify-center gap-4 font-oswald text-2xl text-primary-red">
            <div className="flex flex-1 flex-col gap-1">
              <h2
                className="cursor-pointer"
                onClick={() => {
                  setActiveSide("sides");
                }}
              >
                SIDES
              </h2>
              {activeSide === "sides" && (
                <div className="h-[0.2rem] w-full bg-primary-red"></div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <h2
                className="cursor-pointer text-primary-orange"
                onClick={() => {
                  setActiveSide("desserts");
                }}
              >
                DESSERTS
              </h2>
              {activeSide === "desserts" && (
                <div className="h-[0.2rem] w-full bg-primary-orange"></div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid w-3/4 grid-cols-2 gap-2 gap-x-10">
              {activeSide === "sides" ? (
                <>
                  {sides.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex h-[7rem] flex-col items-center justify-center gap-2 rounded-2xl bg-primary-red p-2 shadow-xl"
                      >
                        <div className="flex h-[75%] w-full items-center justify-center">
                          <img src={item.pic} alt="" />
                        </div>
                        <div className="flex flex-col items-center font-berk text-white">
                          <h1 className="text-sm">{item.name}</h1>
                          <h2 className="text-[1.4rem] leading-5">
                            {item.price}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                {sides.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex h-[7rem] flex-col items-center justify-center gap-2 rounded-2xl bg-primary-orange p-2 shadow-xl"
                  >
                    <div className="flex h-[75%] w-full items-center justify-center">
                      <img src={item.pic} alt="" />
                    </div>
                    <div className="flex flex-col items-center font-berk text-white">
                      <h1 className="text-sm">{item.name}</h1>
                      <h2 className="text-[1.4rem] leading-5">{item.price}</h2>
                    </div>
                  </div>
                );
              })}</>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SwipeSection;
