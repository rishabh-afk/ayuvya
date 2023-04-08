import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2 className="text-2xl py-3 text-[#5e0d8b] font-extrabold">
        My Details
      </h2>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3 border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Name</p>
            <p className="text-[#6e6e6e]">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="flex flex-row md:flex-col justify-between w-full md:w-1/2 py-3  border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Email Id</p>
            <p className="text-[#6e6e6e]">{user.emailId}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col justify-between py-3 w-full md:w-1/2  border-b-[1px] border-b-[#ccc] md:border-none">
            <p className="font-medium">Location</p>
            <p className="text-[#6e6e6e]">{user.location}</p>
          </div>
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
