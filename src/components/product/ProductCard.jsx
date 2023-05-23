import { useState } from "react";
import CardHoc from "../UI/cardHoc";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import CartModal from "../modals/CartModal";
import { useNavigate } from "react-router-dom";
import ProductBriefCard from "./ProductBriefCard";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, fetchCart } from "../../store/slices/cartSlice";
import { getAllRelatedProducts } from "../../store/slices/commonSlice";
import { addToCartAuth, fetchCartAuth } from "../../store/slices/cartSlice";

const ProductCard = ({
  product,
  isheight,
  headingSize,
  cardStarSize,
  marginVertical,
  productBriefHeight,
  isNotSwiperProduct,
  cardDescriptionSize,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //to show cart modal when user clicks
  const [cartModal, showCartModal] = useState(false);
  function handleClose() {
    showCartModal(false);
  }
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Add Item to cart
  const addItemToCart = async (product) => {
    const data = {
      quantity: 1,
      id: product.id,
      price: product.price,
      cut_price: product.cut_price,
      product_name: product.product_name,
      primary_image: product.primary_image,
    };
    if (isLoggedIn) {
      const alreadyExists = cart.items?.find((item) => item.id === product.id);
      dispatch(
        addToCartAuth([
          {
            quantity: alreadyExists ? alreadyExists.quantity + 1 : 1,
            product: product.id,
          },
        ])
      )
        .then(() => dispatch(fetchCartAuth()))
        .then(() => showCartModal(true));
    } else {
      dispatch(addCartItem(data));
      dispatch(fetchCart());
      showCartModal(true);
    }
    const relatedIds = await JSON.parse(localStorage.getItem("AYUVYA_CART"));
    dispatch(
      getAllRelatedProducts(
        cart?.related_product_Id || relatedIds?.related_product_Id
      )
    );
  };
  // to navigate to product Landing page
  const buyNow = () => {
    navigate(`${product?.get_product_url}`);
  };

  return (
    <CardHoc
      className={`bg-white cursor-none lg:cursor-pointer ${marginVertical} `}
    >
      <CartModal handleClose={handleClose} cartModal={cartModal} />
      <Link to={`${product?.get_product_url}`}>
        <div
          className={`w-auto rounded-t-lg relative flex justify-center text-white ${
            isNotSwiperProduct ? "h-52 md:h-68 bg-white/60 group" : isheight
          }`}
        >
          <img
            className={`absolute rounded-t-lg h-full object-cover ${
              isNotSwiperProduct
                ? "transition delay-75 ease-in-out duration-200 group-hover:opacity-30"
                : ""
            }`}
            src={product?.primary_image}
            alt=""
          />
          {isNotSwiperProduct && (
            <>
              <div className="relative transition-all ease-in-out duration-200 delay-75 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
                <Button
                  handler={buyNow}
                  className="bg-black rounded-none py-2 px-6 text-lg hover:bg-gray-500"
                >
                  Buy Now
                </Button>
              </div>
              <div className="bg-black absolute bottom-0 w-full text-center opacity-0 group-hover:opacity-100 transition delay-75 ease-in-out duration-200">
                Quick View
              </div>
            </>
          )}
        </div>
      </Link>
      <ProductBriefCard
        buyNow={buyNow}
        product={product}
        headingSize={headingSize}
        cardStarSize={cardStarSize}
        addItemToCart={addItemToCart}
        productBriefHeight={productBriefHeight}
        isNotSwiperProduct={isNotSwiperProduct}
        cardDescriptionSize={cardDescriptionSize}
      />
    </CardHoc>
  );
};

export default ProductCard;
