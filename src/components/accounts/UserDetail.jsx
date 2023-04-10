import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import UserModal from "../modals/UserModal";

const UserDetail = ({ user }) => {
  const [userModalIsOpen, setIsOpen] = useState(false);

  function openUserModal() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div>
      <UserModal
        userModalIsOpen={userModalIsOpen}
        handleClose={handleClose}
        user={user}
      />
      <div className="flex items-center gap-3">
        <h2 className="text-2xl py-3 text-[#5e0d8b] font-extrabold">
          My Details
        </h2>
        <CiEdit
          onClick={openUserModal}
          className="cursor-none lg:cursor-pointer"
          size={25}
          color="#5e0d8b"
        />
      </div>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3 border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Name</p>
            <p className="text-[#6e6e6e]">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3  border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Gender</p>
            <p className="text-[#6e6e6e]">{user.gender}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3 border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Date Of Birth</p>
            <p className="text-[#6e6e6e]">{user.dateOfBirth}</p>
          </div>
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3  border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Email Id</p>
            <p className="text-[#6e6e6e]">{user.emailId}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3">
            <p className="font-medium">Mobile</p>
            <p className="text-[#6e6e6e]">{user.mobileNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
