import { useSelector } from "react-redux";
import Layouts from "../components/UI/Layouts";
import Loader from "../components/common/Loader";
import { useNavigate, useParams } from "react-router-dom";
import SideBarLayout from "../components/UI/SideBarLayout";
import ProductLayout from "../components/product/ProductLayout";
// import { product } from "../data/products";

const CategoryBasedProduct = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.status);
  // const products = product;
  const category_name =
    category.split("-").join(" ").charAt(0).toUpperCase() +
    category.split("-").join(" ").slice(1);
  const filteredProducts = products.filter(
    (item) => item.product_category.category_slug === category
  );
  if (filteredProducts.length === 0 && category !== "all") {
    navigate("/collection/all");
  }
  if (loading !== "success") {
    return <Loader />;
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
