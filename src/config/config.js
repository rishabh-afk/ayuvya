const config = {
  REACT_APP_BASE_URL:
    "http://35.202.144.166/ayuvya/" || process.env.REACT_APP_BASE_URL,
  CASHFREE_RETURN_URL:
    "http://localhost:3000/thank-you" ||
    "http://ayuvya-react-app.s3-website-ap-southeast-2.amazonaws.com/thank-you" ||
    process.env.CASHFREE_RETURN_URL,
  CASHFREE_MODE: "sandbox" || process.env.CASHFREE_MODE, // production
};
export default config;
