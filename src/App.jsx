import { Suspense } from "react";
import RoutesWrapper from "./RoutesWrapper";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/common/Loader";
// import { getAllBlogs } from "./store/slices/blogSlice";
// import { getAllProducts } from "./store/slices/productSlice";
// import { getAllCategories } from "./store/slices/commonSlice";
// import { getAllRelatedProducts } from "./store/slices/commonSlice";

const App = () => {
  // const dispatch = useDispatch();
  // const loading = useSelector((state) => state.product.status);
  // useEffect(() => {
  //   dispatch(getAllBlogs());
  //   dispatch(getAllProducts());
  //   dispatch(getAllCategories());
  // dispatch(getAllRelatedProducts());
  // }, [dispatch]);
  // if (loading !== "success") {
  //   return <Loader />;
  // }
  return (
    <Suspense fallback={<Loader />}>
      <RoutesWrapper />
    </Suspense>
  );
};

export default App;
