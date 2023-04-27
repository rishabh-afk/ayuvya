import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
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

const services = {
  getAllProducts,
  getAllBlogs,
  getAllCategories,
  getAllConcerns,
};

export default services;
