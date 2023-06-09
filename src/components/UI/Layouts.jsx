import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layouts = (props) => {
  return (
    <section>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </section>
  );
};

export default Layouts;
