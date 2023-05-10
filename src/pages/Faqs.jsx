import Layouts from "../components/UI/Layouts";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <Layouts>
      <div className="max-w-7xl mx-auto p-6 lg:px-20 lg:py-8">
        <div className="w-full lg:w-3/4">
          <h1 className="text-3xl">FAQs</h1>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              1. How can I get in touch with Ayuvya Ayurveda?
            </p>
            <p>
              You can write a mail to us at{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"mailto:care@ayuvya.com"}
              >
                care@ayuvya.com
              </Link>{" "}
              or Call us at{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"tel:9818666454"}
              >
                9818666454
              </Link>
              . You can also ask your Queries on our WhatsApp number-{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"tel:+91818666454"}
              >
                +91818666454
              </Link>
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              2. How long does it take for the order to Arrive?
            </p>
            <p>
              We try to ship the products within 2 working days of receiving the
              order. You can expect your shipment to arrive within 5-7 Working
              Days of placing the order. However, due to some unexpected
              circumstances, your order might get delayed so please be patient.
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              3. How can I Track my order?
            </p>
            <p>
              The tracking link sent via Text/WhatsApp/E-mail will be activated
              once your order is dispatched. It will include the shipment
              number/AWB and the name of the courier company. You can track your
              order on their website or you can also write to us at
              care@ayuvya.com.
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              4. Can I modify my order after placing it?
            </p>
            <p>
              Unfortunately, after the order is placed, you cannot modify the
              order but you can always place a new order for the desired
              products. If you wish to remove products from your order, please
              contact us at customer support within a few hours as the Order
              once Dispatched can not be cancelled.
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              5. How do I know that my Order is Confirmed?
            </p>
            <p>
              Once you place an order, you will receive a confirmation message
              via Email, Text & WhatsApp. It will include your order number,
              mode of payment & product details.
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              6. How to return the products?
            </p>
            <p className="font-semibold">*An Unboxing Video is a Must*</p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              If you have received the wrong/less item-
            </p>
            <p className="">
              Send your Order Id/AWB Number/Other Details and a Proper Unboxing
              Video to{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"mailto:care@ayuvya.com"}
              >
                care@ayuvya.com
              </Link>{" "}
              within 48 hours of receiving your order. A Return will be created
              for Picking the Wrong item & a tracking link for the correct
              product will be shared with you via mail/ text/WhatsApp. Our
              customer care number is{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"tel:9717133893"}
              >
                9717133893
              </Link>{" "}
              which remains active between 11:00 AM to 6:00 PM. You can also
              connect with us on our WhatsApp Number-{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"tel:9818666454"}
              >
                9818666454
              </Link>
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              If You have changed your Mind-
            </p>
            <p>
              We cannot initiate a return after 48 hours of Delivery. The
              product must be unopened and in the same condition as it was
              dispatched. We shall not accept returns of products consumed or
              once opened.
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              If You Have Received a Damaged/Broken item-
            </p>
            <p>
              Send your Order Id/AWB Number/Other Details and a Proper Unboxing
              Video to{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"mailto:care@ayuvya.com"}
              >
                care@ayuvya.com
              </Link>{" "}
              within 2 days of receiving your order. The tracking link for the
              Right product will be shared with you via mail or WhatsApp. Our
              customer care number is{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"tel:9717133893"}
              >
                9717133893
              </Link>{" "}
              which remains active between 11:00 AM to 6:00 PM. You can also
              connect with us on our WhatsApp Number-{" "}
              <Link
                className="text-blue-400 hover:text-blue-800"
                to={"tel:9818666454"}
              >
                9818666454
              </Link>
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold text-lg">
              7. Can you Expedite my Order on priority?
            </p>
            <p>
              If you want us to expedite your order, give us a call at customer
              support. We will check with our logistics partner and provide you
              with an update.
            </p>
            <span>
              Please Note - This is only applicable for prepaid orders.
            </span>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Faqs;
