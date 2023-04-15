import { Link } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";

const BlogCard = ({ itemObj }) => {
  return (
    <CardHoc className="bg-white cursor-none lg:cursor-pointer my-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-y-105 duration-300">
      <figure>
        <img src={itemObj.imageUrl} alt="" />
      </figure>
      <figcaption className="text-center p-6">
        <h2 className="text-lg pb-3">{itemObj.title}</h2>
        <Link to={`blog/${itemObj.url}`} className="flex justify-center">
          <Button className="bg-black text-white rounded-lg">
            <span>Read More</span>
          </Button>
        </Link>
      </figcaption>
    </CardHoc>
  );
};

export default BlogCard;
