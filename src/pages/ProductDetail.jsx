import axios from "axios";
import config from "../config/config";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layouts from "../components/UI/Layouts";
import Loader from "../components/common/Loader";
import MetaTags from "../components/meta/MetaTags";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import Reviews from "../components/product/productDetails/Reviews";
import HowToUse from "../components/product/productDetails/HowToUse";
import Benefits from "../components/product/productDetails/Benefits";
import Recommendation from "../components/common/card/Recommendation";
import Ingredients from "../components/product/productDetails/Ingredients";
import CommonDetails from "../components/product/productDetails/CommonDetails";
import CustomerReview from "../components/product/productDetails/CustomerReview";
import SafeAndEffective from "../components/product/productDetails/SafeAndEffective";
import ImagesSwiper from "../components/product/productDetails/imageswiper/ImagesSwiper";

const ProductDetail = () => {
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
  }, [slug, navigate]);

  if (!product) {
    return <Loader />;
  }

  return (
    <Layouts>
      <MetaTags
        metaTitle={product?.meta_title}
        metaDesc={product?.meta_description}
        metaKey={product?.meta_keywords}
      />
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        key={product?.product_name}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row mx-3 md:mx-8 lg:mx-16 my-8">
          <div className="w-full lg:w-1/2 p-1 lg:p-4">
            <ImagesSwiper images={product?.product_images} />
          </div>
          <div className="w-full lg:w-1/2 p-1 lg:p-4">
            <CommonDetails product={product} />
          </div>
        </div>
        <div className="mx-3 md:mx-8 lg:mx-24">
          <Ingredients ingredients={product?.ingredient_section} />
          <Benefits benefits_section={product?.benefits_section} />
          <CustomerReview
            review_count={product?.review_count}
            rating_five={product?.rating_five}
            rating_four={product?.rating_four}
            rating_three={product?.rating_three}
            rating_two={product?.rating_two}
            rating_one={product?.rating_one}
          />
        </div>
        <Reviews
          reviews={product?.reviews}
          review_count={product?.review_count}
        />
        <Recommendation
          title={"Products you can't miss"}
          componentToBeRender={ProductCard}
          related_products={product?.related_products}
        />

        <HowToUse
          how_to_use_section={product?.how_to_use_section}
          recommendation={product?.recommendation}
        />
        <SafeAndEffective safe_and_effective={product?.safe_and_effective} />
      </motion.section>
    </Layouts>
  );
};

export default ProductDetail;
