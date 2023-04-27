import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// import { Pagination } from "swiper";
import Tabs from "../components/accounts/Tabs";
import Layouts from "../components/UI/Layouts";
import "swiper/css";
import "swiper/css/pagination";

import { BiUser } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import UserDetail from "../components/accounts/UserDetail";
import UserAddress from "../components/accounts/UserAddress";
import { userData } from "../data/userDetails";
import LogoutModal from "../components/modals/LogoutModal";

const Account = () => {
  const PROFILE_TABS = [
    {
      id: 1,
      title: "Profile",
      isActive: true,
      icon: <BiUser size={25} />,
    },
    {
      id: 2,
      title: "Orders",
      isActive: false,
      icon: <BsBoxSeam size={25} />,
    },
    {
      id: 3,
      title: "Logout",
      isActive: false,
      icon: <BiLogOutCircle size={25} />,
    },
  ];

  const [logoutModalIsOpen, setIsOpen] = useState(false);

  function logoutModal() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Layouts>
      <div className="max-w-6xl mx-auto">
        <LogoutModal
          logoutModalIsOpen={logoutModalIsOpen}
          handleClose={handleClose}
        />
        <div className="flex justify-between mx-4 items-center mt-8 md:mb-8">
          <h2 className="text-xl text-[#5e0d8b] font-bold">
            Hi, {userData.firstName} {userData.lastName}
          </h2>
          <button
            onClick={logoutModal}
            className="px-6 py-[7px] text-lg bg-[#5e0d8b] rounded text-white"
          >
            Log Out
          </button>
        </div>
        <div className="h-48 mt-8 mx-4 block md:hidden relative z-0">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            slidesPerGroup={2}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
            // className="mySwiper"
          >
            {PROFILE_TABS.map((tab) => (
              <SwiperSlide key={tab.id}>
                <Tabs tab={tab} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-6">
          <div className="w-1/4 hidden md:block">
            {PROFILE_TABS.map((tab) => (
              <Tabs key={tab.id} tab={tab} />
            ))}
          </div>
          <div className="rounded-lg shadow-2xl mx-4 p-3 md:px-10 w-full md:w-3/4 bg-[#f5f0f7] border-[#f5f0f7]">
            <UserDetail user={userData} />
            <UserAddress user={userData} />
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Account;
