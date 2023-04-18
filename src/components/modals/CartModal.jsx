import { VscChromeClose } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { product } from "../../data/products";
import Recommendation from "../common/Recommendation";

const CartModal = (props) => {
  return (
    <>
      {props.cartModal && (
        <div className="bg-black w-full absolute z-[2000]">
          <div className="fixed h-screen right-0 top-0 z-[1000] bg-white w-full md:w-1/2 lg:w-96">
            <div className="absolute top-0 bg-white w-full z-[10000]">
              <div className="flex justify-between px-5 py-3 font-semibold text-lg">
                <h3>Your Shopping Cart (1)</h3>
                <VscChromeClose
                  className="cursor-none lg:cursor-pointer"
                  onClick={() => props.handleClose(false)}
                  size={20}
                />
              </div>
              <div className="flex justify-center items-center w-full h-9 bg-white text-black lg:bg-black lg:text-white">
                <p className="text-sm">Free shipping on all orders!</p>
              </div>
            </div>
            <div className="p-4 relative h-96 overflow-auto mt-24">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 border-b">
                  <figure className="w-1/3">
                    <img
                      className="w-28 p-2 aspect-square"
                      src={props.product.primary_image}
                      alt=""
                    />
                  </figure>
                  <figcaption className="w-2/3 pb-4">
                    <h2 className="text-base font-medium">
                      {props.product.product_name}
                    </h2>
                    <div className="flex justify-between items-center pt-4">
                      <div className="border flex items-center gap-3 w-fit px-3">
                        <span className="text-xl font-medium">-</span>
                        <span className="text-base font-medium">1</span>
                        <span className="text-xl font-medium">+</span>
                      </div>
                      <div>
                        <p className="">₹ {props.product.price}</p>
                      </div>
                      <RiDeleteBin6Line
                        onClick={""}
                        className="cursor-none lg:cursor-pointer"
                        size={20}
                      />
                    </div>
                  </figcaption>
                </div>
                <div className="flex gap-1 border-b">
                  <figure className="w-1/3">
                    <img
                      className="w-28 p-2 aspect-square"
                      src={props.product.primary_image}
                      alt=""
                    />
                  </figure>
                  <figcaption className="w-2/3 pb-4">
                    <h2 className="text-base font-medium">
                      {props.product.product_name}
                    </h2>
                    <div className="flex justify-between items-center pt-4">
                      <div className="border flex items-center gap-3 w-fit px-3">
                        <span className="text-xl font-medium">-</span>
                        <span className="text-base font-medium">1</span>
                        <span className="text-xl font-medium">+</span>
                      </div>
                      <div>
                        <p className="">₹ {props.product.price}</p>
                      </div>
                      <RiDeleteBin6Line
                        onClick={""}
                        className="cursor-none lg:cursor-pointer"
                        size={20}
                      />
                    </div>
                  </figcaption>
                </div>
                <div className="flex gap-1 border-b">
                  <figure className="w-1/3">
                    <img
                      className="w-28 p-2 aspect-square"
                      src={props.product.primary_image}
                      alt=""
                    />
                  </figure>
                  <figcaption className="w-2/3 pb-4">
                    <h2 className="text-base font-medium">
                      {props.product.product_name}
                    </h2>
                    <div className="flex justify-between items-center pt-4">
                      <div className="border flex items-center gap-3 w-fit px-3">
                        <span className="text-xl font-medium">-</span>
                        <span className="text-base font-medium">1</span>
                        <span className="text-xl font-medium">+</span>
                      </div>
                      <div>
                        <p className="">₹ {props.product.price}</p>
                      </div>
                      <RiDeleteBin6Line
                        onClick={""}
                        className="cursor-none lg:cursor-pointer"
                        size={20}
                      />
                    </div>
                  </figcaption>
                </div>
              </div>
              <div className="py-4">
                <Recommendation
                  headingText="You may also like"
                  products={product}
                  noOfSlidePerView={[
                    {
                      0: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 2,
                      },
                    },
                  ]}
                />
              </div>
            </div>
            <div className="border-t p-4 pr-8 bg-white z-50 w-full absolute bottom-0">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">SUBTOTAL</h4>
                <p className="font-semibold">₹ {props.product.price}</p>
              </div>
              <p className="text-sm py-2">
                Shipping and taxes calculated at checkout
              </p>
              <Button className="bg-black text-white w-full flex justify-center mt-2 rounded-none">
                <Link to={"/checkout"}>
                  <span className="text-xl font-bold">CHECKOUT</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
