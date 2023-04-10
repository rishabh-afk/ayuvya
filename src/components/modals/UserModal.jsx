import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { CgAdd } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";
import placeholder from "../../assets/images/userPlaceholder.jpg";
import Modal from "react-modal";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "12px",
    marginRight: "-50%",
    zIndex: 1000,
    backgroundColor: "#f5f0f7",
    border: "#f5f0f7",
    transform: "translate(-50%, -50%)",
  },
  overlay: { background: "rgba(0, 0, 0, 0.6)" },
};
Modal.setAppElement("#root");

const UserModal = (props) => {
  // const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [user, setUser] = useState({
    name: props.user.firstName,
    gender: props.user.gender,
    dateOfBirth: props.user.dateOfBirth,
    profilePic: "",
  });
  const onChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  console.log(typeof file);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const resp = await axios.post("http://localhost:5000/account", address);
    // if (resp.data.message === "success") {
    //   navigate("/account");
    // }
    console.log(user);
  };
  return (
    <div>
      <Modal
        isOpen={props.userModalIsOpen}
        onRequestClose={props.handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-2 max-w-4xl">
          <h2 className="text-[#5e0d8b] py-4 text-3xl font-bold border-b-2 border-[#909090]">
            Edit your details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-5 lg:pt-5 justify-start">
              <div className="flex relative flex-col">
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .webp"
                  className="absolute opacity-0 z-20 h-48 w-40 top-4 cursor-none lg:cursor-pointer"
                  onChange={onChange}
                  name="image"
                />
                <div className="flex gap-2 required left-0 items-center justify-start my-4">
                  <CgAdd
                    size={25}
                    color="#5e0d8b"
                    className="cursor-none lg:cursor-pointer"
                  />
                  <p className="text-[#5e0d8b] font-bold text-lg">
                    Upload Your Profile Picture
                  </p>
                </div>
                {
                  <div className="w-40 relative rounded-lg mb-4">
                    <img
                      className="rounded h-32 w-40 object-cover"
                      src={file?.name ? URL.createObjectURL(file) : placeholder}
                      alt={user?.name}
                    />
                    {file?.name && (
                      <RxCrossCircled
                        size={25}
                        onClick={() => {
                          setFile({});
                        }}
                        className="absolute cursor-none lg:cursor-pointer rounded-full -top-[8px] -right-[12px] z-30"
                      />
                    )}
                  </div>
                }
              </div>
              <div className="flex flex-col gap-1">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={user.name}
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
                />
                <div className="flex flex-col gap-1">
                  <label>Gender:</label>
                  <select
                    value={user.gender}
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                    className="rounded-sm p-2 w-80 mb-3 outline-none bg-white border border-[#cbcbcb]"
                  >
                    <option disabled selected>
                      Select Option
                    </option>
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    placeholder="Date Of Birth"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={user.dateOfBirth}
                    onChange={(e) =>
                      setUser({ ...user, dateOfBirth: e.target.value })
                    }
                    className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <button
                type="button"
                onClick={props.handleClose}
                className="flex gap-1 items-center bg-[#5e0d8b] cursor-none lg:cursor-pointer text-white border-2 border-[#5e0d8b] px-3 py-[5px] rounded"
              >
                <VscChromeClose size={20} />
                <span className="font-semibold">Cancel</span>
              </button>
              <button
                type="submit"
                className="flex gap-1 items-center cursor-none lg:cursor-pointer border border-[#e3abf9] px-3 py-[7px] rounded"
              >
                <span className="font-semibold">Update</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
