import { useLocation } from "react-router-dom";
import Layouts from "../components/UI/Layouts";
import { useEffect } from "react";
import { setCurrentBlog } from "../store/slices/blogSlice";
import axios from "axios";
import Loader from "../components/common/Loader";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import config from "../config/config";

const BlogDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { blogSlug } = location?.state ?? "";
  const blogData = useSelector((state) => state.blog.blogDetails);
  const productData = useSelector((state) => state.product.products);
  useEffect(() => {
    const fetchBlog = async () => {
      const BASE_URL = config.REACT_APP_BASE_URL;
      if (blogSlug) {
        const resp = await axios.get(`${BASE_URL}api/blogs/test/${blogSlug}/`);
        dispatch(setCurrentBlog(resp.data));
      }
    };
    fetchBlog();
  }, [dispatch, blogSlug]);

  if (!blogData) {
    return <Loader />;
  }

  return (
    <Layouts>
      <div className="max-w-7xl mx-auto p-6 lg:px-24 lg:py-10">
        <h2 className="text-3xl font-bold">{blogData.blog_title}</h2>
        <p className="text-md py-4 text-gray-500 font-medium">
          {blogData.date}
        </p>
        <div className="flex flex-wrap h-auto">
          <div className="w-full h-fit lg:w-3/4 flex flex-col justify-center lg:pr-8 lg:pt-2 rounded-lg">
            <img
              src={blogData.blog_image}
              alt={blogData.blog_title}
              className="w-full rounded-lg object-cover"
            />
            <p className="py-8 text-xl">{blogData.blog_description}</p>
          </div>
          <div className="w-full flex flex-row gap-4 mb-8 lg:flex-col lg:w-1/4">
            {productData.slice(18, 20).map((product) => {
              return (
                <div key={product.id} className="w-1/2 lg:w-[90%]">
                  <ProductCard product={product} isNotSwiperProduct={true} />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="w-full lg:w-3/4 text-lg"
          dangerouslySetInnerHTML={{ __html: `${blogData.content}` }}
        />
      </div>
    </Layouts>
  );
};

export default BlogDetail;
