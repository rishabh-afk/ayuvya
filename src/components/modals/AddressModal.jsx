import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { GrFormAdd } from "react-icons/gr";
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

const AddressModal = (props) => {
  // const navigate = useNavigate();
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    area: "",
    zipcode: "",
    default: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const resp = await axios.post("http://localhost:5000/account", address);
    // if (resp.data.message === "success") {
    //   navigate("/account");
    // }
    console.log(address);
  };
  return (
    <div>
      <Modal
        isOpen={props.addressModalIsOpen}
        onRequestClose={props.handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-2 max-w-4xl">
          <h2 className="text-[#5e0d8b] py-4 mb-8 text-3xl font-bold border-b-2 border-[#909090]">
            Add New Address
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-[1px] md:gap-3">
              <input
                type="text"
                placeholder="Address Line 1"
                name="addressLine1"
                id="addressLine1"
                required
                onChange={(e) =>
                  setAddress({ ...address, addressLine1: e.target.value })
                }
                className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                name="addressLine2"
                id="addressLine2"
                onChange={(e) =>
                  setAddress({ ...address, addressLine2: e.target.value })
                }
                className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-[1px] md:gap-3">
              <input
                type="number"
                placeholder="zipcode"
                name="zipcode"
                id="zipcode"
                required
                onChange={(e) =>
                  setAddress({ ...address, zipcode: e.target.value })
                }
                className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
              />
              <input
                type="text"
                placeholder="country"
                name="country"
                id="country"
                required
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
                className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-[1px] md:gap-3">
              <input
                type="text"
                placeholder="City"
                name="city"
                id="city"
                required
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
              />
              <input
                type="text"
                placeholder="area"
                name="area"
                id="area"
                onChange={(e) =>
                  setAddress({ ...address, area: e.target.value })
                }
                className="border border-[#cbcbcb] rounded-sm p-2 w-80 mb-3 outline-none"
              />
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                placeholder="default"
                name="default"
                id="default"
                onChange={(e) =>
                  setAddress({ ...address, default: e.target.checked })
                }
                className="border w-auto border-[#cbcbcb] rounded-sm outline-none"
              />
              <p className="font-medium text-sm">Set as default address</p>
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
                className="flex gap-1 items-center border cursor-none lg:cursor-pointer border-[#e3abf9] px-3 py-[7px] rounded"
              >
                <GrFormAdd size={20} />
                <span className="font-semibold">Add Address</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddressModal;
