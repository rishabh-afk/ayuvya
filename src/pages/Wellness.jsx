import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
// import { product } from "../data/products";

const Wellness = () => {
  const products = useSelector((state) => state.product.products);
  const nutrition = products.filter(
    (product) => product.product_category.category_slug === "nutrition"
  );
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Wellness"} products={nutrition} />
    </SideBarLayout>
  );
};

export default Wellness;
