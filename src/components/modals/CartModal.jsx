import Modal from "react-modal";
import { useEffect } from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import CartItem from "../cart/CartItem";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import CustomSwiper from "../common/custom/CustomSwiper";
import RecommendationCard from "../common/card/RecommendationCard";
import { getAllRelatedProducts } from "../../store/slices/commonSlice";

const variants = {
  animate: {
    x: 0,
  },
  transition: {
    type: "spring",
    stiffness: 120,
    duration: 0.3,
  },
};

const customStyles = {
  content: {
    top: "0%",
    right: "0%",
    left: "auto",
    bottom: "auto",
    width: "384px",
    height: "100%",
    padding: 0,
    borderRadius: "0px",
    backgroundColor: "#f5f0f7",
    border: "#f5f0f7",
  },
  overlay: { background: "rgba(0, 0, 0, 0.6)", zIndex: 1000 },
};
Modal.setAppElement("#root");
const CartModal = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const related_products = useSelector((state) => state.common.relatedProducts);

  useEffect(() => {
    const relatedIds = JSON.parse(localStorage.getItem("Cart"));
    dispatch(getAllRelatedProducts(relatedIds?.related_product_Id));
  }, [dispatch]);

  return (
    <Modal
      isOpen={props.cartModal && cartData.items.length > 0}
      onRequestClose={props.handleClose}
      style={customStyles}
      contentLabel="Address Modal"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white min-h-screen overflow-x-hidden pt-20 pb-36">
          <div className="fixed top-0 bg-white z-50 h-20 w-96">
            <div className="flex justify-between px-5 py-3 font-semibold text-lg items-center">
              <h3>Your Shopping Cart ({cartData?.numberOfItems || 0})</h3>
              <motion.div whileHover={{ scale: 1.2 }}>
                <VscChromeClose
                  className="cursor-none lg:cursor-pointer"
                  onClick={() => props.handleClose(false)}
                  size={20}
                />
              </motion.div>
            </div>
            <div className="flex justify-center items-center w-full h-9 bg-black text-white">
              <p className="text-sm">Free shipping on all orders!</p>
            </div>
          </div>
          <div className="p-4">
            <motion.div
              variants={variants}
              initial={{ x: -250 }}
              animate={variants.animate}
              transition={variants.transition}
              className="flex flex-col gap-2"
            >
              {cartData?.items.map((product, index) => {
                return <CartItem key={index} product={product} />;
              })}
            </motion.div>
            <motion.div
              variants={variants}
              initial={{ x: 500 }}
              animate={variants.animate}
              transition={variants.transition}
              className="pt-4"
            >
              <CustomSwiper
                data={related_products}
                headingText="You may also like"
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
            </motion.div>
          </div>
          <div className="fixed bottom-0 bg-white z-50 h-36 w-96 border-t p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold">SUBTOTAL</h4>
              <p className="text-md lg:text-xl font-semibold">
                ₹ {cartData?.totalAmount}
              </p>
            </div>
            <p className="text-sm py-2">
              Shipping and taxes calculated at checkout
            </p>
            <Button className="bg-black text-white w-full flex justify-center mt-2 rounded-none">
              <Link to={"/checkout"} className="w-full">
                <span className="text-xl font-bold">CHECKOUT</span>
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default CartModal;
