import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://192.168.0.105:80/";
// const BASE_URL = process.env.REACT_APP_BASE_URL;

const PRODUCT_URL = "api/products/";
const getAllProducts = async () => {
  const resp = await axios.get(`${BASE_URL}${PRODUCT_URL}`);
  return resp.data;
};

const BLOG_URL = "api/blogs/test/";
const getAllBlogs = async () => {
  const resp = await axios.get(`${BASE_URL}${BLOG_URL}`);
  return resp.data;
};

const CATEGORY_URL = "api/products/categories/";
const getAllCategories = async () => {
  const resp = await axios.get(`${BASE_URL}${CATEGORY_URL}`);
  return resp.data;
};

const CONCERN_URL = "api/products/concern/";
const getAllConcerns = async () => {
  const resp = await axios.get(`${BASE_URL}${CONCERN_URL}`);
  return resp.data;
};

const RELATED_PRODUCT_URL = "api/products/related/";
const getAllRelatedProducts = async (data) => {
  const resp = await axios.post(`${BASE_URL}${RELATED_PRODUCT_URL}`, data);
  return resp.data;
};

const VERIFY_OTP_URL = "api/auth/otp/verify/";
const verifyOTP = async (data) => {
  const resp = await axios.post(`${BASE_URL}${VERIFY_OTP_URL}`, data);
  if (resp.status === 200) {
    toast.success("Phone Number verified successfully!");
  }
  return resp.data;
};

const services = {
  verifyOTP,
  getAllBlogs,
  getAllConcerns,
  getAllProducts,
  getAllCategories,
  getAllRelatedProducts,
};

export default services;
