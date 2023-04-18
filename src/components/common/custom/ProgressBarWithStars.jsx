import { AiFillStar } from "react-icons/ai";
import ProgressBar from "./ProgressBar";

const ProgressBarWithStars = ({ iconSize, percent, noOfStar }) => {
  const coloredIcons = new Array(noOfStar).fill(null);
  const uncoloredIcons = new Array(5 - noOfStar).fill(null);

  return (
    <div className="flex gap-5 items-center">
      <div className="flex">
        {coloredIcons.map((item, i) => {
          return <AiFillStar key={i} size={iconSize} color="#ffd700" />;
        })}
        {uncoloredIcons.map((item, i) => {
          return (
            <AiFillStar key={i} size={iconSize} className="text-slate-200" />
          );
        })}
      </div>
      {percent && (
        <div className="w-full">
          <ProgressBar percent={percent} />
        </div>
      )}
    </div>
  );
};

export default ProgressBarWithStars;
