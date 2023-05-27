import React, { useEffect, useState } from "react";

const LimitedSection = ({ pic, title, bg, textHighlight }) => {
  const [name, setName] = useState(title.split(" "));
  return (
    <>
      <section className="hidden w-full items-center gap-10 py-24 pr-10 lg:flex ">
        <div className="relative h-[40rem] flex-[3] drop-shadow-2xl">
          <h1 className="absolute bottom-4 right-4 text-right font-oswald text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            {name[0]} <br />{" "}
            {name.map((text, index) => {
              if (index !== 0) return <span key={index}>{text} </span>;
            })}
          </h1>
          <img
            src={pic}
            alt=""
            className="block h-full w-full rounded-lg object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 bg-primary-red px-6 py-10 text-white drop-shadow-3xl">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-oswald text-5xl font-bold">LIMITED OFFER</h1>
            <h3 className="font-berk text-lg">ends at June</h3>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-berk text-xl">Ingredients</h2>
            <div className="text-md flex flex-col gap-1 pl-10 font-berk">
              <h3 className="">Truffle-infused cream sauce</h3>
              <h3 className="">Mozzarella cheese</h3>
              <h3 className="">Sauteed Mushrooms</h3>
              <h3 className="">Parmesan Cheese</h3>
            </div>
          </div>

          <div className="mb-2 bg-white p-4 font-berk text-sm text-primary-red">
            <p className="">
              Indulge in the exquisite flavors of our Truffle Mushroom pizza.
              This gourmet delight showcases a truffle-infused cream sauce as
              the base, topped with a generous amount of sautéed mushrooms,
              mozzarella cheese, and a sprinkle of Parmesan.
            </p>
          </div>

          <div className="relative w-full bg-primary-orange font-berk text-white">
            <h2 className="absolute -top-1/3 ml-2 text-2xl">Crust</h2>
            <h3 className="text-md p-3 text-center">
              Hand-tossed thin crust or New York-style
            </h3>
          </div>

          <div className="relative w-full bg-primary-orange font-berk text-white">
            <h2 className="absolute -top-1/3 ml-2 text-2xl">Size</h2>
            <h3 className="text-md p-3 text-center">
              Available in 12-inch and 16-inch sizes
            </h3>
          </div>

          <div className="relative w-full bg-primary-orange font-berk text-white">
            <h2 className="absolute -top-1/3 ml-2 text-2xl">Add-ons</h2>
            <h3 className="text-md p-3 text-center">
              Fresh arugula, truffle oil drizzle
            </h3>
          </div>
        </div>
      </section>

      <section
        className={`flex lg:hidden ${bg} flex-col justify-center gap-2 px-5 py-3`}
      >
        <h2 className="font-oswald text-3xl font-bold text-white">
          LIMITED OFFER
        </h2>
        <div className="relative flex flex-col">
          <div className="relative h-full max-h-[10rem] w-full overflow-hidden rounded-xl shadow-2xl">
            <img
              src={pic}
              alt=""
              className="h-full w-full bg-cover object-center"
            />
            <div className="absolute right-0 top-4 rounded-l-3xl bg-accent-black/60 px-1 pl-2 font-oswald text-lg font-black text-white">
              {title}
            </div>
          </div>
          <div className={`absolute -bottom-2 left-4 flex items-center justify-center gap-2 font-oswald text-sm font-bold ${textHighlight}`}>
            <button className="rounded-sm bg-white px-1 shadow-lg">
              CRUST
            </button>
            <button className="rounded-sm bg-white px-1 shadow-lg">SIZE</button>
            <button className="rounded-sm bg-white px-1 shadow-lg">
              ADD-ONS
            </button>
          </div>
        </div>
        <h3 className="w-full text-right font-berk text-2xl text-white">
          ends at June
        </h3>
      </section>
    </>
  );
};

export default LimitedSection;
