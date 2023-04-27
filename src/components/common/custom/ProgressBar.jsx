const ProgressBar = ({ percent, reviewCount }) => {
  return (
    <div className="flex gap-5 items-center w-full">
      <div className="bg-slate-200 w-3/5 md:w-3/4 h-4 rounded-[4px]">
        <div
          className="bg-yellow-300 w-3/5 md:w-3/4 h-4 rounded-[4px]"
          style={{ width: percent + "%" }}
        ></div>
      </div>
      <span className="flex gap-2">
        <span>{percent}%</span>
        <span>({reviewCount})</span>
      </span>
    </div>
  );
};

export default ProgressBar;
