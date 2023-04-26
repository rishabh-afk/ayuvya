import { useDispatch, useSelector } from "react-redux";
import ImagesSwiper from "../components/product/productDetails/imageswiper/ImagesSwiper";
import Layouts from "../components/UI/Layouts";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/common/Loader";
import axios from "axios";
import { setCurrentProduct } from "../store/slices/productSlice";
import CommonDetails from "../components/product/productDetails/CommonDetails";
import CustomSwiper from "../components/common/custom/CustomSwiper";
import { platforms } from "../data/ottplatform";
import Platforms from "../components/common/card/Platforms";
import Button from "../components/common/Button";
import Benefits from "../components/product/productDetails/Benefits";
import Ingredients from "../components/product/productDetails/Ingredients";
import CustomerReview from "../components/product/productDetails/CustomerReview";
import ProductCard from "../components/product/ProductCard";
import Reviews from "../components/product/productDetails/Reviews";
import { addCartItem, fetchCartItems } from "../store/slices/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.productDetails);
  // const cartdata = useSelector((state) => state.cart.cartData);
  const { productId } = location?.state ?? "";
  useEffect(() => {
    const fetchProduct = async () => {
      const BASE_URL = process.env.REACT_APP_BASE_URL;
      if (productId) {
        const resp = await axios.get(`${BASE_URL}api/products/${productId}/`);
        dispatch(setCurrentProduct(resp.data));
      } else {
        navigate("/all");
      }
    };
    fetchProduct();
  }, [dispatch, productId, navigate]);

  if (Object.keys(productData).length === 0) {
    return <Loader />;
  }
  const addToCart = (id) => {
    const data = {
      product: id,
      quantity: 1,
    };
    dispatch(addCartItem(data));
    dispatch(fetchCartItems());
  };

  return (
    <Layouts>
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mx-3 lg:mx-16 my-8">
          <div className="w-full md:w-1/2 p-1 lg:p-4">
            <ImagesSwiper images={productData.product_images} />
          </div>
          <div className="w-full md:w-1/2 p-1 lg:p-4">
            <CommonDetails product={productData} />
            <div className="border-y bg-slate-100 h-auto cursor-none lg:cursor-pointer my-4">
              <CustomSwiper
                componentToBeRender={Platforms}
                navigation={false}
                data={platforms}
                noOfSlidePerView={[
                  {
                    0: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    980: {
                      slidesPerView: 4,
                      spaceBetween: 25,
                    },
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-5">
              <Button
                handler={() => addToCart(productData.id)}
                className="w-full md:w-3/4 bg-white border-2 border-slate-200 py-3"
              >
                <span className="text-3xl font-bold text-[#7d8801] text-center mx-auto">
                  Add To Cart
                </span>
              </Button>
              <Button className="w-full md:w-3/4 bg-[#7d8801] border-2 border-[#7d8801] py-3">
                <span className="text-3xl font-bold text-white text-center mx-auto">
                  Buy Now
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-4 lg:mx-10">
          {productData.ingredients.length > 0 && (
            <Ingredients ingredients={productData.ingredients} />
          )}
          {productData.benefits && (
            <Benefits
              benefits={productData.benefits}
              title={productData.product_nick_name.split(" ")[1]}
            />
          )}
          <CustomerReview
            review_count={productData.review_count}
            rating_five={productData.rating_five}
            rating_four={productData.rating_four}
            rating_three={productData.rating_three}
            rating_two={productData.rating_two}
            rating_one={productData.rating_one}
          />
        </div>
        {productData.reviews.length > 0 && (
          <Reviews
            reviews={productData.reviews}
            review_count={productData.review_count}
          />
        )}
        {productData.related_products.length > 0 && (
          <h4 className="text-3xl font-bold mx-4 lg:mx-24 mb-5">
            Products you can't miss
          </h4>
        )}
        <div className="flex flex-wrap mx-3 lg:mx-20">
          {productData &&
            productData.related_products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-1/2 md:w-1/3 lg:w-1/4 p-2 lg:p-3"
                >
                  <ProductCard
                    key={item.id}
                    itemObj={item}
                    headingSize="text-lg"
                  />
                </div>
              );
            })}
        </div>
      </section>
    </Layouts>
  );
};

export default ProductDetail;
