import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ShopByConcern from "../Home/ShopByConcern";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const categories = useSelector((state) => state.common.categories);
  return (
    <>
      <div className="hidden lg:block">
        <h2 className="text-3xl font-medium pb-5">Categories</h2>
        <ul className="flex flex-col gap-5">
          {categories.map((category) => {
            return (
              <li className="">
                <Link to={`/${category.category_slug}`} className="text-md">
                  {location.pathname === `/${category.category_slug}` ? (
                    <span className="font-bold">{category.category_name}</span>
                  ) : (
                    <span>{category.category_name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:hidden">
        <ShopByConcern />
      </div>
    </>
  );
};

export default Sidebar;
