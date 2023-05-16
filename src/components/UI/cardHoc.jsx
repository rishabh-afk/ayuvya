import { motion } from "framer-motion";
const CardHoc = (props) => {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg border-none shadow-3xl shadow-gray-400 ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
};

export default CardHoc;
