import { product } from "../data/products";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";

const HairCare = () => {
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Hair Care"} products={product} />
    </SideBarLayout>
  );
};

export default HairCare;
