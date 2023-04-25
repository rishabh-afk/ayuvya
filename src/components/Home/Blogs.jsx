import BlogCard from "../common/card/BlogCard";
import CustomSwiper from "../common/custom/CustomSwiper";
import { useSelector } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  return (
    <div className="max-w-7xl m-auto">
      <CustomSwiper
        data={blogs}
        category="Blogs"
        navigation={false}
        cardHeadingSize="text-2xl"
        marginHorizontal={"md:mx-20 mx-4"}
        marginTop={"mt-10"}
        componentToBeRender={BlogCard}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          },
        ]}
      />
    </div>
  );
};

export default Blogs;
