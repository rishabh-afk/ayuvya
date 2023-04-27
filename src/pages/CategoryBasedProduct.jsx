import { useSelector } from "react-redux";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/product/ProductLayout";
import Layouts from "../components/UI/Layouts";
import Loader from "../components/common/Loader";
import { useNavigate, useParams } from "react-router-dom";

const CategoryBasedProduct = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.status);
  const { category } = useParams();
  const navigate = useNavigate();
  const category_name =
    category.split("-").join(" ").charAt(0).toUpperCase() +
    category.split("-").join(" ").slice(1);
  const filteredProducts = products.filter(
    (item) => item.product_category.category_slug === category
  );
  if (loading !== "success") {
    return <Loader />;
  }
  if (filteredProducts.length === 0 && category !== "all") {
    navigate("/all");
  }
  return (
    <Layouts>
      <SideBarLayout>
        <ProductLayout
          pageTitle={category_name === "All" ? "All Products" : category_name}
          products={category === "all" ? products.slice(14) : filteredProducts}
        />
      </SideBarLayout>
    </Layouts>
  );
};

export default CategoryBasedProduct;
