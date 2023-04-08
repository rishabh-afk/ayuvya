const Tabs = ({ tab }) => {
  return (
    <div
      className={`border grid place-items-center md:flex md:items-center md:mb-3 md:gap-5 md:px-8 cursor-none lg:cursor-pointer py-6 md:py-4 rounded-sm md:rounded-md border-[#ccc] ${
        tab.isActive && "bg-[#5e248c] text-white"
      }`}
    >
      {tab.icon}
      <p className="mt-2 md:mt-0 text-lg">{tab.title}</p>
    </div>
  );
};

export default Tabs;
