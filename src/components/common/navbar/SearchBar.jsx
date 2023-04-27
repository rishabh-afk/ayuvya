import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

const SearchBar = ({ openSearchBar }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex justify-between pr-2 items-center z-[5000] w-full lg:w-3/4 border-2 rounded-md cursor-none lg:cursor-pointer">
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
        <VscChromeClose onClick={() => openSearchBar(false)} size={20} />{" "}
      </div>
    </>
  );
};

export default SearchBar;
