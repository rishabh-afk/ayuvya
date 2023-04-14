// library imports
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// custom pages/components imports

const Home = lazy(() => import("./pages/Home"));
const Account = lazy(() => import("./pages/Account"));
const AllProduct = lazy(() => import("./pages/AllProduct"));
const SkinCare = lazy(() => import("./pages/SkinCare"));
const WeightIssue = lazy(() => import("./pages/WeightIssue"));
const IntimateCare = lazy(() => import("./pages/IntimateCare"));
const Wellness = lazy(() => import("./pages/Wellness"));
const HairCare = lazy(() => import("./pages/HairCare"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const Combos = lazy(() => import("./pages/Combos"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const Error = lazy(() => import("./pages/Error"));

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/all" element={<AllProduct />} />
      <Route path="/skin-care" element={<SkinCare />} />
      <Route path="/weight-management" element={<WeightIssue />} />
      <Route path="/wellness" element={<IntimateCare />} />
      <Route path="/nutrition" element={<Wellness />} />
      <Route path="/hair-care" element={<HairCare />} />
      <Route path="/ayuvya-combo-packs" element={<Combos />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesWrapper;
