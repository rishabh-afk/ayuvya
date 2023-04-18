import { Suspense, useEffect } from "react";
import RoutesWrapper from "./RoutesWrapper";
import Layouts from "./components/UI/Layouts";
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
    <Layouts>
      <Suspense fallback={<Loader />}>
        <RoutesWrapper />
      </Suspense>
    </Layouts>
  );
};

export default App;
