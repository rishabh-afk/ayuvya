import { Link } from "react-router-dom";
import CardHoc from "../../UI/cardHoc";
import Button from "../Button";

const BlogCard = ({ product, isBlogPage, marginVertical }) => {
  return (
    <Link
      to={`/blogs/${product.slug}`}
      state={{ blogSlug: product?.slug, scroll: true }}
    >
      <CardHoc
        className={`
      bg-white cursor-none lg:cursor-pointer ${marginVertical}`}
      >
        {isBlogPage && (
          <span className="absolute bg-black text-white opacity-50 px-4 py-1 rounded-tl-md rounded-br-md">
            {product.category == null ? "New" : product.category.category}
          </span>
        )}
        <figure>
          <img
            className={`rounded-t-md object-cover h-full ${
              isBlogPage ? "lg:h-64" : ""
            }`}
            src={product.blog_image}
            alt=""
          />
        </figure>
        <figcaption
          className={`${isBlogPage ? "h-48 lg:h-56" : "text-center"} p-5`}
        >
          <h2 className="text-lg pb-3 font-bold">
            {product.blog_title.length > 30
              ? product.blog_title.slice(0, 30) + "..."
              : product.blog_title}
          </h2>
          {isBlogPage && <div className="py-1">{product.date}</div>}
          {!isBlogPage && (
            <div className="flex justify-center">
              <Button className="bg-black text-white rounded-lg">
                <span>Read More</span>
              </Button>
            </div>
          )}
          {isBlogPage && (
            <div className="">{product.blog_description.slice(0, 80)}...</div>
          )}
        </figcaption>
      </CardHoc>
    </Link>
  );
};

export default BlogCard;
