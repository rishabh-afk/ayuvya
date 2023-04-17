import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
// import { product } from "../data/products";

const SkinCare = () => {
  const products = useSelector((state) => state.product.products);
  const skinCare = products.filter(
    (item) => item.product_category.category_slug === "skin-care"
  );
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Skin Care"} products={skinCare} />
    </SideBarLayout>
  );
};

export default SkinCare;
