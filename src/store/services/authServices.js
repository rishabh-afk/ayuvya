import axios from "axios";
import { toast } from "react-toastify";
import config from "../../config/config";

const BASE_URL = config.REACT_APP_BASE_URL;

const LOGIN_USER_URL = "api/";
const loginUser = async (data) => {
  const resp = await axios.post(`${BASE_URL}${LOGIN_USER_URL}`, data);
  if (resp.data.result) {
    localStorage.setItem(
      "AYUVYA-AYURVEDA-252D-4E76-9B06",
      resp.data.result.accessToken
    );
  }
  if (resp.data.message === "Success") {
    toast.success("Logged In Successfully");
  } else {
    toast.error(resp.data.message);
  }
  return resp.data;
};

const GET_USER_URL = "api/";
const getUser = async (token) => {
  const resp = await axios.post(`${BASE_URL}${GET_USER_URL}`, {
    headers: {
      Authorization: token,
    },
  });
  return resp.data;
};

const VERIFY_OTP_URL = "api/auth/otp/verify/";
const verifyOTP = async (data) => {
  const resp = await axios.post(`${BASE_URL}${VERIFY_OTP_URL}`, data);
  return resp.data;
};

const authServices = { getUser, loginUser, verifyOTP };

export default authServices;
