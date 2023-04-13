import { Link } from "react-router-dom";

const InstagramPosts = () => {
  return (
    <div className="flex bg-[#f8f9fa] flex-col justify-center items-center p-10 pb-0">
      <Link to={"https://www.instagram.com/ayuvyayurveda/"}>
        <h2>@AYUVYAYURVEDA</h2>
        <p>see you at the 'gram</p>
      </Link>
      <div className="flex flex-wrap gap-3"></div>
    </div>
  );
};

export default InstagramPosts;
