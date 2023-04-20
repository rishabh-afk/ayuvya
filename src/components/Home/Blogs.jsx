import BlogCard from "../common/card/BlogCard";
import CustomSwiper from "../common/custom/CustomSwiper";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../store/slices/blogSlice";
import { useEffect } from "react";

const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  const blogs = useSelector((state) => state.blog.blogs);
  return (
    <div className="max-w-7xl m-auto">
      <CustomSwiper
        data={blogs}
        category="Blogs"
        cardHeadingSize="text-2xl"
        marginHorizontal={"md:mx-20"}
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
