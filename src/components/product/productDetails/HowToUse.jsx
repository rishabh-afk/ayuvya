import React from "react";

const HowToUse = ({ how_to_use_section, recommendation }) => {
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
                <div className="flex flex-wrap mx-3 md:mx-8 lg:mx-24 pt-5 justify-center">
                  {item.step.map((e) => {
                    return (
                      <div
                        key={e.id}
                        className="w-full md:w-1/2 flex flex-col gap-2 py-5 items-center justify-start"
                      >
                        <figure>
                          <img
                            loading="lazy"
                            className="w-16 cursor-none lg:cursor-pointer"
                            src={e.image}
                            alt={e.title}
                          />
                        </figure>
                        <figcaption>
                          <h2 className="text-2xl font-semibold">{e.title}</h2>
                          <p className="text-lg font-medium">{e.description}</p>
                        </figcaption>
                      </div>
                    );
                  })}
                  {item?.note.length > 0 && (
                    <div className="mx-4 md:mx-8 lg:mx-24 mt-5">
                      {item.note.map((note, index) => {
                        return (
                          <div key={note?.id}>
                            <p className="text-sm font-medium pb-2">
                              <span className="font-semibold">
                                Note {index + 1} :-{" "}
                              </span>
                              {note?.note}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </>
      )}
      {recommendation.length > 0 && (
        <div className="text-center mx-4 md:mx-16 lg:mx-32">
          <p className="text-xl md:text-4xl font-semibold">
            is recommended with
          </p>
          <div className="flex flex-wrap my-5">
            {recommendation.map((e) => {
              return (
                <div
                  key={e.id}
                  className="w-full md:w-1/2 flex flex-col py-5 items-center justify-start gap-2"
                >
                  <figure>
                    <img
                      className="w-16 cursor-none lg:cursor-pointer"
                      src={e.image}
                      alt={e.title}
                    />
                  </figure>
                  <figcaption>
                    <h2 className="text-2xl font-semibold">{e.title}</h2>
                    <p className="text-lg font-medium">{e.description}</p>
                  </figcaption>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default HowToUse;
