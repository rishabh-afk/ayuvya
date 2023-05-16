import Modal from "react-modal";
import Button from "../common/Button";
import OTPInput from "react-otp-input";
import "react-toastify/dist/ReactToastify.css";
import { VscChromeClose } from "react-icons/vsc";
import { login } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { verifyOTP } from "../../store/slices/commonSlice";
import { addToCartAuth, fetchCartAuth } from "../../store/slices/cartSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "350px",
    borderRadius: "12px",
    marginRight: "-50%",
    zIndex: 10000,
    backgroundColor: "white",
    border: "#f5f0f7",
    transform: "translate(-50%, -50%)",
  },
  overlay: { background: "rgba(0, 0, 0, 0.8)", zIndex: 10 },
};
Modal.setAppElement("#root");

const VerifyOtp = ({ otpModal, handleClose, sendOtp, phone, setOtp, otp }) => {
  const dispatch = useDispatch();

  // resend otp
  const resendOTP = () => {
    const data = {
      phone: phone,
    };
    sendOtp(data);
    setOtp(null);
  };
  //handleVerifyOtp
  const handleverifyOtp = async (e) => {
    e.preventDefault();
    const data = {
      phone: phone,
      otp: otp,
    };
    dispatch(verifyOTP(data)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(login());
        const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
        let data = [];
        cart.items.map((item) => {
          data.push({ product: item.id, quantity: item.quantity });
          return data;
        });
        if (data.length === cart.items.length) {
          dispatch(addToCartAuth(data)).then((response) => {
            if (response.meta.requestStatus === "fulfilled") {
              dispatch(fetchCartAuth());
              handleClose();
            }
          });
        }
      } else {
        toast.warn("Try again later");
      }
    });
  };

  return (
    <div>
      <Modal
        isOpen={otpModal && phone.length === 10}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Verify OTP"
      >
        <div className="">
          <div className="flex justify-end">
            <VscChromeClose
              onClick={handleClose}
              size={25}
              className="text-gray-500 cursor-none lg:cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center text-gray-400">
            <h2 className="text-3xl font-medium text-gray-500">Enter OTP</h2>
            <p className="pt-5">
              OTP has been sent to your mobile number +91 {phone}.
            </p>
            <p className="py-5">
              Not your number?{" "}
              <span
                className="hover:underline hover:underline-offset-2 cursor-pointer"
                onClick={handleClose}
              >
                Click here.
              </span>
            </p>
            <form onSubmit={handleverifyOtp}>
              <OTPInput
                value={otp}
                containerStyle="mt-4 mb-8 flex justify-between text-xl"
                onChange={(otp) => setOtp(otp)}
                numInputs={4}
                shouldAutoFocus={true}
                inputStyle="md:min-w-[3.1em] md:min-h-[3.1em] lg:min-w-[3rem] lg:min-h-[3rem] min-w-[4rem] min-h-[4rem] rounded-lg bg-white border border-gray-400 mx-2 text-xl text-primary outline-none border border-primary"
                renderInput={(props) => <input {...props} />}
              />
              <Button
                type="submit"
                className="w-full bg-gray-400 text-white hover:bg-gray-400/80"
              >
                <span className="w-full text-xl">Submit</span>
              </Button>
            </form>
            <div className="py-2">
              <p className="">Not received your code?</p>
              <p
                onClick={resendOTP}
                className="hover:underline hover:underline-offset-2 cursor-pointer"
              >
                Resend OTP
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VerifyOtp;
