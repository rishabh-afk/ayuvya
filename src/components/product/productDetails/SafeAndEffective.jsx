import React from "react";

const SafeAndEffective = ({ safe_and_effective }) => {
  return (
    <>
      {safe_and_effective.length > 0 && (
        <div className="text-center mt-5">
          <h2 className="text-2xl md:text-4xl font-semibold">100% Safe & Effective</h2>
          <div className="flex flex-wrap gap-4 justify-center my-10">
            {safe_and_effective.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className="w-24 md:w-28"
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SafeAndEffective;
