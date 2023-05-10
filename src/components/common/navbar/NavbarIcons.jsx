import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../store/slices/cartSlice";
import { useEffect } from "react";

export const variants = {
  show: {
    opacity: 1,
    scale: 1.2,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    scale: 0,
    opacity: 0,
  },
};

const NavbarIcons = ({ className, openSearchBar, showCartModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  const cartData = useSelector((state) => state.cart);
  return (
    <div className={`gap-2 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.3 }}
        transition={{ ease: "easeInOut" }}
      >
        <BiSearch
          className="cursor-none lg:cursor-pointer"
          onClick={() => {
            openSearchBar(true);
          }}
          size={18}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ ease: "easeInOut" }}
        className="flex"
      >
        {cartData.items.length === 0 ? (
          <>
            <HiOutlineShoppingBag
              className="cursor-none lg:cursor-pointer"
              title={"Your Cart is empty"}
              size={20}
            />
          </>
        ) : (
          <>
            <HiOutlineShoppingBag
              className="cursor-none lg:cursor-pointer"
              onClick={() => showCartModal(true)}
              size={20}
            />
          </>
        )}
        <motion.span
          key={cartData.items.length}
          variants={variants}
          animate="show"
          initial="hide"
          className="text-xs text-white relative bottom-[6px] left-1 bg-[#555] items-center flex justify-center w-5 aspect-square rounded-full"
        >
          {cartData?.items.length ? cartData.items.length : 0}
        </motion.span>
      </motion.div>
    </div>
  );
};
export default NavbarIcons;
