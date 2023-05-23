import { AiFillStar } from "react-icons/ai";
import CardHoc from "../../UI/cardHoc";

const TestimonialCard = ({ product }) => {
  const items = new Array(Math.round(product.rating)).fill(null);
  return (
    <CardHoc className="bg-white p-8 my-10 cursor-none lg:cursor-pointer">
      <figure className="flex justify-center">
        <img
          loading="lazy"
          className="rounded-full w-24"
          src={product.imageUrl}
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col justify-center items-center">
        <div className="flex gap-1 py-5">
          {items.map((item, i) => {
            return <AiFillStar key={i} size={20} color="yellowGreen" />;
          })}
        </div>
        <div className="text-center min-h-[18rem]">
          <h3 className="text-2xl font-normal pb-3">{product.title}</h3>
          <p className="text-md">{product.description}</p>
          <p className="text-lg">
            - {product.name}, Buyer{" "}
            <span className="font-semibold text-lg">{product.productName}</span>
          </p>
        </div>
      </figcaption>
    </CardHoc>
  );
};

export default TestimonialCard;
