import AyuvyaBlackLogo from "../../assets/logo/ayuvya_ayurveda_black.png";
import AyuvyaWhiteLogo from "../../assets/logo/ayuvya_ayurveda_white.png";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SocialMedia from "./SocialMedia";
import CartModal from "../modals/CartModal";
import { product } from "../../data/products";
import { useSelector } from "react-redux";

const Navbar = () => {
  const categories = useSelector((state) => state.common.categories);
  const stickyHeader = useRef();
  // const [cart, setCart] = useState([]);
  const cart = [];
  const [cartModal, showCartModal] = useState(false);
  const [sticky, setSticky] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [searchBar, openSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  function handleClose() {
    showCartModal(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    const scroll = window.scrollY;
    let scrollTop = stickyHeader.current.offsetTop;
    const stickyClass =
      scroll > scrollTop ? "fixed top-0 w-full shadow-md z-50" : "";
    setSticky(stickyClass);
  };
  return (
    <div className="shadow-md">
      <CartModal
        handleClose={handleClose}
        cartModal={cartModal}
        product={product[0]}
      />
      <div className="flex justify-center items-center w-full h-9 bg-white text-black lg:bg-black lg:text-white">
        <p className="text-sm">Free Shipping | COD Available | 100% Herbal</p>
      </div>
      <div
        ref={stickyHeader}
        className={`flex justify-between items-center py-2 px-5 lg:px-16 bg-black text-white lg:bg-white lg:text-black ${sticky}`}
      >
        {searchBar ? (
          <></>
        ) : (
          <div className="lg:hidden">
            <AiOutlineMenu
              className="cursor-none lg:cursor-pointer"
              onClick={() => setSidebar(!sidebar)}
              size={20}
            />
          </div>
        )}
        <div className="w-28 hidden lg:block">
          <Link to={"/"}>
            <img src={AyuvyaBlackLogo} alt="Ayuvya Logo" />
          </Link>
        </div>
        {searchBar ? (
          <></>
        ) : (
          <div className="w-24 lg:hidden">
            <Link to={"/"}>
              <img src={AyuvyaWhiteLogo} alt="Ayuvya Logo" />
            </Link>
          </div>
        )}
        {searchBar ? (
          <div className="flex justify-between pr-2 items-center z-[5000] w-full lg:w-3/4 border-2 rounded-md cursor-none lg:cursor-pointer">
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              placeholder="Search Here"
              autoFocus
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-full text-black outline-none py-[2px] lg:py-1 pl-2"
            />
            <VscChromeClose onClick={() => openSearchBar(false)} size={20} />
          </div>
        ) : (
          <>
            <div className="hidden lg:flex gap-6 text-sm">
              <Link to={"/all"}>ALL PRODUCTS</Link>
              {categories.map((category) => {
                return (
                  <Link key={category.id} to={`/${category.category_slug}`}>
                    {category.category_name.toUpperCase()}
                  </Link>
                );
              })}
              <Link to={"/blogs"}>BLOGS</Link>
            </div>
          </>
        )}
        {searchBar ? (
          <></>
        ) : (
          <div className="flex gap-2 lg:hidden">
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
              <span className="text-xs relative bottom-2 left-1 bg-[#555] lg:text-white rounded-full px-[5px]">
                0
              </span>
            </div>
          </div>
        )}
        <div className="gap-2 hidden lg:flex">
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
            <span className="text-xs relative bottom-2 left-1 bg-[#555] lg:text-white rounded-full px-[5px]">
              0
            </span>
          </div>
        </div>
        {sidebar && (
          <div className="w-full md:w-3/4 h-screen bg-white absolute text-black top-0 left-0 z-50 p-4">
            <div className="flex justify-between pb-6">
              <img className="w-24" src={AyuvyaBlackLogo} alt="" />
              <VscChromeClose
                onClick={() => setSidebar(!sidebar)}
                size={20}
                className="font-bold"
              />
            </div>
            <div className="flex flex-col gap-3 text-2xl font-bold pb-6">
              <Link onClick={() => setSidebar(!sidebar)} to={"/all"}>
                All Products
              </Link>
              {categories.map((category) => {
                return (
                  <Link
                    key={category.id}
                    onClick={() => setSidebar(!sidebar)}
                    to={`/${category.category_slug}`}
                  >
                    {category.category_name}
                  </Link>
                );
              })}
              <Link to={"/blogs"} onClick={() => setSidebar(!sidebar)}>
                blogs
              </Link>
            </div>
            <div className="flex flex-col gap-3 text-sm pb-6">
              <Link onClick={() => setSidebar(!sidebar)} to={"/about-us"}>
                About Us
              </Link>
              <Link onClick={() => setSidebar(!sidebar)} to={"/blogs"}>
                Blogs
              </Link>
              <Link onClick={() => setSidebar(!sidebar)} to={"/contact-us"}>
                Contact Us
              </Link>
              <Link
                onClick={() => setSidebar(!sidebar)}
                to={"/terms-and-condition"}
              >
                Terms And Condition
              </Link>
              <Link onClick={() => setSidebar(!sidebar)} to={"/privacy-policy"}>
                Privacy Policy
              </Link>
              <SocialMedia />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
