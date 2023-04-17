import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const PRODUCT_URL = "api/products/";

const getAllProducts = async () => {
  const resp = await axios.get(`${BASE_URL}${PRODUCT_URL}`);
  return resp.data;
};

const BLOGS_URL = "api/blogs/test/";
const getAllBlogs = async () => {
  const resp = await axios.get(`${BASE_URL}${BLOGS_URL}`);
  return resp.data;
};

const services = {
  getAllProducts,
  getAllBlogs,
};

export default services;
