import { Suspense, useEffect } from "react";
import RoutesWrapper from "./RoutesWrapper";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "./components/common/Loader";
// import { getAllBlogs } from "./store/slices/blogSlice";
// import { getAllProducts } from "./store/slices/productSlice";
// import { getAllCategories } from "./store/slices/commonSlice";
// import { getAllRelatedProducts } from "./store/slices/commonSlice";
import { login } from "./store/slices/authSlice";

const App = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(login());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <RoutesWrapper />
    </Suspense>
  );
};

export default App;
