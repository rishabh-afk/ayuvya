import axios from "axios";
import config from "../config/config";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Layouts from "../components/UI/Layouts";
import Loader from "../components/common/Loader";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.products);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const BASE_URL = config.REACT_APP_BASE_URL;
        if (slug) {
          const resp = await axios.get(`${BASE_URL}api/blogs/test/${slug}/`);
          setBlog(resp.data);
        }
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/blogs");
        }
      }
    };
    fetchBlog();
  }, [navigate, slug]);

  if (!blog) {
    return <Loader />;
  }

  return (
    <Layouts>
      <div className="max-w-7xl mx-auto p-6 lg:px-24 lg:py-10">
        <h2 className="text-3xl font-bold">{blog.blog_title}</h2>
        <p className="text-md py-4 text-gray-500 font-medium">{blog.date}</p>
        <div className="flex flex-wrap h-auto">
          <div className="w-full h-fit lg:w-3/4 flex flex-col justify-center lg:pr-8 lg:pt-2 rounded-lg">
            <img
              src={blog.blog_image}
              alt={blog.blog_title}
              className="w-full rounded-lg object-cover"
            />
            <p className="py-8 text-xl">{blog.blog_description}</p>
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
          dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
        />
      </div>
    </Layouts>
  );
};

export default BlogDetail;


// {blog?.related_product.map((product) => {
//   return (
//     <div key={product.id} className="w-1/2 lg:w-[90%]">
//       <ProductCard product={product} isNotSwiperProduct={true} />
//     </div>
//   );
// })}
