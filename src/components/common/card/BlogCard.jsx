import { Link } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";

const BlogCard = ({ itemObj, isBlogPage }) => {
  return (
    <Link
      to={`/blogs/${itemObj.slug}`}
      state={{ blogSlug: itemObj?.slug, scroll: true }}
    >
      <CardHoc
        className="
      bg-white cursor-none lg:cursor-pointer my-1 lg:my-0"
      >
        {isBlogPage && (
          <span className="absolute bg-black text-white opacity-50 px-4 rounded-tl-md rounded-br-md">
            {itemObj.category.category}
          </span>
        )}
        <figure>
          <img className="rounded-t-md" src={itemObj.blog_image} alt="" />
        </figure>
        <figcaption className={`${isBlogPage ? "h-48" : "text-center"} p-6`}>
          <h2 className="text-lg pb-3 font-bold">
            {itemObj.blog_title.slice(0, 25)}
          </h2>
          {isBlogPage && <div className="py-1">{itemObj.date}</div>}
          {!isBlogPage && (
            <div className="flex justify-center">
              <Button className="bg-black text-white rounded-lg">
                <span>Read More</span>
              </Button>
            </div>
          )}
          {isBlogPage && (
            <div className="">{itemObj.blog_description.slice(0, 50)}...</div>
          )}
        </figcaption>
      </CardHoc>
    </Link>
  );
};

export default BlogCard;
