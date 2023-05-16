import { motion } from "framer-motion";
import SocialMedia from "../SocialMedia";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import AyuvyaBlackLogo from "../../../assets/logo/ayuvya_ayurveda_black.png";

const Sidebar = ({ setSidebar, categories }) => {
  const handleClick = () => {
    setSidebar(false);
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full md:w-3/4 h-screen bg-white absolute text-black top-0 left-0 z-50 p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 75 }}
      >
        <div className="flex justify-between pb-6">
          <img className="w-24" src={AyuvyaBlackLogo} alt="" />
          <VscChromeClose
            onClick={handleClick}
            size={25}
            className="font-bold"
          />
        </div>
        <div className="flex flex-col gap-3 text-2xl font-semibold pb-6">
          <Link onClick={handleClick} to={"/collection/all"}>
            All Products
          </Link>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                onClick={handleClick}
                to={`/collection/${category.category_slug}`}
              >
                {category.category_name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 text-sm pb-6">
          <Link onClick={handleClick} to={"/about"}>
            About Us
          </Link>
          <Link onClick={handleClick} to={"/blogs"}>
            Blogs
          </Link>
          <Link onClick={handleClick} to={"/contact-us"}>
            Contact Us
          </Link>
          <Link onClick={handleClick} to={"/terms-and-condition"}>
            Terms And Condition
          </Link>
          <Link onClick={handleClick} to={"/privacy-policy"}>
            Privacy Policy
          </Link>
          <SocialMedia />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
