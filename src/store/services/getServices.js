import axios from "axios";
import { toast } from "react-toastify";
import config from "../../config/config";

const BASE_URL = config.REACT_APP_BASE_URL;

const PRODUCT_URL = "api/products/test/";
const getAllProducts = async () => {
  const resp = await axios.get(`${BASE_URL}${PRODUCT_URL}`);
  return resp.data;
};

const BLOG_URL = "api/blogs/test/";
const getAllBlogs = async () => {
  const resp = await axios.get(`${BASE_URL}${BLOG_URL}`);
  return resp.data;
};

const CATEGORY_URL = "api/products/test/categories/";
const getAllCategories = async () => {
  const resp = await axios.get(`${BASE_URL}${CATEGORY_URL}`);
  return resp.data;
};

const RELATED_PRODUCT_URL = "api/products/related/";
const getAllRelatedProducts = async (data) => {
  const resp = await axios.post(`${BASE_URL}${RELATED_PRODUCT_URL}`, data);
  return resp.data;
};

const INSTA_POSTS_URL = "api/insta/feed/";
const getInstaPosts = async (data) => {
  const resp = await axios.get(`${BASE_URL}${INSTA_POSTS_URL}`);
  return resp.data;
};

const SEND_OTP_URL = "api/auth/otp/send/";
const sendOTP = async (data) => {
  const resp = await axios.post(`${BASE_URL}${SEND_OTP_URL}`, data);
  if (resp.status === 200) {
    toast.success("OTP is sent successfully");
    return resp.data;
  } else return toast.warn("Failed to send OTP. Try again later");
};

const services = {
  sendOTP,
  getAllBlogs,
  getInstaPosts,
  getAllProducts,
  getAllCategories,
  getAllRelatedProducts,
};

export default services;
