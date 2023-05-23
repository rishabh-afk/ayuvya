import { Suspense, useEffect } from "react";
import RoutesWrapper from "./RoutesWrapper";
import { useLocation } from "react-router-dom";
import Loader from "./components/common/Loader";
import { login } from "./store/slices/authSlice";
import { getAllBlogs } from "./store/slices/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  clearLocalStorage,
  fetchCart,
  fetchCartAuth,
} from "./store/slices/cartSlice";
import { getAllProducts } from "./store/slices/productSlice";
import { getAllCategories } from "./store/slices/commonSlice";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
  const prevRoute = localStorage.getItem("SET_ROUTE_HISTORY");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(login());
    if (cartId) {
      dispatch(fetchCartAuth());
    }
    dispatch(getAllBlogs());
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch, cartId]);

  useEffect(() => {
    if (prevRoute === "/thank-you" && location.pathname !== "/thank-you") {
      dispatch(clearLocalStorage());
      if (isLoggedIn) {
        dispatch(fetchCartAuth());
      } else {
        dispatch(fetchCart());
      }
    }
  }, [location, prevRoute, dispatch, isLoggedIn]);

  return (
    <Suspense fallback={<Loader />}>
      <RoutesWrapper />
    </Suspense>
  );
};

export default App;
