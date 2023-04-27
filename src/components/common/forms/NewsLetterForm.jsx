import { useState } from "react";
import Button from "../Button";
import { MdEmail } from "react-icons/md";

const NewsLetterForm = () => {
  const [newsLetter, setNewsletter] = useState({
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            type="email"
            placeholder="EMAIL ADDRESS"
            name="email"
            id="email"
            className="border border-gray-300 text-gray-400 text-lg rounded-full py-3 bg-white block w-full pl-20"
            onChange={(e) =>
              setNewsletter({ ...newsLetter, email: e.target.value })
            }
          />
        </div>
        <div className="relative mb-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <select
              name="phoneNumber"
              id="phoneNumber"
              className="text-lg text-gray-400 w-14 focus:bg-white outline-none bg-white"
            >
              <option disabled value="none">
                Select Country Code
              </option>
              <option defaultValue={+91}>+91</option>
            </select>
          </div>
          <input
            type="number"
            placeholder="PHONE NUMBER"
            name="phoneNumber"
            id="phoneNumber"
            maxLength={10}
            required
            className="border border-gray-300 text-gray-400 text-lg rounded-full py-3 bg-white block w-full pl-20"
          />
        </div>
        <Button
          className="border-white outline-none bg-white w-fit rounded-full"
          type="submit"
        >
          <span className="font-semibold text-black px-7 py-1">SIGN UP</span>
        </Button>
      </form>
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <FormInput
          type="email"
          placeholder="EMAIL ADDRESS"
          name="email"
          id="email"
          className="rounded-full w-full py-3 px-5"
          onChange={(e) =>
            setNewsletter({ ...newsLetter, email: e.target.value })
          }
        />
        <FormInput
          type="number"
          placeholder="PHONE NUMBER"
          name="phoneNumber"
          id="phoneNumber"
          className="rounded-full w-full py-3 px-5"
          onChange={(e) =>
            setNewsletter({
              ...newsLetter,
              phoneNumber: e.target.value,
            })
          }
        />
        <Button
          className="border-white outline-none bg-white w-fit rounded-full"
          type="submit"
        >
          <span className="font-semibold text-black px-7 py-1">SIGN UP</span>
        </Button>
      </form> */}
    </>
  );
};

export default NewsLetterForm;
