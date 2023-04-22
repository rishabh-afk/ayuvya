import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/product/ProductLayout";
import Layouts from "../components/UI/Layouts";
import Loader from "../components/common/Loader";
import { useLocation } from "react-router";

const CategoryBasedProduct = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.status);
  const loc = useLocation();
  const category_slug = loc.pathname.slice(1);
  const category_name =
    category_slug.split("-").join(" ").charAt(0).toUpperCase() +
    category_slug.split("-").join(" ").slice(1);
  const filteredProducts = products.filter(
    (item) => item.product_category.category_slug === category_slug
  );
  if (loading !== "success") {
    return <Loader />;
  }
  return (
    <Layouts>
      <SideBarLayout>
        <ProductLayout
          pageTitle={category_name === "All" ? "All Products" : category_name}
          products={category_slug === "all" ? products : filteredProducts}
        />
      </SideBarLayout>
    </Layouts>
  );
};

export default CategoryBasedProduct;
