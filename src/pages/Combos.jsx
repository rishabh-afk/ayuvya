import { product } from "../data/products";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";

const Combos = () => {
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Combos"} products={product} />
    </SideBarLayout>
  );
};

export default Combos;
