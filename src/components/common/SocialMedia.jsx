import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <>
      <ul className="flex gap-6 lg:gap-5 py-6">
        <li>
          <Link to={"https://www.facebook.com/ayuvyayurveda"} target="blank">
            <BsFacebook size={18} />
          </Link>
        </li>
        <li>
          <Link to={"https://www.instagram.com/ayuvyayurveda/"} target="blank">
            <BsInstagram size={18} />
          </Link>
        </li>
        <li>
          <Link
            to={"https://www.youtube.com/channel/UCwcwGuLFlQYTQOxl9qantIg"}
            target="blank"
          >
            <BsYoutube size={22} />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
