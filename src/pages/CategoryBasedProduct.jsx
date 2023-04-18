import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/product/ProductLayout";
import Layouts from "../components/UI/Layouts";
import Loader from "../components/common/Loader";

const CategoryBasedProduct = ({ category_slug, category_name }) => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.status);
  const filteredProducts = products.filter(
    (item) => item.product_category.category_slug === category_slug
  );
  if (loading !== "success") {
    return <Loader />;
  }
  return (
    <Layouts>
      <SideBarLayout>
        <ProductLayout pageTitle={category_name} products={filteredProducts} />
      </SideBarLayout>
    </Layouts>
  );
};

export default CategoryBasedProduct;
