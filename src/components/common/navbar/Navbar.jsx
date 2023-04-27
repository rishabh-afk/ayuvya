import AyuvyaBlackLogo from "../../../assets/logo/ayuvya_ayurveda_black.png";
import AyuvyaWhiteLogo from "../../../assets/logo/ayuvya_ayurveda_white.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import CartModal from "../../modals/CartModal";
import { product } from "../../../data/products";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  //to show all categories on navbar & on sidebar
  const categories = useSelector((state) => state.common.categories);

  //to show cart modal when user clicks
  const [cartModal, showCartModal] = useState(false);
  function handleClose() {
    showCartModal(false);
  }

  //Sidebar for mobile devices
  const [sidebar, setSidebar] = useState(false);

  //Search Bar state
  const [searchBar, openSearchBar] = useState(false);

  //to make header fixed when user scrolls
  const stickyHeader = useRef();
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scroll = window.scrollY;
    const stickyClass =
      scroll > 20
        ? "fixed transition-all top-0 duration-500 delay-500 ease-linear w-full shadow-md z-50"
        : "";
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
        className={`flex justify-between items-center py-2 px-4 lg:px-16 bg-black text-white lg:bg-white lg:text-black ${sticky}`}
      >
        {!searchBar && (
          <div className="lg:hidden">
            <RxHamburgerMenu
              className="cursor-none lg:cursor-pointer text-white"
              onClick={() => setSidebar(!sidebar)}
              size={25}
            />
          </div>
        )}
        <div className="w-28 hidden lg:block">
          <Link to={"/"}>
            <img
              className="cursor-none lg:cursor-pointer"
              src={AyuvyaBlackLogo}
              alt="Ayuvya Logo"
            />
          </Link>
        </div>
        {!searchBar && (
          <div className="w-24 lg:hidden">
            <Link to={"/"}>
              <img
                className="cursor-none lg:cursor-pointer"
                src={AyuvyaWhiteLogo}
                alt="Ayuvya Logo"
              />
            </Link>
          </div>
        )}
        {searchBar ? (
          <SearchBar openSearchBar={openSearchBar} />
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
          <NavbarIcons
            className={"flex lg:hidden"}
            openSearchBar={openSearchBar}
            showCartModal={showCartModal}
          />
        )}
        <NavbarIcons
          className={"hidden lg:flex"}
          openSearchBar={openSearchBar}
          showCartModal={showCartModal}
        />
        {sidebar && <Sidebar setSidebar={setSidebar} categories={categories} />}
      </div>
    </div>
  );
};

export default Navbar;
