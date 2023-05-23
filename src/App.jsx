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
import {
  getAllCategories,
  getAllRelatedProducts,
} from "./store/slices/commonSlice";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
  const prevRoute = localStorage.getItem("SET_ROUTE_HISTORY");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(login());
    if (cartId !== null) {
      dispatch(fetchCartAuth());
    }
    dispatch(getAllBlogs());
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch, cartId]);

  useEffect(() => {
    if (
      (prevRoute === "/thank-you/" || "/thank-you") &&
      location.pathname !== "/thank-you"
    ) {
      dispatch(clearLocalStorage());
      if (isLoggedIn) {
        dispatch(fetchCartAuth());
      } else {
        dispatch(fetchCart());
      }
    }
  }, [location, prevRoute, dispatch, isLoggedIn]);

  useEffect(() => {
    if (cart.items.length > 0) {
      dispatch(getAllRelatedProducts(cart?.related_product_Id));
    }
  }, [dispatch, cart?.related_product_Id, cart.items.length]);

  return (
    <Suspense fallback={<Loader />}>
      <RoutesWrapper />
    </Suspense>
  );
};

export default App;
