import CustomSwiper from "../../common/custom/CustomSwiper";
import Reviewcard from "../../common/card/Reviewcard";

const Reviews = ({ reviews }) => {
  return (
    <>
      <h2 className="border-b-2 border-[#182d4a] w-fit pb-2 my-5 mx-20 font-semibold">
        Reviews (2129)
      </h2>
      <CustomSwiper
        data={reviews}
        componentToBeRender={Reviewcard}
        navigation={false}
        marginHorizontal={"md:mx-20"}
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
