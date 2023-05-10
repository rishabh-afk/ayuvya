import React from "react";

const HowToUse = ({ data }) => {
  return (
    <div className="mx-auto text-center my-10">
      <h2 className="text-5xl font-semibold">How to use {data.title}</h2>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full md:w-1/3 flex justify-center p-4"
            >
              <figure src={item.image} alt={item.title} className="" />
              <figcaption>
                <h2 className="text-2xl font-semibold">Step {item.title}</h2>
                <p className="">{item.description}</p>
              </figcaption>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowToUse;
