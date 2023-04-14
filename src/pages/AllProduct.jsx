import { product } from "../data/products";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";

const AllProduct = () => {
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"All Products"} products={product} />
    </SideBarLayout>
  );
};

export default AllProduct;
