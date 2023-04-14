import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
import { product } from "../data/products";

const Wellness = () => {
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Wellness"} products={product} />
    </SideBarLayout>
  );
};

export default Wellness;
