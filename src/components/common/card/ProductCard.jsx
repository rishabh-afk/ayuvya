import { Link } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ itemObj, headingSize }) => {
  const items = new Array(Math.round(itemObj.rating)).fill(null);
  const buyNow = async (product) => {
    console.log("clicked");
  };
  return (
    <Link
      to={`/${itemObj.product_category.category_slug}${itemObj.get_product_url}`}
    >
      <CardHoc className="bg-white cursor-none lg:cursor-pointer my-10">
        <figure className="w-auto">
          <img
            className="h-56 object-cover rounded-t-lg"
            src={itemObj.primary_image}
            alt=""
          />
        </figure>
        <figcaption className="flex flex-col items-center text-center p-4 gap-2 h-56">
          <h1 className={`font-semibold ${headingSize}`}>
            {itemObj.product_name.slice(0, 40)}{" "}
            {itemObj.product_name.length > 40 && <span>...</span>}
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            {items.map((item, i) => {
              return <AiFillStar key={i} size={20} color="yellowGreen" />;
            })}
            <span className="px-2 break-words">
              {Math.round(itemObj.rating)}
            </span>
            <span className="break-words">
              ({itemObj.review_count}+ Reviews)
            </span>
          </div>
          <div className="flex gap-2">
            <span className="line-through">₹ {itemObj.cut_price}</span>
            <span className="">₹ {itemObj.price}</span>
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
