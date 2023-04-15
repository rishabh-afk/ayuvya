import { blogs } from "../../data/blog";
import BlogCard from "../common/card/BlogCard";
import CustomSwiper from "./CustomSwiper";

const Blogs = () => {
  return (
    <div className="max-w-7xl m-auto mt-10">
      <CustomSwiper
        data={blogs}
        category="Blogs"
        cardHeadingSize="text-2xl"
        componentToBeRender={BlogCard}
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
    </div>
  );
};

export default Blogs;
