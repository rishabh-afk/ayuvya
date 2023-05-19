// library imports
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// custom pages/components imports
const Home = lazy(() => import("./pages/Home"));
const Faqs = lazy(() => import("./pages/Faqs"));
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Error = lazy(() => import("./pages/Error"));
const Account = lazy(() => import("./pages/Account"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const CategoryBasedProduct = lazy(() => import("./pages/CategoryBasedProduct"));

const RoutesWrapper = () => {
  const PRODUCT_ROUTES = [
    "lp/:slug",
    "ayuvya/product/:slug",
    "product/:slug",
    "products/:slug",
    ":slug",
  ];
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        {PRODUCT_ROUTES.map((route, item) => {
          return <Route key={item} path={route} element={<ProductDetail />} />;
        })}
        <Route path="collection" element={<Home />} />
        <Route path="collection/:category">
          <Route index element={<CategoryBasedProduct />} />
        </Route>
      </Route>
      <Route path="/blogs">
        <Route index element={<Blogs />} />
        <Route path=":slug" element={<BlogDetail />} />
      </Route>
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesWrapper;
