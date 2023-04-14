import { Link } from "react-router-dom";
import AyuvyaWhiteLogo from "../../assets/logo/ayuvya_ayurveda_white.png";
import { AiFillCopyrightCircle } from "react-icons/ai";
import NewsLetterForm from "./forms/NewsLetterForm";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
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
      <div className="relative bottom-0">
        <div className="bg-[url('assets/images/footer_background.jpg')] bg-no-repeat bg-center bg-cover pt-8">
          <div className="flex flex-col lg:flex-row w-[90%] py-10 mx-auto border-t border-white text-white">
            <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2 lg:border-r lg:pr-16">
              <figure className="w-48 lg:w-72 m-auto lg:m-0">
                <Link to={"/"}>
                  <img src={AyuvyaWhiteLogo} alt="Ayuvya logo" />
                </Link>
              </figure>
              <figcaption className="pb-8">
                <p className="text-3xl lg:text-4xl pt-5 lg:pt-3">Get 5% off!</p>
                <NewsLetterForm />
              </figcaption>
            </div>
            <div className="w-full lg:w-3/5 lg:px-16">
              <div className="flex flex-wrap justify-start lg:justify-between gap-5 text-xl border-b">
                <div className="">
                  <h4 className="underline underline-offset-4 font-semibold">
                    Shop
                  </h4>
                  <ul className="flex flex-col gap-3 py-6 lg:py-10">
                    <li>
                      <Link to={"shipping-policy"}>Shipping And Returns</Link>
                    </li>
                    <li>
                      <Link to={"faqs"}>FAQs</Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="underline underline-offset-4 font-semibold">
                    About Us
                  </h4>
                  <ul className="flex flex-col gap-3 py-6 lg:py-10">
                    <li>
                      <Link to={"about-us"}>About Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="underline underline-offset-4 font-semibold">
                    Get help
                  </h4>
                  <ul className="flex flex-col gap-3 py-6 lg:py-10">
                    <li>
                      <Link to={"contact-us"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="pt-10 text-2xl">Follow Us</p>
                <SocialMedia />
                <p className="items-center text-lg py-8">
                  <span className="inline-block mr-1">
                    <AiFillCopyrightCircle size={20} />
                  </span>
                  AYURVEDA HOUSE PRIVATE LIMITED INC 2023 <br /> 34 A Ground
                  Floor, Hauz Khas Fort Rd, Hauz Khas, New Delhi, Delhi 110016
                </p>
                <ul className="flex gap-5 text-lg">
                  <li className="underline underline-offset-4">
                    <Link to={"privacy-policy"}>Privacy Policy</Link>
                  </li>
                  <li className="underline underline-offset-4">
                    <Link to={"terms-and-condition"}>Terms And Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#242424] flex justify-center items-center p-3">
          <p className="text-white text-md lg:text-lg text-center lg:text-left">
            © Copyright 2023 AYURVEDA HOUSE PRIVATE LIMITED All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
