import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-40 lg:pb-10">
      <h2 className="text-3xl lg:text-5xl font-semibold py-10">
        Terms and Conditions
      </h2>
      <div className="">
        <p className="">Welcome to Ayuvya Ayurveda!</p>
        <p className="">
          These terms and conditions outline the rules and regulations for the
          use of Ayurveda House Pvt. Ltd.'s Website, located at{" "}
          <Link
            to={"https://www.ayuvya.com"}
            className="text-blue-400 hover:text-blue-800"
          >
            www.ayuvya.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
