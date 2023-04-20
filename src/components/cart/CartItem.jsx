import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ product, isCheckoutPage }) => {
  return (
    <div className={`flex ${isCheckoutPage ? "pt-2" : "border-b"}`}>
      <figure className="w-1/3 relative">
        <img
          className="relative w-28 p-3 aspect-square rounded-md"
          src={product?.primary_image}
          alt=""
        />
        {isCheckoutPage && (
          <span className="absolute top-0 right-0 bg-gray-500 text-white px-2 rounded-full">
            1
          </span>
        )}
      </figure>
      <figcaption className="w-2/3">
        <h2 className="text-base font-medium py-2">{product?.product_name}</h2>
        {!isCheckoutPage && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 w-fit">
              <span className="cursor-none lg:cursor-pointer text-xl font-medium border shadow-lg px-2 rounded-md hover:shadow-2xl">
                -
              </span>
              <span className="text-base font-semibold text-gray-500">1</span>
              <span className="cursor-none lg:cursor-pointer text-xl font-medium border shadow-lg px-2 rounded-md hover:shadow-2xl">
                +
              </span>
            </div>
            <p className="font-semibold text-gray-500">
              ₹ {product?.price || "2378.6"}
            </p>
            <RiDeleteBin6Line
              onClick={""}
              className="cursor-none lg:cursor-pointer"
              size={20}
            />
          </div>
        )}
        {isCheckoutPage && (
          <p className="font-semibold text-gray-500 text-xl">
            ₹ {product?.price}.00
          </p>
        )}
      </figcaption>
    </div>
  );
};

export default CartItem;
