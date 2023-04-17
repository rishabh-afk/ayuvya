// import { product } from "../data/products";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={"All Products"} products={products} />
    </SideBarLayout>
  );
};

export default AllProduct;
