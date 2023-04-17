import { Link } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const ProductCard = ({ itemObj, headingSize, width }) => {
  console.log(itemObj);
  const items = new Array(Math.round(itemObj.rating)).fill(null);
  const [showButton, setShowButton] = useState(false);
  const buyNow = async (product) => {
    console.log("clicked");
  };
  return (
    <Link
      to={`/${itemObj?.product_category?.category_slug}${itemObj.get_product_url}`}
    >
      <CardHoc
        className={`bg-white cursor-none lg:cursor-pointer my-10 ${
          width && width
        }`}
      >
        <figure
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
          className="w-auto relative"
        >
          <img
            className="hover:opacity-50 h-56 object-cover rounded-t-lg"
            src={itemObj.primary_image}
            alt=""
          />
          {showButton && (
            <div className="opacity-70">
              <div className="absolute top-[40%] left-1/4">
                <Button className="bg-black text-white px-6 rounded-none hover:bg-gray-500 z-50">
                  <span>Buy Now</span>
                </Button>
              </div>
              <div className="bg-black w-full absolute bottom-0 text-center text-white">
                Quick View
              </div>
            </div>
          )}
        </figure>
        <figcaption className="flex flex-col items-center text-center p-4 gap-2 h-64 md:h-56">
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
