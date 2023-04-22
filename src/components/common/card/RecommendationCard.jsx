import Button from "../Button";

const RecommendationCard = ({ itemObj, marginVertical }) => {
  return (
    <div
      className={`flex flex-col gap-2 cursor-pointer mt-0 ${marginVertical}`}
    >
      <figure className="">
        <img
          className="h-32 aspect-square object-cover"
          src={itemObj.primary_image}
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">
          {itemObj.product_name.slice(0, 25)}
        </h2>
        <div className="flex gap-2">
          <span className="">₹ {itemObj.price}</span>
          <span className="line-through">₹ {itemObj.cut_price}</span>
        </div>
        <span className="">
          {100 - Math.round((itemObj.price / itemObj.cut_price) * 100)}% OFF
        </span>
        <Button className="rounded-full border justify-center px-4 w-fit border-black hover:bg-black hover:text-white outline-none">
          <span className="text-sm">Add To Cart</span>
        </Button>
      </figcaption>
    </div>
  );
};

export default RecommendationCard;
