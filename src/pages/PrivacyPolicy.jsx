import { Link } from "react-router-dom";
import Layouts from "../components/UI/Layouts";

const PrivacyPolicy = () => {
  return (
    <Layouts>
      <div className="max-w-7xl mx-auto px-6 lg:px-20 lg:pb-10">
        <h2 className="text-3xl lg:text-5xl font-semibold mt-10">
          Privacy Policy
        </h2>
        <div className="text-lg flex flex-col gap-3 py-10">
          {" "}
          <p className="">
            Ayurveda House Private Limited respects an individual’s privacy and
            is committed to protecting the same. Our relationship with you is
            our most valuable asset and is the basis of our name and reputation.
          </p>
          <p className="">
            Our company{" "}
            <Link
              to={"https://www.ayuvya.com"}
              className="text-blue-400 hover:text-blue-800"
            >
              www.ayuvya.com
            </Link>{" "}
            places its highest value on your trust and prioritizes protection of
            your personal information. This privacy policy explains how Ayuvya
            Ayurveda will collect, use, share and process personal information
            in relation to the services provided on the website.
          </p>
          <p className="">
            By providing your consent to the privacy policy, you expressly
            consent and agree to our use and disclosure of your personal
            information in accordance with the privacy policy.
          </p>
        </div>
        <h2 className="text-2xl font-bold">What Information Do We Collect?</h2>
        <div className="text-lg flex flex-col gap-3 py-6">
          <p className="">
            You may be required to provide us with your personal information
            during the course of using the website for instance, at the time of
            creating a User ID or filling out financial information while making
            an online purchase, participating in any online contest or survey,
            uploading content, at the time of communicating with website’s
            customer service by phone, email or otherwise, at the time of
            providing feedbacks for the content available on the website.
            Following are the categories of personal information that is
            collected by us-
          </p>
          <ul className="list-disc ml-6">
            <li className="">Name (including title);</li>
            <li className="">Address</li>
            <li className="">Country</li>
            <li className="">Mobile number</li>
            <li className="">Gender</li>
            <li className="">Email address</li>
            <li className="">Order details</li>
            <li className="">Query</li>
            <li className="">Your IP address</li>
            <li className="">I need help with (Subject) </li>
            <li className="">Comments/Reviews</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold">
          What do we do with the Information collected by us?
        </h2>
        <div className="">
          <p className="py-4">
            We only collect information that you provide to us while purchasing
            our products and filling out any forms. We then use this personal
            information to better understand your needs and deliver you the best
            services, in particular for the following reasons:
          </p>
          <ul className="list-disc ml-6 flex flex-col gap-2">
            <li className="">Internal record keeping</li>
            <li className="">
              To better understand your expectations and needs.
            </li>
            <li className="">
              To handle inquiries and complaints of our customers, providing
              recommendations based on your past purchase behavior,
              communicating with you through phone, mobile application, or
              email, to notify you and send offers about our products and
              services.
            </li>
            <li className="">
              To customize the website & improve the interface according to your
              interests.
            </li>
            <li className="">
              To conduct internal research on our Customer’s demographics,
              interests, and behavior to better understand and serve you.
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold mt-16">DO WE USE COOKIES?</h2>
        <div className="flex flex-col gap-2 py-6">
          <p className="">
            We use cookies to track your preferences and remember the
            information about your visit. You understand that a cookie is a
            small piece of data that is sent to your web browser from a web
            server and is eventually stored on your computer's hard drive. The
            Cookies may store a variety of information, including, the number of
            times that you access the website, registration information, and the
            number of times that you view a particular product or page on the
            Platform. The use of cookies is a common practice adopted by most
            major websites to better serve their visitors.
          </p>
          <p className="">
            By continuing the use of the Platform, you are agreeing to our use
            of cookies.
          </p>
          <p className="">
            You may choose to disable/decline cookies, however, the same may
            have a significant impact on your experience & you may lose some
            functionality or find some parts inaccessible on the platform. We
            recommend that you leave cookies turned on for use of this website.
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-6">LINKS TO OTHER WEBSITES</h2>
        <p className="mt-6">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over any other website. Therefore, we
          cannot be held responsible for the protection and privacy of any
          information which you provide whilst visiting such sites, and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </p>
        <h2 className="text-2xl font-bold mt-6">POLICY UPDATES</h2>
        <p className="mt-6">
          We reserve the right to change or update this privacy policy at any
          time, without notice of such update/change to any persons/ entity.
          Such changes shall be effective immediately upon posting on the
          website. Thus, you are advised to review this page periodically for
          any changes. You understand and agree that you shall be solely
          responsible for keeping yourself updated with this Privacy Policy.
        </p>
        <h2 className="text-2xl font-bold mt-6">CONTACT US</h2>
        <p className="mt-6">
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at{" "}
          <Link
            to={"mailto:care@ayuvya.com"}
            className="text-blue-400 hover:text-blue-800"
          >
            care@ayuvya.com
          </Link>
        </p>
      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;
