import { Suspense, useEffect } from "react";
import RoutesWrapper from "./RoutesWrapper";
import Loader from "./components/common/Loader";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/slices/productSlice";
import { getAllBlogs } from "./store/slices/blogSlice";
import { getAllCategories } from "./store/slices/commonSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBlogs());
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <RoutesWrapper />
    </Suspense>
  );
};

export default App;
