import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import Tabs from "../components/accounts/Tabs";
import "swiper/css";
import "swiper/css/pagination";

import { BiUser } from "react-icons/bi"
import { BsBoxSeam } from "react-icons/bs"
import {BiLogOutCircle} from "react-icons/bi"



const Account = () => {

    const PROFILE_TABS = [
        {
            id: 1,
            title: "Profile",
            icon: <BiUser size={22}/>
        },
        {
            id: 2,
            title: "Orders",
            icon: <BsBoxSeam size={22}/>
        },
        {
            id: 3,
            title: "Logout",
            icon: <BiLogOutCircle size={22}/>
        },
    ];

    return (
        <div className="h-96 mt-8">
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                slidesPerGroup={2}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                // className="mySwiper"
            >
                {
                    PROFILE_TABS.map((tab) => <SwiperSlide key={tab.id}><Tabs tab={tab}/></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default Account