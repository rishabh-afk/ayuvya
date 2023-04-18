// import { product } from "../data/products";
import Layouts from "../components/UI/Layouts";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/product/ProductLayout";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <Layouts>
      <SideBarLayout>
        <ProductLayout pageTitle={"All Products"} products={products} />
      </SideBarLayout>
    </Layouts>
  );
};

export default AllProduct;
