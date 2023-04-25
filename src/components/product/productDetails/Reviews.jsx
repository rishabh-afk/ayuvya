import CustomSwiper from "../../common/custom/CustomSwiper";
import Reviewcard from "../../common/card/Reviewcard";

const Reviews = ({ reviews, review_count }) => {
  return (
    <>
      <h2 className="border-b-2 border-[#182d4a] w-fit mx-4 lg:mx-20 font-semibold">
        Reviews ({review_count})
      </h2>
      <CustomSwiper
        data={reviews}
        componentToBeRender={Reviewcard}
        navigation={false}
        marginHorizontal={"md:mx-20 mx-4"}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          },
        ]}
      />
    </>
  );
};

export default Reviews;
