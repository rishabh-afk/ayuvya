import HeadingText from "../product/HeadingText";
import CustomSwiper from "../common/custom/CustomSwiper";
import ConcernCard from "../common/card/ConcernCard";
import { useSelector } from "react-redux";

const ShopByConcern = () => {
  const categories = useSelector((state) => state.common.categories);
  return (
    <div className="bg-[#f8f9fa] p-6 pb-0 flex flex-col gap-10">
      <div>
        <HeadingText heading={"Shop By Concern"} />
      </div>
      <div>
        <CustomSwiper
          data={categories.slice(0, 6)}
          componentToBeRender={ConcernCard}
          marginHorizontal="mx-0"
          noOfSlidePerView={[
            {
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              980: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ShopByConcern;
