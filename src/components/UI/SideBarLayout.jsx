import Sidebar from "../product/Sidebar";

const SideBarLayout = (props) => {
  return (
    <section className="max-w-screen-2xl mx-auto my-10">
      <div className="flex flex-col lg:flex-row px-1 lg:px-8">
        <div className="w-full lg:w-[16%]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[84%]">
          <main>{props.children}</main>
        </div>
      </div>
    </section>
  );
};

export default SideBarLayout;
