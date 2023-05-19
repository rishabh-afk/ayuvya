import { AiFillStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import AddProductButton from "./AddProductButton";
import Platforms from "../../common/card/Platforms";
import { platforms } from "../../../data/ottplatform";
import CustomSwiper from "../../common/custom/CustomSwiper";
import Recommend from "./Recommend";

const CommonDetails = (props) => {
  const items = new Array(Math.round(props.product?.rating)).fill(null);
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-bold">
        {props.product?.product_name}
      </h1>
      <p className="text-xl lg:text-2xl py-2">
        {props.product?.product_nick_name}
      </p>
      <p className="flex items-end">
        <span className="pr-2 text-3xl font-semibold">
          {props.product?.rating}{" "}
        </span>
        {items.map((item, i) => {
          return <AiFillStar key={i} size={30} color="#ffd700" />;
        })}
      </p>
      <p className="flex gap-2 py-2 items-center">
        <MdVerified size={25} color="blue" />
        <span className="text-xl font-medium text-blue-300">
          {props.product?.review_count}+ reviews
        </span>
      </p>
      <div className="flex gap-4 text-2xl font-bold">
        <span className="">₹ {props.product?.price}.0</span>
        <span className="line-through text-gray-400">
          ₹ {props.product?.cut_price}.0
        </span>
      </div>
      <div className="border-y border-gray-400 my-4">
        <div className="py-4 bg-slate-100 h-16 cursor-none lg:cursor-pointer my-4">
          <CustomSwiper
            platform={true}
            navigation={false}
            data={platforms}
            componentToBeRender={Platforms}
            noOfSlidePerView={[
              {
                0: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                980: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              },
            ]}
          />
        </div>
      </div>
      <Recommend recommend={props.product.recommend_section} />
      <AddProductButton product={props.product} />
    </div>
  );
};

export default CommonDetails;
