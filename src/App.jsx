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
  const cartId = localStorage.getItem("AYUVYA_CART_ID_8932_6754");
  const prevRoute = localStorage.getItem("SET_ROUTE_HISTORY");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // get all public routes categories, products, blgos, fetchcart if exits
  useEffect(() => {
    dispatch(login());
    localStorage.setItem("AYUVYA_PAYMENT_METHOD", "Prepaid");
    dispatch(getAllBlogs());
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  //clear Local Storage
  useEffect(() => {
    if (prevRoute === "/thank-you" && location.pathname !== "/thank-you")
      dispatch(clearLocalStorage());
    if (cartId !== null && isLoggedIn) dispatch(fetchCartAuth());
    if (cart?.status === "success") dispatch(fetchCart());
  }, [dispatch, location, prevRoute, cartId, isLoggedIn, cart?.status]);

  // get all related product apis when app loads
  useEffect(() => {
    if (cart?.related_product_Id.length > 0)
      dispatch(getAllRelatedProducts(cart?.related_product_Id));
  }, [dispatch, cart?.related_product_Id]);

  return (
    <Suspense fallback={<Loader />}>
      <RoutesWrapper />
    </Suspense>
  );
};

export default App;
