import Button from "../Button";
import { useState } from "react";

const ContactForm = () => {
  const [feedBack, setFeedBack] = useState({
    username: "",
    phoneNumber: "",
    comment: "",
    emailId: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="rounded-none shadow-2xl">
      <div className="p-4 lg:p-14">
        <h4 className="text-lg py-4 lg:py-0 lg:text-2xl font-bold text-center">
          WANT TO SAY SOMETHING?
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 lg:mt-14">
            <div className="relative">
              <input
                type="text"
                id="username"
                required
                autoFocus
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                onChange={(e) =>
                  setFeedBack({ ...feedBack, username: e.target.value })
                }
              />
              <label
                htmlFor="username"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Name *
              </label>
            </div>
          </div>
          <div className="mt-5">
            <div className="relative">
              <input
                type="email"
                id="emailId"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                onChange={(e) =>
                  setFeedBack({ ...feedBack, emailId: e.target.value })
                }
              />
              <label
                htmlFor="emailId"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Email *
              </label>
            </div>
          </div>
          <div className="mt-5">
            <div className="relative">
              <input
                type="number"
                id="phoneNumber"
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                onChange={(e) =>
                  setFeedBack({ ...feedBack, phoneNumber: e.target.value })
                }
              />
              <label
                htmlFor="phoneNumber"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Phone Number
              </label>
            </div>
          </div>
          <div className="mt-5">
            <div className="relative">
              <textarea
                rows={5}
                type="text"
                id="comment"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                onChange={(e) =>
                  setFeedBack({ ...feedBack, comment: e.target.value })
                }
              />
              <label
                htmlFor="comment"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Describe Your Query *
              </label>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full rounded-lg bg-gray-400 text-white border border-gray-400 mt-5 py-3 hover:bg-gray-400/90"
          >
            <span className="text-center w-full text-xl">Send Message</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
