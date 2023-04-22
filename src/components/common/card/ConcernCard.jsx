import { Link } from "react-router-dom";
import concernImg from "../../../assets/images/product/Skin-Care_Shop_by_concern_New_Webp.webp";

const ConcernCard = ({ itemObj }) => {
  return (
    <div className="px-1 pb-8">
      <Link to={`/${itemObj?.category_slug}`}>
        <div className="shadow-xl rounded-md">
          <figure>
            <img
              className="rounded-t-md"
              src={concernImg || itemObj?.image}
              alt={itemObj?.category_name}
            />
          </figure>
          <figcaption>
            <p className="rounded-b-md h-10 items-center flex justify-center text-sm lg:text-lg bg-white">
              {itemObj?.category_name}
            </p>
          </figcaption>
        </div>
      </Link>
    </div>
  );
};

export default ConcernCard;
