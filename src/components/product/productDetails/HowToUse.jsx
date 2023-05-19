import React from "react";

const HowToUse = ({ how_to_use_section }) => {
  return (
    <>
      {how_to_use_section.length > 0 && (
        <>
          {how_to_use_section.map((item) => {
            return (
              <div key={item.id} className="mx-auto text-center my-10">
                <h2 className="text-2xl md:text-4xl font-semibold">
                  How to use {item.title}
                </h2>
                <div className="flex flex-wrap justify-center mt-5">
                  {item.step.map((e) => {
                    return (
                      <div
                        key={e.id}
                        className="w-full md:w-1/3 flex flex-col items-center gap-2 justify-center p-4"
                      >
                        <figure>
                          <img src={e.image} alt={e.title} />
                        </figure>
                        <figcaption>
                          <h2 className="text-2xl font-semibold">{e.title}</h2>
                          <p className="">{e.description}</p>
                        </figcaption>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default HowToUse;
