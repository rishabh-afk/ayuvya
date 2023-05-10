import { Link } from "react-router-dom";
import dummyImage from "../../assets/images/product/Skin-Care_Shop_by_concern_New_Webp.webp";
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const InstagramPosts = () => {
  const [instaPosts, setInstaPosts] = useState([]);
  const fetchInstaPosts = async () => {
    const resp = await axios.get("http://192.168.0.110:80/api/insta");
    if (resp.statusCode === 200) {
      setInstaPosts(resp.body.results);
    }
  };
  useEffect(() => {
    fetchInstaPosts();
  }, [instaPosts]);
  return (
    <div className="flex bg-[#f8f9fa] flex-col justify-center items-center px-2 py-10 lg:pt-10 pb-0">
      <Link
        to={"https://www.instagram.com/ayuvyayurveda/"}
        target="blank"
        className="text-center"
      >
        <h2 className="text-xl font-bold text-[#777]">@AYUVYAYURVEDA</h2>
        <p className="text-3xl">see you at the 'gram</p>
      </Link>
      <div className="max-w-7xl flex flex-wrap justify-center gap-3 py-8">
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
        <Link
          className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative block bg-gray-900 group"
          to={"https://www.instagram.com/ayuvyayurveda/"}
          target="blank"
        >
          <img
            className="absolute object-cover group-hover:opacity-50"
            src={dummyImage}
            alt=""
          />
          <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <BsInstagram size={30} color="white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InstagramPosts;
