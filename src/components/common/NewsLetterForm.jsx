import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

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
      </form>
    </>
  );
};

export default NewsLetterForm;
