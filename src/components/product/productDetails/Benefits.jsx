import React from "react";

const Benefits = ({ benefits, title }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-5xl font-bold mb-5">Benefits of {title}</h2>
      <div className="flex flex-wrap justify-center">
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className="w-1/3 p-6 flex justify-center">
              <img src={benefit.benefit_image} alt="" className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
