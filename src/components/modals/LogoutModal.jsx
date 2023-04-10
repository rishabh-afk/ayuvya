import Modal from "react-modal";
import { VscChromeClose } from "react-icons/vsc";
import { BiLogOutCircle } from "react-icons/bi";

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

const LogoutModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.logoutModalIsOpen}
        onRequestClose={props.handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-2 max-w-lg">
          <p className="text-xl md:text-3xl mb-8 font-semibold text-[#5e0d8b]">
            Do you really want to Logout?
          </p>
          <div className="flex gap-4 mt-5 justify-center">
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
              <BiLogOutCircle size={20} />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutModal;
