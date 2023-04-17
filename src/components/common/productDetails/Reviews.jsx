import React from "react";
import CustomSwiper from "../../Home/CustomSwiper";
import Reviewcard from "../card/Reviewcard";

const Reviews = ({ reviews }) => {
  return (
    <>
      <h2 className="border-b-2 border-[#182d4a] w-fit pb-2 my-5 mx-20 font-semibold">
        Reviews (2129)
      </h2>
      <CustomSwiper
        data={reviews}
        componentToBeRender={Reviewcard}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          },
        ]}
      />
    </>
  );
};

export default Reviews;
