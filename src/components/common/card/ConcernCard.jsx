import { Link } from "react-router-dom";
import concernImg from "../../../assets/images/product/Skin-Care_Shop_by_concern_New_Webp.webp";

const ConcernCard = ({ product }) => {
  return (
    <div className="px-1 pb-8">
      <Link to={`/${product?.category_slug}`}>
        <div className="shadow-xl rounded-md">
          <figure>
            <img
              className="rounded-t-md"
              src={concernImg || product?.image}
              alt={product?.category_name}
            />
          </figure>
          <figcaption>
            <p className="rounded-b-md h-10 items-center flex justify-center text-sm lg:text-lg bg-white">
              {product?.category_name}
            </p>
          </figcaption>
        </div>
      </Link>
    </div>
  );
};

export default ConcernCard;
