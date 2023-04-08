// library imports
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// custom pages/components imports
import Account from "./pages/Account";

const Home = lazy(() => import("./pages/Home"));

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default RoutesWrapper;
