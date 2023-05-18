import axios from "axios";
import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import config from "../../../config/config";

const NewsLetterForm = () => {
  const [newsLetter, setNewsletter] = useState({
    email: "",
    phoneNumber: "",
    countryCode: "+91",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: newsLetter.email,
        phone_number: newsLetter?.countryCode + newsLetter.phoneNumber,
      };
      const BASE_URL = config.REACT_APP_BASE_URL;
      const resp = await axios.post(`${BASE_URL}api/newsletter/create/`, data, {
        headers: { "Content-Type": "application/json" },
      });
      if (resp.status === 201) {
        toast("Your feedback has been submitted");
        setNewsletter(null);
      }
    } catch (error) {
      toast("Something went wrong");
      console.log(newsLetter);
      setNewsletter(null);
    }
  };

  return (
    <>
      <p className="text-lg lg:text-xl py-8 lg:py-6">
        Sign up to our newsletter - the place for wild news, invitations and
        good karma treats!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative mb-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <MdEmail size={30} className="text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            maxLength="50"
            placeholder="EMAIL ADDRESS"
            className="border border-gray-300 text-gray-400 text-lg rounded-full py-3 bg-white block w-full pl-20"
            value={newsLetter?.email || ""}
            onChange={(e) =>
              setNewsletter({ ...newsLetter, email: e.target.value })
            }
            required
          />
        </div>
        <div className="relative mb-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <select
              name="phoneNumber"
              id="phoneNumber"
              onChange={(e) => {
                setNewsletter({
                  ...newsLetter,
                  countryCode: e.target.value || +91,
                });
              }}
              value={newsLetter?.countryCode || "+91"}
              className="text-lg text-gray-400 w-16 outline-none"
              style={{ background: "none" }}
            >
              <option disabled value="">
                Select Country Code
              </option>
              <option value={"+91"}>
                +91
              </option>
            </select>
          </div>
          <input
            type="number"
            maxLength="10"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9\/]*"
            placeholder="PHONE NUMBER"
            className="border border-gray-300 text-gray-400 text-lg rounded-full py-3 bg-white block w-full pl-20"
            value={newsLetter?.phoneNumber || ""}
            onChange={(e) =>
              setNewsletter({ ...newsLetter, phoneNumber: e.target.value })
            }
            required
          />
        </div>
        <Button
          className="border-white outline-none bg-white w-fit rounded-full"
          type="submit"
        >
          <span className="font-semibold text-black px-7 py-1">SIGN UP</span>
        </Button>
      </form>
    </>
  );
};

export default NewsLetterForm;
