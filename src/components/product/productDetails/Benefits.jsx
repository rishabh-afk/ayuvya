import React from "react";

const Benefits = ({ benefits, title }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl lg:text-5xl font-bold mb-5">
        Benefits of {title}
      </h2>
      <div className="flex flex-wrap justify-center">
        {benefits?.benefit.map((benefit, index) => {
          return (
            <div
              key={benefit?.id}
              className="w-full lg:w-1/3 p-2 lg:p-6 flex justify-center"
            >
              <img src={benefit?.benefit_image} alt={benefit?.id} className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
