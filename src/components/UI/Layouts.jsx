import Footer from "../common/Footer";
import Navbar from "../common/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

const Layouts = (props) => {
  return (
    <section>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </section>
  );
};

export default Layouts;
