import Sidebar from "../common/Sidebar";

const SideBarLayout = (props) => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5">
          <Sidebar />
        </div>
        <div className="w-full lg:w-4/5">
          <main>{props.children}</main>
        </div>
      </div>
    </section>
  );
};

export default SideBarLayout;
