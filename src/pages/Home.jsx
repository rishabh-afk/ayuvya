import Banner from "../components/Home/Banner";
import whyAyuvyaImage from "../assets/images/why_ayuvya.webp";
import mobileApp from "../assets/images/mobile.png";
import ShopByConcern from "../components/Home/ShopByConcern";
import { product } from "../data/products";
import ProductSection from "../components/Home/ProductSection";
import InstagramPosts from "../components/Home/InstagramPosts";
import Blogs from "../components/Home/Blogs";
import Testimonials from "../components/Home/Testimonials";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";

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
      <InstagramPosts />
      <Testimonials />
      <Blogs />
      <div className="bg-[#f8f9fa]">
        <div className="max-w-7xl m-auto flex flex-col md:flex-row gap:14 md:gap-28 px-6 py-12 md:p-12 lg:px-24">
          <figure className="w-full md:w-1/4">
            <img className="px-20 md:px-0" src={mobileApp} alt="Mobile" />
          </figure>
          <figcaption className="flex flex-col gap-5 py-8 w-full md:w-3/4">
            <h2 className="text-4xl font-semibold border-b-4 w-fit pb-2">
              Ayuvya Ayurveda advice on Cure,
              <br /> Beauty & Fitness
            </h2>
            <p className="text-lg">
              Ayurveda is a 6000 year old system of healing from India. The
              ayurvedic concept of health is based on the idea of achieving
              dynamic balance in the three doshas. AYUVYA believes that
              maintaining health is a unique balance between body, emotions and
              spiritual dimensions. AYUVYA translates knowledge of ancient
              Ayurveda to the masses and helps them to enrich their lives with
              ways of Ayurvedic Living.
            </p>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.ayuvya.ayuvya"
              }
              target="blank"
              rel="noopener"
            >
              <Button className="bg-black text-white text-left rounded-md px-4">
                <FaGooglePlay size={25} />
                <div>
                  <span className="text-xs block">GET IT ON</span>
                  <span className="">Google Play</span>
                </div>
              </Button>
            </Link>
          </figcaption>
        </div>
      </div>
      <div className="py-12">
        <p className="text-sm text-center w-3/4 mx-auto leading-6 text-gray-400">
          The information available on this website is not intended as a
          substitute for advice from your doctor, health care professional,
          physician, or any licensed herbalist. You should always consult with a
          doctor, healthcare professional before taking any nutritional,
          dietary, or herbal supplement. Products offered on this website are
          not intended to diagnose, cure, treat, or prevent any disease.
        </p>
      </div>
    </div>
  );
};

export default Home;
