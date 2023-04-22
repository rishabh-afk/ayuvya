import { useState } from "react";
import AddressModal from "../modals/AddressModal";
import { TiPen } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../common/Button";

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
        <h2 className="text-2xl pb-3 mt-8 text-blue-900 font-extrabold border-b border-b-gray-500">
          Saved Address
        </h2>
        <h2 className="py-3 md:py-8 text-gray-600 text-xl font-medium">
          {user.firstName} {user.lastName}
        </h2>
        <div className="bg-white rounded p-4 shadow-sm">
          <p className="py-4">{user.address}</p>
          <div className="flex gap-4 mt-5">
            <Button handler={openModal} className="border-blue-200 border-2">
              <TiPen size={20} />
              <span className="font-semibold">Edit</span>
            </Button>
            <Button className="bg-blue-900 border-blue-900 text-white border-2">
              <RiDeleteBin6Line size={20} />
              <span className="font-semibold">Remove</span>
            </Button>
          </div>
        </div>
        <div className="mb-8 mt-12">
          <Button
            handler={openModal}
            className="bg-blue-900 border-blue-900 text-white border-2"
          >
            <span className="font-semibold">+ Add New Address</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
