import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ShopByConcern from "../Home/ShopByConcern";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="hidden lg:block">
        <h2 className="text-3xl font-medium pb-5">Categories</h2>
        <ul className="flex flex-col gap-5">
          <li className="">
            <Link to={"/skin-care"} className="text-sm">
              {location.pathname === "/skin-care" ? (
                <span className="font-bold">Skin Care</span>
              ) : (
                <span>Skin Care</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link to={"/weight-management"} className="text-sm">
              {location.pathname === "/weight-management" ? (
                <span className="font-bold">Weight Issue</span>
              ) : (
                <span>Weight Issue</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link to={"/wellness"} className="text-sm">
              {location.pathname === "/wellness" ? (
                <span className="font-bold">Intimate Care</span>
              ) : (
                <span>Intimate Care</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link to={"/nutrition"} className="text-sm">
              {location.pathname === "/nutrition" ? (
                <span className="font-bold">Wellness</span>
              ) : (
                <span>Wellness</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link to={"/hair-care"} className="text-sm">
              {location.pathname === "/hair-care" ? (
                <span className="font-bold">Hair Care</span>
              ) : (
                <span>Hair Care</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link to={"/ayuvya-combo-packs"} className="text-sm">
              {location.pathname === "/ayuvya-combo-packs" ? (
                <span className="font-bold">Combos</span>
              ) : (
                <span>Combos</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <ShopByConcern />
      </div>
    </>
  );
};

export default Sidebar;
