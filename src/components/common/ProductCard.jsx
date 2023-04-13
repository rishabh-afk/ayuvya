import { Link } from "react-router-dom";
import CardHoc from "../UI/CardHoc";
import Button from "./Button";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product, headingSize }) => {
  const items = new Array(Math.round(product.rating)).fill(null);
  const buyNow = async (product) => {
    console.log("clicked");
  };
  return (
    <Link
      to={`/${product.product_category.category_slug}${product.get_product_url}`}
    >
      <CardHoc className="cursor-none lg:cursor-pointer my-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-y-105 duration-300">
        <figure className="w-auto">
          <img className="rounded-t-lg" src={product.primary_image} alt="" />
        </figure>
        <figcaption className="flex flex-col items-center text-center p-4 gap-2">
          <h1 className={`font-semibold ${headingSize}`}>
            {product.product_name.slice(0, 40)}{" "}
            {product.product_name.length > 40 && <span>...</span>}
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            {items.map((item, i) => {
              return <AiFillStar key={i} size={20} color="yellowGreen" />;
            })}
            <span className="px-2 break-words">
              {Math.round(product.rating)}
            </span>
            <span className=" break-words">
              ({product.review_count}+ Reviews)
            </span>
          </div>
          <div className="flex gap-2">
            <span className="line-through">₹ {product.cut_price}</span>
            <span className="">₹ {product.price}</span>
          </div>
          <Button handler={buyNow} className="bg-black text-white rounded-lg">
            Buy Now
          </Button>
        </figcaption>
      </CardHoc>
    </Link>
  );
};

export default ProductCard;
