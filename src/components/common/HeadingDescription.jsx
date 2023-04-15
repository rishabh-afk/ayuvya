import React from "react";

const HeadingDescription = (props) => {
  return (
    <div className="py-2">
      <h2 className="text-xl font-semibold">{props.heading}</h2>
      <p className="text-[17px]">{props.description}</p>
    </div>
  );
};

export default HeadingDescription;
