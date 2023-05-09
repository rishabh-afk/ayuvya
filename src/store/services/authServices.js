import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const LOGIN_USER_URL = "api/";
const loginUser = async (data) => {
  const resp = await axios.post(`${BASE_URL}${LOGIN_USER_URL}`, data);
  if (resp.data.result) {
    localStorage.setItem(
      "AYUVYA-AYURVEDA-252d-4e76-9b06",
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

const authServices = { getUser, loginUser };

export default authServices;
