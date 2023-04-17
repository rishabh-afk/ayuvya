import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
// import { product } from "../data/products";

const IntimateCare = () => {
  const products = useSelector((state) => state.product.products);
  const wellness = products.filter(
    (item) => item.product_category.category_slug === "wellness"
  );
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Intimate Care"} products={wellness} />
    </SideBarLayout>
  );
};

export default IntimateCare;
