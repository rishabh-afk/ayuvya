import { AiFillStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

const CommonDetails = ({ product }) => {
  const items = new Array(Math.round(product.rating)).fill(null);
  return (
    <div>
      <h1 className="text-4xl font-bold">{product.product_name}</h1>
      <p className="text-2xl py-2">{product.product_nick_name}</p>
      <p className="flex items-end">
        <span className="pr-2 text-3xl font-semibold">{product.rating} </span>
        {items.map((item, i) => {
          return <AiFillStar key={i} size={30} color="#ffd700" />;
        })}
      </p>
      <p className="flex gap-2 py-2 items-center">
        <MdVerified size={25} color="blue" />
        <span className="text-xl font-medium text-blue-300">
          {product.review_count}+ reviews
        </span>
      </p>
      <div className="flex gap-4 text-2xl font-bold">
        <span className="">₹ {product.price}.0</span>
        <span className="line-through text-gray-400">
          ₹ {product.cut_price}.0
        </span>
      </div>
    </div>
  );
};

export default CommonDetails;
