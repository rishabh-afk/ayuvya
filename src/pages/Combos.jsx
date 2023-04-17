// import { product } from "../data/products";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
import { useSelector } from "react-redux";

const Combos = () => {
  const products = useSelector((state) => state.product.products);
  const hairCare = products.filter(
    (item) => item.product_category.category_slug === "ayuvya-combo-packs"
  );
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Combos"} products={hairCare} />
    </SideBarLayout>
  );
};

export default Combos;
