import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Layouts from "../components/UI/Layouts";
import MetaTags from "../components/meta/MetaTags";
import WhyAyuvya from "../components/Home/WhyAyuvya";
import Testimonials from "../components/Home/Testimonials";
import PlaystoreApp from "../components/Home/PlaystoreApp";
import { useLocation, useNavigate } from "react-router-dom";
import ShopByConcern from "../components/Home/ShopByConcern";
import ProductSection from "../components/Home/ProductSection";
import InstagramPosts from "../components/Home/InstagramPosts";
import Blogs from "../components/Home/Blogs";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/collection/" ||
      location.pathname === "/collection"
    ) {
      navigate("/");
    }
  }, [navigate, location]);
  return (
    <Layouts>
      <MetaTags
        metaTitle="Ayuvya Ayurveda - Ayurvedic Products | Ayurvedic Healthcare App"
        metaDesc="Experience the best of Ayurveda at Ayuvya where we specialize in authentic Ayurvedic formulations and traditional rituals adapted to modern health & wellness care."
        metaKey="Ayurvedic Products, Skin Care"
      />
      <Banner />
      <WhyAyuvya />
      <ShopByConcern />
      <ProductSection />
      <InstagramPosts />
      <Testimonials />
      <Blogs />
      <PlaystoreApp />
    </Layouts>
  );
};

export default Home;
