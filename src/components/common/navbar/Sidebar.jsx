import SocialMedia from "../SocialMedia";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import AyuvyaBlackLogo from "../../../assets/logo/ayuvya_ayurveda_black.png";

const Sidebar = ({ setSidebar, categories }) => {
  const handleClick = () => {
    setSidebar(false);
  };
  return (
    <div className="w-full md:w-3/4 h-screen bg-white absolute text-black top-0 left-0 z-50 p-4">
      <div className="flex justify-between pb-6">
        <img className="w-24" src={AyuvyaBlackLogo} alt="" />
        <VscChromeClose onClick={handleClick} size={20} className="font-bold" />
      </div>
      <div className="flex flex-col gap-3 text-xl font-semibold pb-6">
        <Link onClick={handleClick} to={"/all"}>
          All Products
        </Link>
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              onClick={handleClick}
              to={`/${category.category_slug}`}
            >
              {category.category_name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 text-sm pb-6">
        <Link onClick={handleClick} to={"/about-us"}>
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
    </div>
  );
};

export default Sidebar;
