import React from "react";

const SafeAndEffective = ({ safe_and_effective }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold">100% Safe & Effective</h2>
      <div className="flex gap-4 justify-center my-10">
        {safe_and_effective.map((item) => {
          return (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className="w-28"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SafeAndEffective;
