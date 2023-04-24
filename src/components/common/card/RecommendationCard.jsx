import Button from "../Button";

const RecommendationCard = ({ itemObj, marginVertical }) => {
  return (
    <div
      className={`flex flex-col gap-2 cursor-pointer shadow-sm mt-0 ${marginVertical}`}
    >
      <figure className="">
        <img
          className="h-32 aspect-square object-cover"
          src={itemObj.primary_image}
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col gap-1 py-2 text-center">
        <h2 className="text-lg font-bold">
          {itemObj.product_name.slice(0, 25)}
        </h2>
        <div className="flex gap-2 text-center mx-auto">
          <span className="">₹ {itemObj.price}</span>
          <span className="line-through">₹ {itemObj.cut_price}</span>
        </div>
        <span>
          {100 - Math.round((itemObj.price / itemObj.cut_price) * 100)}% OFF
        </span>
        <div className="text-center mx-auto">
          <Button className="rounded-full border justify-center px-4 w-fit border-black hover:bg-black hover:text-white outline-none">
            <span className="text-sm">Add To Cart</span>
          </Button>
        </div>
      </figcaption>
    </div>
  );
};

export default RecommendationCard;
