// import { blogs } from "../../data/blog";
import BlogCard from "../common/card/BlogCard";
import CustomSwiper from "./CustomSwiper";
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
