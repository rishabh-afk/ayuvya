import AyuvyaBlackLogo from "../../assets/logo/ayuvya_ayurveda_black.png";
import AyuvyaWhiteLogo from "../../assets/logo/ayuvya_ayurveda_white.png";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="flex justify-center items-center w-full h-9 bg-white text-black lg:bg-black lg:text-white">
        <p className="text-sm">Free Shipping | COD Available | 100% Herbal</p>
      </div>
      <div className="flex justify-between items-center py-2 px-5 lg:px-16 bg-black text-white lg:bg-white lg:text-black">
        <div className="lg:hidden">
          <AiOutlineMenu size={20} />
        </div>
        <div className="w-28 hidden lg:block">
          <img src={AyuvyaBlackLogo} alt="Ayuvya Logo" />
        </div>
        <div className="w-24 lg:hidden">
          <img src={AyuvyaWhiteLogo} alt="Ayuvya Logo" />
        </div>
        <div className="hidden lg:flex gap-6 text-sm font-medium">
          <Link to={"all"}>ALL PRODUCTS</Link>
          <Link to={"skin-care"}>SKIN CARE</Link>
          <Link to={"weight-management"}>WEIGHT ISSUES</Link>
          <Link to={"wellness"}>INTIMATE CARE</Link>
          <Link to={"nutrition"}>WELLNESS</Link>
          <Link to={"hair-care"}>HAIR CARE</Link>
          <Link to={"combos"}>COMBOS</Link>
          <Link to={"blogs"}>BLOGS</Link>
        </div>
        <div className="flex gap-2">
          <BiSearch size={18} />
          <div className="flex">
            <FaShoppingCart size={18} />
            <span className="text-xs relative bottom-2 left-1 bg-[#555] lg:text-white rounded-full px-[5px]">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
