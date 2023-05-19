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
        navigation={true}
        marginTop={"mt-10"}
        marginVertical={"my-10"}
        cardHeadingSize="text-2xl"
        componentToBeRender={BlogCard}
        marginHorizontal={"mx-4 md:mx-14 lg:mx-20"}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 1,
              spaceBetween:10
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          },
        ]}
      />
    </div>
  );
};

export default Blogs;
