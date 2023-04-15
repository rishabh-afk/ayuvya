import React from "react";
import Button from "../Button";

const RecommendationCard = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <figure className="">
        <img
          className="h-40 aspect-square object-cover"
          src={props.product.primary_image}
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col gap-1">
        <h2 className="text-xl font-bold">
          {props.product.product_name.slice(0, 25)}
        </h2>
        <div className="flex gap-2">
          <span className="">₹ {props.product.price}</span>
          <span className="line-through">₹ {props.product.cut_price}</span>
        </div>
        <span className="">
          {100 -
            Math.round((props.product.price / props.product.cut_price) * 100)}
          % OFF
        </span>
        <Button className="rounded-full border border-black hover:bg-black hover:text-white outline-none">
          <span>Add To Cart</span>
        </Button>
      </figcaption>
    </div>
  );
};

export default RecommendationCard;
