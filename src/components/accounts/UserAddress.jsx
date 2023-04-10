import { useState } from "react";
import AddressModal from "../modals/AddressModal";
import { TiPen } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

const UserAddress = ({ user }) => {
  const [addressModalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <AddressModal
        addressModalIsOpen={addressModalIsOpen}
        handleClose={handleClose}
      />
      <div>
        <h2 className="text-2xl pb-3 mt-8 text-[#5e0d8b] font-extrabold border-b-[1px] border-b-[#909090]">
          Saved Address
        </h2>
        <h2 className="py-3 md:py-8 text-[#515151] text-xl font-medium">
          {user.firstName} {user.lastName}
        </h2>
        <div className="bg-white rounded p-4 shadow-sm">
          <p className="py-4">{user.address}</p>
          <div className="flex gap-4 mt-5">
            <button
              onClick={openModal}
              className="flex gap-1 cursor-none lg:cursor-pointer items-center border-2 border-[#e3abf9] px-3 py-[7px] rounded"
            >
              <TiPen size={20} />
              <span className="font-semibold">Edit</span>
            </button>
            <button className="flex gap-1 cursor-none lg:cursor-pointer items-center bg-[#5e0d8b] text-white border-2 border-[#5e0d8b] px-3 py-[5px] rounded">
              <RiDeleteBin6Line size={20} />
              <span className="font-semibold">Remove</span>
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={openModal}
            className="bg-[#5e0d8b] cursor-none lg:cursor-pointer text-white border-2 border-[#5e0d8b] py-3 px-5 mb-8 mt-12 rounded"
          >
            <span className="font-semibold">+ Add New Address</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
