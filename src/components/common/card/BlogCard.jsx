import { Link } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";

const BlogCard = ({ itemObj, isBlogPage }) => {
  return (
    <CardHoc
      className="
      bg-white cursor-none lg:cursor-pointer mb-10"
    >
      {isBlogPage && (
        <span className="absolute bg-black text-white opacity-50 px-4 rounded-tl-md rounded-br-md">
          {itemObj.category}
        </span>
      )}
      <figure>
        <img className="rounded-t-md" src={itemObj.imageUrl} alt="" />
      </figure>
      <figcaption className={`${isBlogPage ? "h-48" : "text-center"} p-6`}>
        <h2 className="text-lg pb-3 font-bold">{itemObj.title.slice(0, 25)}</h2>
        {isBlogPage && <div className="py-1">{itemObj.date}</div>}
        {!isBlogPage && (
          <Link to={`blog/${itemObj.url}`} className="flex justify-center">
            <Button className="bg-black text-white rounded-lg">
              <span>Read More</span>
            </Button>
          </Link>
        )}
        {isBlogPage && <div className="">{itemObj.description}</div>}
      </figcaption>
    </CardHoc>
  );
};

export default BlogCard;
