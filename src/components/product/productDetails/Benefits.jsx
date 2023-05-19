import React from "react";

const Benefits = ({ benefits_section, benefits, title }) => {
  return (
    <>
      {benefits_section && (
        <>
          {benefits_section.map((item) => {
            return (
              <div key={item.id} className="text-center my-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-5">
                  Benefits of {item?.title}
                </h2>
                <div className="flex flex-wrap justify-center">
                  {item?.benefit.map((benefit) => {
                    return (
                      <div
                        key={benefit?.id}
                        className="w-full md:w-1/3 p-2 md:p-6 flex justify-center"
                      >
                        <img
                          src={benefit?.benefit_image}
                          alt={benefit?.id}
                          className=""
                        />
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

export default Benefits;
