// library imports
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

// custom pages/components imports
const Home = lazy(() => import("./pages/Home"));
const Account = lazy(() => import("./pages/Account"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CategoryBasedProduct = lazy(() => import("./pages/CategoryBasedProduct"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Error = lazy(() => import("./pages/Error"));

const RoutesWrapper = () => {
  // const categories = useSelector((state) => state.common.categories);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":category">
          <Route index element={<CategoryBasedProduct />} />
          <Route path=":slug" element={<ProductDetail />} />
        </Route>
      </Route>
      {/* {categories.map((category) => {
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
      })} */}
      <Route path="/blogs">
        <Route index element={<Blogs />} />
        <Route path=":slug" element={<BlogDetail />} />
      </Route>
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesWrapper;
