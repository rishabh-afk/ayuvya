import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesWrapper;
