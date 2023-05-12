import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getInstaPosts } from "../../store/slices/commonSlice";

const InstagramPosts = () => {
  const instaPosts = useSelector((state) => state.common.instaPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInstaPosts());
  }, [dispatch]);
  return (
    <>
      {instaPosts.length > 0 && (
        <div className="flex bg-[#f8f9fa] flex-col justify-center items-center px-2 py-10 lg:pt-10 pb-0">
          <Link
            to={"https://www.instagram.com/ayuvyayurveda/"}
            target="blank"
            className="text-center"
          >
            <h2 className="text-xl font-bold text-[#777]">@AYUVYAYURVEDA</h2>
            <p className="text-3xl">see you at the 'gram</p>
          </Link>
          <div className="max-w-7xl flex flex-wrap justify-center gap-3 py-8">
            {instaPosts.map((instaPost) => {
              return (
                <Link
                  key={instaPost.id}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 relative bg-gray-900 group"
                  to={instaPost.permalink}
                  target="blank"
                >
                  <img
                    className="absolute w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover group-hover:opacity-50"
                    src={instaPost.thumbnail_url}
                    alt=""
                  />
                  <div className="relative top-[45%] w-16 left-[45%] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <BsInstagram size={30} color="white" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramPosts;
