import HeadingText from "../product/HeadingText";
import CustomSwiper from "../common/custom/CustomSwiper";
import ConcernCard from "../common/card/ConcernCard";
import { useSelector } from "react-redux";
import { category } from "../../data/categories";

const ShopByConcern = () => {
  // const categories = category;
  const categories = useSelector((state) => state.common.categories);
  return (
    <>
      {categories.length > 0 && (
        <div className="bg-[#f8f9fa] flex flex-col gap-10">
          <div className="mt-10">
            <HeadingText heading={"Shop By Concern"} />
          </div>
          <div>
            <CustomSwiper
              data={categories.slice(0, 6)}
              // category="Shop By Concern"
              componentToBeRender={ConcernCard}
              navigation={false}
              // marginTop={"mt-10"}
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
      )}
    </>
  );
};

export default ShopByConcern;
