import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
import { product } from "../data/products";

const WeightIssue = () => {
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"Weight issues"} products={product} />
    </SideBarLayout>
  );
};

export default WeightIssue;
