// import { product } from "../data/products";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
import { useSelector } from "react-redux";

const HairCare = () => {
  const products = useSelector((state) => state.product.products);
  const hairCare = products.filter(
    (item) => item.product_category.category_slug === "hair-care"
  );
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Hair Care"} products={hairCare} />
    </SideBarLayout>
  );
};

export default HairCare;
