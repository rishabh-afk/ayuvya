import RoutesWrapper from "./RoutesWrapper";
import { Suspense, useEffect } from "react";
import Loader from "./components/common/Loader";
import { login } from "./store/slices/authSlice";
// import { getAllBlogs } from "./store/slices/blogSlice";
import { useDispatch } from "react-redux";
import { fetchCartAuth } from "./store/slices/cartSlice";
// import { getAllProducts } from "./store/slices/productSlice";
// import { getAllCategories } from "./store/slices/commonSlice";
// import { getAllRelatedProducts } from "./store/slices/commonSlice";

const App = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.product.status);
  useEffect(() => {
    dispatch(login());
    dispatch(fetchCartAuth());
    // dispatch(getAllBlogs());
    // dispatch(getAllProducts());
    // dispatch(getAllCategories());
    // dispatch(getAllRelatedProducts());
  }, [dispatch]);
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
