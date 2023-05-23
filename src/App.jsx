import { Suspense, useEffect } from "react";
import RoutesWrapper from "./RoutesWrapper";
import Loader from "./components/common/Loader";
import { login } from "./store/slices/authSlice";
import { getAllBlogs } from "./store/slices/blogSlice";
import { useDispatch } from "react-redux";
import {
  clearLocalStorage,
  fetchCart,
  fetchCartAuth,
} from "./store/slices/cartSlice";
import { getAllProducts } from "./store/slices/productSlice";
import { getAllCategories } from "./store/slices/commonSlice";
import { useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
  // const loading = useSelector((state) => state.product.status);
  const isLastPageThankYou = localStorage.getItem("SET_ROUTE_HISTORY");
  useEffect(() => {
    dispatch(login());
    if (cartId !== null) {
      dispatch(fetchCartAuth());
    }
    if (
      isLastPageThankYou === "/thank-you" &&
      location.pathname !== "/thank-you"
    ) {
      dispatch(clearLocalStorage());
      dispatch(fetchCart());
    }
    dispatch(getAllBlogs());
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch, cartId, isLastPageThankYou, location]);

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
