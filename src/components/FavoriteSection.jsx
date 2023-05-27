import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pizz1 from "../../src/assets/pizza1.png";
import pizz2 from "../../src/assets/pizza2.png";
import pizz3 from "../../src/assets/pizza3.png";
import favPizza from "../../data/favPizza";

const FavoriteSection = ({ carouselRef }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <>
      <section className="hidden w-full flex-col bg-accent-black lg:flex">
        <div className="flex pr-16">
          <div className="flex-1"></div>
          <div className="h-6 flex-[2] bg-accent-orange shadow-lg"></div>
        </div>

        <div className="mb-4 flex flex-col py-10">
          <div className="mb-14 flex flex-col items-center justify-center">
            <h1 className="font-oswald text-6xl font-semibold text-white">
              TOP FAVORITE PIZZAS
            </h1>
            <h2 className="font-berk text-2xl text-white">have a go at it</h2>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="grid grid-cols-3 gap-10">
              <div className="relative flex flex-col bg-primary-red py-6">
                <div className="absolute -top-10">
                  <img src={pizz1} alt="" />
                </div>
                <div className=" mt-16 flex flex-col items-center gap-4 px-6 py-2">
                  <h1 className="font-oswald text-5xl font-bold text-white">
                    MARGHERITA
                  </h1>
                  <div className="flex h-[12rem] flex-col gap-2">
                    <p className="text-md max-w-[16rem] font-berk">
                      Features a thin and crispy crust topped with rich tomato
                      sauce, fresh mozzarella cheese, and aromatic basil leaves
                    </p>
                    <p className="text-md max-w-[16rem] font-berk">
                      Simple yet satisfying, the Margherita pizza is a true
                      Italian delight.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex h-24 max-h-[2.5rem] w-full justify-end">
                  <div className="flex w-[50%] justify-end bg-accent-orange drop-shadow-4xl">
                    <button className="w-[90%] bg-white font-berk text-xl text-accent-orange">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col bg-primary-orange py-6">
                <div className="absolute -top-10">
                  <img src={pizz2} alt="" />
                </div>
                <div className=" mt-16 flex flex-col items-center gap-4 px-6 py-2">
                  <h1 className="font-oswald text-5xl font-bold text-white">
                    BBQ CHICKEN
                  </h1>
                  <div className="flex h-[12rem] flex-col gap-2">
                    <p className="text-md max-w-[16rem] font-berk">
                      Combination of tender, marinated chicken breast, tangy
                      barbecue sauce, melted mozzarella cheese, red onions, and
                      fresh cilantro.
                    </p>
                    <p className="text-md max-w-[16rem] font-berk">
                      This pizza is a delightful fusion of barbecue goodness and
                      pizza perfection.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex h-24 max-h-[2.5rem] w-full justify-end">
                  <div className="flex w-[50%] justify-end bg-accent-orange drop-shadow-4xl">
                    <button className="w-[90%] bg-white font-berk text-xl text-accent-orange">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col bg-white py-6">
                <div className="absolute -top-10">
                  <img src={pizz3} alt="" />
                </div>
                <div className=" mt-16 flex flex-col items-center gap-4 px-6 py-2">
                  <h1 className="font-oswald text-5xl font-bold text-primary-red">
                    TRUFFLE
                  </h1>
                  <div className="flex h-[12rem] flex-col gap-2">
                    <p className="text-md max-w-[16rem] font-berk">
                      This gourmet delight showcases a truffle-infused cream
                      sauce as the base, topped with a generous amount of
                      sautéed mushrooms, mozzarella cheese.
                    </p>
                    <p className="text-md max-w-[16rem] font-berk">
                      This pizza is a sophisticated treat for your taste buds.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex h-24 max-h-[2.5rem] w-full justify-end">
                  <div className="flex w-[50%] justify-end bg-primary-red drop-shadow-4xl">
                    <button className="w-[90%] bg-white font-berk text-xl text-primary-red">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white pb-2 lg:hidden">
        <div className="h-[0.5rem] w-full bg-primary-orange" />
        <div className="h-full w-full py-2">
          <h2 className="px-5 font-oswald text-3xl font-bold text-accent-black">
            FAVORITE <span className="text-primary-orange">PIZZAS</span>
          </h2>

          <motion.div
            ref={carouselRef}
            className="carousel cursor-grab overflow-hidden "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel flex "
            >
              {favPizza.map((fav, index) => {
                return (
                  <motion.div
                    key={index}
                    className="item flex min-w-[25rem] flex-col items-center justify-center gap-0 p-4"
                  >
                    <div className="relative h-[12rem] w-full rounded-xl bg-primary-orange p-2 shadow-lg">
                      <img
                        src={fav.img}
                        alt="1"
                        className="absolute top-6 w-3/4 max-w-[20rem]"
                      />
                      <h2 className="absolute right-2 top-2 font-oswald text-2xl font-bold text-white">
                        {fav.name}
                      </h2>
                      <p className="absolute bottom-2 right-2 w-2/4 text-right font-berk text-[0.7rem] text-white">
                        {fav.text}
                      </p>
                      <div className="absolute bottom-4 left-2 flex  w-[10rem] justify-start py-1">
                        <div className="flex w-[50%] justify-end bg-accent-orange shadow-2xl">
                          <button className="w-[90%] bg-white font-berk text-lg text-accent-orange">
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FavoriteSection;
