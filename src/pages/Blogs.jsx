import blogBanner from "../assets/images/BLOG-BANNER.-1.webp";
// import { blogs } from "../data/blog";
import BlogCard from "../components/common/card/BlogCard";
import { useSelector } from "react-redux";
import Layouts from "../components/UI/Layouts";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  return (
    <Layouts>
      <img className="w-full" src={blogBanner} alt="Banner" />
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-wrap mt-4 lg:mt-10">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="md:w-1/2 lg:w-1/4 p-3">
              <BlogCard product={blog} isBlogPage={true} />
            </div>
          );
        })}
      </div>
    </Layouts>
  );
};

export default Blogs;
