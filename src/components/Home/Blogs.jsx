import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../common/HeadingText";
import { blogs } from "../../data/blog";
import BlogCard from "../common/BlogCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const Blogs = () => {
  return (
    <div className="max-w-7xl m-auto mt-10">
      <HeadingText heading="Blogs" />
      <div className="mx-4 md:mx-20 my-10">
        <div>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              980: {
                slidesPerView: 3,
              },
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            spaceBetween={25}
            slidesPerGroup={2}
            rewind={true}
            modules={[Navigation, Pagination]}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
