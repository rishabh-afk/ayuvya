import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

const NavbarIcons = ({ className, openSearchBar, showCartModal }) => {
  const cart = [];
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
        <FaShoppingCart
          className="cursor-none lg:cursor-pointer"
          title={cart.length === 0 ? "Your Cart is empty" : "Cart"}
          onClick={() => showCartModal(true)}
          size={18}
        />
        <span className="text-xs text-white relative bottom-2 left-1 bg-[#555] items-center flex justify-center px-1 lg:px-[6px] lg:py-[2px] rounded-full">
          0
        </span>
      </motion.div>
    </div>
  );
};
export default NavbarIcons;
