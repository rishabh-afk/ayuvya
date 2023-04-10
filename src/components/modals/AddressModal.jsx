import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { GrFormAdd } from "react-icons/gr";
import Modal from "react-modal";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
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
        contentLabel="Address Modal"
      >
        <div className="p-2 max-w-4xl">
          <h2 className="text-blue-900 py-4 mb-8 text-3xl font-bold border-b-2 border-gray-500">
            Add New Address
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-px md:gap-3">
              <FormInput
                type="text"
                placeholder="Address Line 1"
                name="addressLine1"
                id="addressLine1"
                onChange={(e) =>
                  setAddress({ ...address, addressLine1: e.target.value })
                }
              />
              <FormInput
                type="text"
                placeholder="Address Line 2"
                name="addressLine2"
                id="addressLine2"
                onChange={(e) =>
                  setAddress({ ...address, addressLine2: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:flex-row gap-px md:gap-3">
              <FormInput
                type="number"
                placeholder="zipcode"
                name="zipcode"
                id="zipcode"
                onChange={(e) =>
                  setAddress({ ...address, zipcode: e.target.value })
                }
              />
              <FormInput
                type="text"
                placeholder="country"
                name="country"
                id="country"
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:flex-row gap-px md:gap-3">
              <FormInput
                type="text"
                placeholder="City"
                name="city"
                id="city"
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
              <FormInput
                type="text"
                placeholder="area"
                name="area"
                id="area"
                onChange={(e) =>
                  setAddress({ ...address, area: e.target.value })
                }
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
              />
              <p className="font-medium text-sm">Set as default address</p>
            </div>
            <div className="flex gap-4 mt-5">
              <Button
                handler={props.handleClose}
                className="bg-blue-900 border-blue-900 text-white border-2"
              >
                <VscChromeClose size={20} />
                <span className="font-semibold">Cancel</span>
              </Button>
              <Button className="border-blue-200 border-2" type="submit">
                <GrFormAdd size={20} />
                <span className="font-semibold">Add Address</span>
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddressModal;
