import { VscChromeClose } from "react-icons/vsc";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import CustomSwiper from "../common/custom/CustomSwiper";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";
import RecommendationCard from "../common/card/RecommendationCard";

const CartModal = (props) => {
  const products = useSelector((state) => state.product.products);
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
            <div className="p-4 relative h-[100%] overflow-auto mt-24 pb-48">
              <div className="flex flex-col gap-2">
                {products.slice(20, 22).map((product) => {
                  return <CartItem product={product} />;
                })}
              </div>
              <div className="py-4">
                <CustomSwiper
                  data={products.slice(20, 24)}
                  headingText="You may also like"
                  marginVertical={"my-10"}
                  componentToBeRender={RecommendationCard}
                  navigation={false}
                  noOfSlidePerView={[
                    {
                      0: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                      },
                      400: {
                        slidesPerView: 2,
                        spaceBetween: 10,
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
