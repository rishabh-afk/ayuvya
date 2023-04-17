import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const PRODUCT_URL = "api/products/";

const getAllProducts = async () => {
  const resp = await axios.get(`${BASE_URL}${PRODUCT_URL}`);
  return resp.data;
};

const services = {
  getAllProducts,
};

export default services;
