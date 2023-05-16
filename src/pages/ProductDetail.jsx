import axios from "axios";
import config from "../config/config";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Layouts from "../components/UI/Layouts";
import { platforms } from "../data/ottplatform";
import Loader from "../components/common/Loader";
import { useNavigate, useParams } from "react-router-dom";
import Platforms from "../components/common/card/Platforms";
import ProductCard from "../components/product/ProductCard";
import Reviews from "../components/product/productDetails/Reviews";
import CustomSwiper from "../components/common/custom/CustomSwiper";
import HowToUse from "../components/product/productDetails/HowToUse";
import Benefits from "../components/product/productDetails/Benefits";
import Recommendation from "../components/common/card/Recommendation";
import Ingredients from "../components/product/productDetails/Ingredients";
import CommonDetails from "../components/product/productDetails/CommonDetails";
import CustomerReview from "../components/product/productDetails/CustomerReview";
import ImagesSwiper from "../components/product/productDetails/imageswiper/ImagesSwiper";
import AddProductButton from "../components/product/productDetails/AddProductButton";
import SafeAndEffective from "../components/product/productDetails/SafeAndEffective";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const BASE_URL = config.REACT_APP_BASE_URL;
        if (slug) {
          const resp = await axios.get(`${BASE_URL}api/products/test/${slug}/`);
          setProduct(resp.data);
        }
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/collection/all");
        }
      }
    };
    fetchProduct();
  }, [dispatch, slug, navigate]);

  if (!product) {
    return <Loader />;
  }

  return (
    <Layouts>
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mx-3 lg:mx-16 my-8">
          <div className="w-full md:w-1/2 p-1 lg:p-4">
            <ImagesSwiper images={product?.product_images} />
          </div>
          <div className="w-full md:w-1/2 p-1 lg:p-4">
            <CommonDetails product={product} />
            <div className="border-y bg-slate-100 h-auto cursor-none lg:cursor-pointer my-4">
              <div className="my-4">
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
            </div>
            <AddProductButton product={product} />
          </div>
        </div>
        <div className="mx-4 lg:mx-10">
          {product?.ingredient_section && (
            <Ingredients ingredients={product?.ingredient_section} />
          )}
          {product?.benefits_section && (
            <Benefits
              benefits={product?.benefits_section[0]}
              title={product?.benefits_section[0]?.title}
            />
          )}
          <CustomerReview
            review_count={product?.review_count}
            rating_five={product?.rating_five}
            rating_four={product?.rating_four}
            rating_three={product?.rating_three}
            rating_two={product?.rating_two}
            rating_one={product?.rating_one}
          />
        </div>
        {product?.reviews && (
          <Reviews
            reviews={product?.reviews}
            review_count={product?.review_count}
          />
        )}
        {product?.related_products && (
          <Recommendation
            title={"Products you can't miss"}
            componentToBeRender={ProductCard}
            related_products={product?.related_products}
          />
        )}
        {product?.how_to_use_section &&
          product?.how_to_use_section.map((item) => {
            return (
              <div key={item.id}>
                <h4 className="text-2xl font-semibold">{item?.title}</h4>
                <HowToUse data={item.step} />
              </div>
            );
          })}
        {product?.safe_and_effective && (
          <SafeAndEffective safe_and_effective={product?.safe_and_effective} />
        )}
      </section>
    </Layouts>
  );
};

export default ProductDetail;
