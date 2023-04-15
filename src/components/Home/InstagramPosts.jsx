import { Link } from "react-router-dom";
import dummyImage from "../../assets/images/product/Skin-Care_Shop_by_concern_New_Webp.webp";
// import { useState } from "react";
// import { BsInstagram } from "react-icons/bs";

const InstagramPosts = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };
  return (
    <div className="flex bg-[#f8f9fa] flex-col justify-center items-center px-2 py-10 lg:p-10 pb-0">
      <Link
        to={"https://www.instagram.com/ayuvyayurveda/"}
        target="blank"
        className="text-center"
      >
        <h2 className="text-xl font-bold text-[#777]">@AYUVYAYURVEDA</h2>
        <p className="text-3xl">see you at the 'gram</p>
      </Link>
      <div className="max-w-7xl flex flex-wrap py-8">
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="relative transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <div tabIndex="-3">
          {/* {hover && <BsInstagram className="absolute left-0" size={25} />} */}
        </div>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/p/Cqp78L3J9b3/"}
          target="blank"
          // onMouseEnter={onHover}
          // onMouseLeave={onHover}
          className="w-1/2 md:w-1/4"
        >
          <figure className="p-1">
            <img
              className="transition duration-300 ease-in-out hover:brightness-50"
              src={dummyImage}
              alt=""
            />
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default InstagramPosts;
