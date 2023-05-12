import Footer from "../common/Footer";
import Navbar from "../common/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layouts = (props) => {
  return (
    <section>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        theme="dark"
      />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </section>
  );
};

export default Layouts;
