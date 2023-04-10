import Modal from "react-modal";
import { VscChromeClose } from "react-icons/vsc";
import { BiLogOutCircle } from "react-icons/bi";
import Button from "../common/Button";

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
        contentLabel="Logout Modal"
      >
        <div className="p-2 max-w-lg">
          <p className="text-xl md:text-3xl mb-8 font-semibold text-blue-900">
            Do you really want to Logout?
          </p>
          <div className="flex gap-4 mt-5 justify-center">
            <Button
              handler={props.handleClose}
              className="bg-blue-900 border-blue-900 text-white border"
            >
              <VscChromeClose size={20} />
              <span className="font-semibold">Cancel</span>
            </Button>
            <Button className="border-blue-200 border-2" type="submit">
              <BiLogOutCircle size={20} />
              <span className="font-semibold">Logout</span>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutModal;
