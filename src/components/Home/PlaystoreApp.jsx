import Button from "../common/Button";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";
import mobileApp from "../../assets/images/mobile.png";

const PlaystoreApp = () => {
  return (
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
                <span className="text-xs block">Get it on</span>
                <span className="text-base">Google Play</span>
              </div>
            </Button>
          </Link>
        </figcaption>
      </div>
    </div>
  );
};

export default PlaystoreApp;
