import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardHoc from "../UI/CardHoc";
import Button from "../common/Button";
import ProductBriefCard from "./ProductBriefCard";
import { addCartItem, fetchCart } from "../../store/slices/cartSlice";
import { getAllRelatedProducts } from "../../store/slices/commonSlice";
import productImg from "../../assets/images/product/Skin-Care_Shop_by_concern_New_Webp.webp";

const ProductCard = ({
  product,
  headingSize,
  marginVertical,
  isNotSwiperProduct,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItemToCart = async (product) => {
    const data = {
      id: product.id,
      primary_image: product.primary_image,
      product_name: product.product_name,
      price: product.price,
      cut_price: product.cut_price,
      quantity: 1,
    };
    dispatch(addCartItem(data));
    dispatch(fetchCart());
    const relatedIds = await JSON.parse(localStorage.getItem("ayuvya-cart"));
    dispatch(getAllRelatedProducts(relatedIds?.related_product_Id));
    toast("Item is added successfully", { position: "top-center" });
  };

  const buyNow = () => {
    navigate(
      `/${product?.product_category?.category_slug}/${product?.product_slug}`,
      {
        state: { productId: product?.product_slug, scroll: true },
      }
    );
  };

  return (
    <CardHoc
      className={`bg-white cursor-none lg:cursor-pointer ${marginVertical} `}
    >
      <div
        className={`w-auto rounded-t-lg relative flex justify-center text-white ${
          isNotSwiperProduct ? "h-48 md:h-64 bg-white/60 group" : "h-96"
        }`}
      >
        <img
          className={`absolute rounded-t-lg h-full object-cover ${
            isNotSwiperProduct
              ? "transition delay-75 ease-in-out duration-200 group-hover:opacity-30"
              : ""
          }`}
          src={productImg || product?.primary_image}
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
      <ProductBriefCard
        headingSize={headingSize}
        product={product}
        addItemToCart={addItemToCart}
        buyNow={buyNow}
        isNotSwiperProduct={isNotSwiperProduct}
      />
    </CardHoc>
  );
};

export default ProductCard;
