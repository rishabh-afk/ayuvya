import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const NavbarIcons = ({ className, openSearchBar, showCartModal }) => {
  const cart = [];
  return (
    <div className={`gap-2 ${className}`}>
      <BiSearch
        className="cursor-none lg:cursor-pointer"
        onClick={() => {
          openSearchBar(true);
        }}
        size={18}
      />
      <div className="flex">
        <FaShoppingCart
          className="cursor-none lg:cursor-pointer"
          title={cart.length === 0 ? "Your Cart is empty" : "Cart"}
          onClick={() => showCartModal(true)}
          size={18}
        />
        <span className="text-xs text-white relative bottom-2 left-1 bg-[#555] items-center flex justify-center px-1 lg:px-[6px] lg:py-[2px] rounded-full">
          0
        </span>
      </div>
    </div>
  );
};
export default NavbarIcons;
