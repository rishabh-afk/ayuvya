import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
import { product } from "../data/products";

const SkinCare = () => {
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Skin Care"} products={product} />
    </SideBarLayout>
  );
};

export default SkinCare;
