import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import Button from "../common/Button";
import { CgAdd } from "react-icons/cg";
import config from "../../config/config";
import { useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import FormInput from "../common/forms/FormInput";
import placeholder from "../../assets/images/userPlaceholder.jpg";

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
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [user, setUser] = useState({
    name: props.user.firstName,
    gender: props.user.gender,
    dateOfBirth: props.user.dateOfBirth,
    profilePic: "",
  });
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = config.REACT_APP_BASE_URL;
    const resp = await axios.post(`${BASE_URL}account`, user);
    if (resp.data.message === "success") {
      navigate("/account");
    }
  };
  return (
    <div>
      <Modal
        isOpen={props.userModalIsOpen}
        onRequestClose={props.handleClose}
        style={customStyles}
        contentLabel="User Details Modal"
      >
        <div className="p-2 max-w-4xl">
          <h2 className="text-blue-900 py-4 text-3xl font-bold border-b-2 border-gray-500">
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
                    className="cursor-none lg:cursor-pointer text-blue-900"
                  />
                  <p className="text-blue-900 font-bold text-lg">
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
                <FormInput
                  label={"Name"}
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="rounded-sm w-80"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <div className="flex flex-col gap-1">
                  <label>Gender:</label>
                  <select
                    value={user.gender}
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                    className="rounded-sm p-2 w-80 mb-3 outline-none bg-white border border-gray-300"
                  >
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <FormInput
                    label={"Date of Birth"}
                    type="date"
                    placeholder="Date Of Birth"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="w-80"
                    value={user.dateOfBirth}
                    onChange={(e) =>
                      setUser({ ...user, dateOfBirth: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <Button
                handler={props.handleClose}
                className="bg-blue-900 border-blue-900 text-white border"
              >
                <VscChromeClose size={20} />
                <span className="font-semibold">Cancel</span>
              </Button>
              <Button className="border-blue-200 border-2" type="submit">
                <span className="font-semibold">Update</span>
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
