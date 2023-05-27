import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import testimonials from "../../data/testimonals";
const Testimonials = ({ carouselRef }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
      <section className="hidden w-full flex-col bg-accent-black lg:flex">
        <div className="flex pr-16">
          <div className="h-6 flex-[3] bg-accent-orange shadow-lg"></div>
          <div className="flex-1 pl-14"></div>
        </div>

        <div className="mb-4 flex flex-col py-10">
          <div className="mb-10 flex flex-col items-center justify-center">
            <h1 className="font-oswald text-6xl font-semibold text-white">
              TESTIMONIALS
            </h1>
            <h2 className="font-berk text-2xl text-white">
              what others have said
            </h2>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="grid grid-cols-3 gap-10">
              <div className="relative flex flex-col gap-2 bg-primary-red py-6">
                <div className="mx-auto h-32 w-32 rounded-full bg-white" />
                <div className="flex flex-col items-center gap-4 px-6 py-2">
                  <h1 className="font-berk text-5xl text-white">Sarah W.</h1>
                  <div className="flex h-[11rem] flex-col gap-2">
                    <p className="max-w-[16rem] text-center font-berk text-sm text-white">
                      "I've been ordering pizzas from this restaurant for years,
                      and they never disappoint. The Margherita pizza is my
                      all-time favorite. The crust is perfectly crispy, the
                      sauce is flavorful, and the fresh basil leaves add a nice
                      touch. It's a classic pizza done right. Highly
                      recommended!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 bg-primary-orange py-6">
                <div className="mx-auto h-32 w-32 rounded-full bg-white" />
                <div className="flex flex-col items-center gap-4 px-6 py-2">
                  <h1 className="font-berk text-5xl text-white">David L.</h1>
                  <div className="flex h-[11rem] flex-col gap-2">
                    <p className="max-w-[16rem] text-center font-berk text-sm text-white">
                      "I recently tried the Truffle Mushroom pizza, and it was a
                      taste sensation! The truffle-infused cream sauce combined
                      with the sautéed mushrooms and melted cheese created a
                      heavenly combination. The crust was just the right balance
                      of chewy and crispy. If you're a fan of truffle and
                      mushrooms, this pizza is a must-try!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 bg-white py-6">
                <div className="mx-auto h-32 w-32 rounded-full bg-primary-orange" />
                <div className="flex flex-col items-center gap-4 px-6 py-2">
                  <h1 className="font-berk text-5xl text-primary-orange">
                    Emily M.
                  </h1>
                  <div className="flex h-[11rem] flex-col gap-2">
                    <p className="max-w-[16rem] text-center font-berk text-sm text-primary-orange">
                      "The BBQ Chicken pizza from this restaurant is hands down
                      the best I've ever had. The tangy BBQ sauce, the tender
                      chicken, and the perfect amount of melted cheese make for
                      a mouthwatering combination. I also appreciate that the
                      crust is always fresh and never soggy. It's my go-to pizza
                      every time I order."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-accent-black py-10 pb-6 lg:hidden">
        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="w-full  text-center font-oswald text-4xl font-bold text-white">
            TESTIMONIALS
          </h2>
          <h3 className="font-berk text-xl text-white">other's taste</h3>
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
            {testimonials.map((person, index) => {
              return (
                <motion.div
                  key={index}
                  className="item flex min-w-[20rem] flex-col items-center justify-center gap-4 p-10"
                >
                  <div className="flex h-[18rem] w-full flex-col gap-4 rounded-3xl bg-primary-red p-4 text-center font-berk text-white shadow-xl">
                    <h2 className="text-4xl">{person.name}</h2>
                    <p className="text-sm">{person.text}</p>
                  </div>
                  <div className="h-1 w-12 bg-primary-red"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonials;
