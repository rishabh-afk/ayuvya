import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/common/ProductLayout";

const CategoryBasedProduct = ({ category_slug, category_name }) => {
  const products = useSelector((state) => state.product.products);
  const filteredProducts = products.filter(
    (item) => item.product_category.category_slug === category_slug
  );
  return (
    <SideBarLayout>
      <ProductLayout pageTitle={category_name} products={filteredProducts} />
    </SideBarLayout>
  );
};

export default CategoryBasedProduct;
