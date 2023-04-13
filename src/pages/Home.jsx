import Banner from "../components/Home/Banner";
import whyAyuvyaImage from "../assets/images/why_ayuvya.webp";
import ShopByConcern from "../components/Home/ShopByConcern";
import { product } from "../data/products";
import ProductSection from "../components/Home/ProductSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl m-auto">
        <div className="p-6 lg:px-24">
          <figure>
            <img src={whyAyuvyaImage} alt="" />
          </figure>
          <figcaption className="py-8">
            <p className="text-xl text-center">
              Ayuvya Ayurveda is one of the most trusted platforms in India that
              has over 2 lakhs plus satisfied customers. A wellness brand where
              the past meets the future. Every product is a rare blend of potent
              herbs inspired by ancient herbal secrets. After travelling the
              holy lands of India, Ayuvya Ayurveda brings a premium range of
              products that is perfected through science and will fit perfectly
              into your self-care regime and not the other way around.
            </p>
          </figcaption>
        </div>
      </div>
      <ShopByConcern />
      <ProductSection product={product} />
    </div>
  );
};

export default Home;
