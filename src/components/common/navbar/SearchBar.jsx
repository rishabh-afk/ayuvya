import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";

const SearchBar = ({ openSearchBar }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-between pr-2 items-center z-[5000] w-full lg:w-3/4 border-2 rounded-md cursor-none lg:cursor-pointer"
      >
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Search Here"
          autoFocus
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-full text-black outline-none py-[2px] lg:py-1 pl-2"
        />
        <motion.div whileHover={{ scale: 1.2 }}>
          <VscChromeClose onClick={() => openSearchBar(false)} size={20} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SearchBar;
