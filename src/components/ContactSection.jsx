import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const ContactSection = () => {
  const [index, setIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const slidesVariants = {
    initial: {
      x: `${index % 2 === 1 ? "300" : "-300"}`,
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
      if (!toggle) {
        setIndex((prev) => (prev + 1) % 2);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toggle]);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <>
      <section className="hidden w-full flex-col items-center justify-center gap-20 bg-primary-orange py-20 lg:flex">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-oswald text-6xl font-semibold text-white">
            CONTACT US NOW
          </h1>
          <h2 className="font-berk text-2xl text-white">
            we're only one call away
          </h2>
        </div>

        {/* PHONE */}
        <div className="h-[25rem] w-[55rem] rounded-[3rem] bg-slate-800 p-2">
          <div className="relative flex h-full w-full justify-start overflow-hidden rounded-[2.8rem] bg-accent-black">
            <div className="absolute -top-1/3 flex w-full justify-center">
              <div className="h-72 w-72 bg-white/10 blur-3xl"></div>
            </div>
            <div className="ml-2 flex h-full flex-col items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-black/40 p-[2px]">
                <div className="h-full w-full rounded-full bg-black/60" />
              </div>
              <div className="h-4 w-4 rounded-full bg-black/40 p-[2px]">
                <div className="h-full w-full rounded-full bg-black/60" />
              </div>

              <div className="h-14 w-3 rounded-full bg-black/40 p-[2px]">
                <div className="h-full w-full rounded-full bg-black/60" />
              </div>

              <div className="h-4 w-4 rounded-full bg-black/40 p-[2px]">
                <div className="h-full w-full rounded-full bg-black/60" />
              </div>
              <div className="h-4 w-4 rounded-full bg-black/40 p-[2px]">
                <div className="h-full w-full rounded-full bg-black/60" />
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center gap-20 px-10 py-4">
              <div className="flex flex-col">
                <h2 className="font-berk text-4xl text-white">
                  Call our landline
                </h2>
                <h1 className="font-oswald text-8xl font-bold text-primary-orange">
                  8-7000
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-oswald text-5xl font-bold text-white">
                  <span className="text-primary-orange">COOK</span> US AN EMAIL
                </h1>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="rounded-xl bg-white p-4"
                />
                <div className="flex items-center justify-end">
                  <button className="rounded-md bg-primary-orange px-4 py-1 font-berk text-lg text-white shadow-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 bg-primary-orange py-8 lg:hidden">
        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="w-full  text-center font-oswald text-4xl font-bold text-white">
            CONTACT US
          </h2>
          <h3 className="font-berk text-xl text-white">
            we're only one call away
          </h3>
        </div>

        <div className="flex h-[15rem] w-4/5 flex-col overflow-hidden rounded-xl bg-slate-200 shadow-xl">
          <div className="flex h-[1.4rem] w-full items-center justify-between bg-white px-3">
            <div className="flex justify-center gap-1">
              <div className="h-3 w-3 rounded-full bg-red-400 shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-green-400 shadow-sm" />
            </div>

            <div className="h-[70%] w-[6rem] border-[1px] border-slate-200 bg-transparent shadow-sm"></div>
          </div>
          <div className="flex h-full w-full items-center justify-center gap-6">
            <motion.div
              key={index}
              variants={slidesVariants}
              animate="animate"
              initial="initial"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-2"
            >
              {index === 0 ? (
                <>
                  <h1 className="font-oswald text-4xl font-bold text-primary-orange ">
                    COOK US AN EMAIL
                  </h1>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="rounded-xl bg-white p-4 font-berk text-primary-orange outline-none"
                    onFocus={() => {
                      setToggle(true);
                    }}
                    onBlur={() => {
                      setToggle(false);
                    }}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="flex items-center justify-start">
                    <button className="rounded-lg bg-primary-orange px-3 font-berk text-lg text-white shadow-lg">
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="font-oswald text-6xl font-bold text-primary-orange">
                      8-7000
                    </h1>
                    <h2 className="font-berk text-4xl text-primary-orange">
                      Call our landline
                    </h2>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
