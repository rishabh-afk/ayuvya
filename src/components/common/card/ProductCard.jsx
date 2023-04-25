import { Link } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";
// import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const ProductCard = ({
  itemObj,
  headingSize,
  width,
  marginVertical,
  isProductPage,
}) => {
  // const items = new Array(Math.round(itemObj?.rating)).fill(null);
  const [showButton, setShowButton] = useState(false);
  const buyNow = async (product) => {};

  return (
    <Link
      to={`/${itemObj?.product_category?.category_slug}/${itemObj?.product_slug}`}
      state={{ productId: itemObj?.id, scroll: true }}
    >
      <CardHoc
        className={`bg-white cursor-none lg:cursor-pointer ${marginVertical} ${
          width && width
        }`}
      >
        <figure
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
          className="w-auto relative"
        >
          <img
            className={`object-cover rounded-t-lg ${
              isProductPage ? "hover:opacity-30 transition delay-100" : ""
            }`}
            src={itemObj?.primary_image}
            alt=""
          />
          {showButton && isProductPage && (
            <div className="transition delay-700">
              <div className="absolute opacity-90 top-0">
                <Button className="bg-black relative top-24 bottom-24 left-16 right-16 text-white px-6 rounded-none hover:bg-black z-50">
                  <span>Buy Now</span>
                </Button>
              </div>
              <div className="bg-black absolute bottom-0 w-full text-center text-white">
                Quick View
              </div>
            </div>
          )}
        </figure>
        <figcaption className="flex flex-col items-center text-center p-4 gap-2 h-64 md:h-56">
          <h1 className={`font-semibold ${headingSize}`}>
            {itemObj?.product_name.slice(0, 40)}{" "}
            {itemObj?.product_name.length > 40 && <span>...</span>}
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            {/* {items.map((item, i) => {
                return <AiFillStar key={i} size={20} color="yellowGreen" />;
              })} */}
            <span className="px-2 break-words">
              {Math.round(itemObj?.rating || "")}
            </span>
            <span className="break-words">
              ({itemObj?.review_count || ""}+ Reviews)
            </span>
          </div>
          <div className="flex gap-2">
            <span className="line-through">₹ {itemObj?.cut_price}</span>
            <span className="">₹ {itemObj?.price}</span>
          </div>
          <Button
            handler={buyNow}
            className="bg-black text-xl text-white rounded-lg px-4"
          >
            Buy Now
          </Button>
        </figcaption>
      </CardHoc>
    </Link>
  );
};

export default ProductCard;
