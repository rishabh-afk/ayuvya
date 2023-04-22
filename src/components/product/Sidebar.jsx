import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CustomSwiper from "../common/custom/CustomSwiper";
import ConcernCard from "../common/card/ConcernCard";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const categories = useSelector((state) => state.common.categories);
  return (
    <>
      <div className="hidden lg:block">
        <h2 className="text-3xl font-medium pb-5">Categories</h2>
        <ul className="flex flex-col gap-5">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link to={`/${category.category_slug}`} className="text-md">
                  {location.pathname === `/${category.category_slug}` ? (
                    <span className="font-bold">{category.category_name}</span>
                  ) : (
                    <span>{category.category_name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:hidden">
        <CustomSwiper
          data={categories.slice(0, 6)}
          componentToBeRender={ConcernCard}
          marginHorizontal="mx-4"
          navigation={false}
          noOfSlidePerView={[
            {
              0: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 5,
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
    </>
  );
};

export default Sidebar;
