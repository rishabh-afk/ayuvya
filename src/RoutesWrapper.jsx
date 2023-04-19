// library imports
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// custom pages/components imports
const Home = lazy(() => import("./pages/Home"));
const Account = lazy(() => import("./pages/Account"));
const AllProduct = lazy(() => import("./pages/AllProduct"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const ProductDetail = lazy(() =>
  import("./components/product/productDetails/ProductDetail")
);
const CategoryBasedProduct = lazy(() => import("./pages/CategoryBasedProduct"));
const Checkout = lazy(() => import("./pages/Checkout"));
// const Error = lazy(() => import("./pages/Error"));

const RoutesWrapper = () => {
  const categories = useSelector((state) => state.common.categories);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/all" element={<AllProduct />} />
      {categories.map((category) => {
        return (
          <Route key={category.id} path={`/${category.category_slug}`}>
            <Route
              index
              element={
                <CategoryBasedProduct
                  category_slug={category.category_slug}
                  category_name={category.category_name}
                />
              }
            />
            <Route path=":slug" element={<ProductDetail />} />
          </Route>
        );
      })}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};

export default RoutesWrapper;
