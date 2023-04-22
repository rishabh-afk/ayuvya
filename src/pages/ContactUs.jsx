import { Link } from "react-router-dom";
import Layouts from "../components/UI/Layouts";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import ContactForm from "../components/common/forms/ContactForm";

const ContactUs = () => {
  return (
    <Layouts>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:px-20">
        <div className="w-full lg:w-1/2 p-6 lg:p-10 pt-16">
          <h4 className="text-2xl font-bold mb-2 text-center lg:text-left">
            GET IN TOUCH
          </h4>
          <p className="font-medium text-gray-400 text-center lg:text-left py-4 lg:py-0">
            Have a question or comment? Use the form to send us a message and
            our team will get back to you within 1-2 working days or you can
            reach us at{" "}
            <Link
              to={"tel:+91 9717133893"}
              className="text-blue-400 hover:text-blue-800 hover:underline hover:underline-offset-2"
            >
              +91 9717133893
            </Link>
          </p>

          <div className="flex flex-col gap-6 py-4 lg:py-10 text-gray-400">
            <div className="flex gap-8 items-center">
              <RiCustomerService2Line size={25} color="black" />
              <p className="">
                <Link
                  to={"tel:+91 9717133893"}
                  className="text-blue-400 hover:text-blue-900 hover:underline hover:underline-offset-2"
                >
                  +91 9717133893
                </Link>{" "}
                (Monday-Saturday 11:00 AM - 6:00 PM)
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <TfiEmail size={25} color="black" />
              <Link
                to={"mailto:care@ayuvya.com"}
                className="text-blue-400 hover:text-blue-900 hover:underline hover:underline-offset-2"
              >
                care@ayuvya.com
              </Link>
            </div>
            <div className="flex gap-8 items-center">
              <TfiLocationPin size={25} color="black" />
              <div>
                <h4 className="text-xl font-medium">Ayuvya Ayurveda</h4>
                <p className="">34, Hauz Khas, New Delhi, Delhi 110016</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-10 pt-0 lg:pt-16">
          <ContactForm />
        </div>
      </div>
    </Layouts>
  );
};

export default ContactUs;
