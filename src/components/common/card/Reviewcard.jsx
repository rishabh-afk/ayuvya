// import CardHoc from "../../UI/CardHoc";
import ProgressBarWithStars from "../custom/ProgressBarWithStars";

const Reviewcard = ({ itemObj }) => {
  return (
    <div className="mb-10 mt-5 shadow-lg p-4">
      <div className="flex gap-3 items-center">
        <div className="w-16 rounded-full aspect-square bg-gray-500 text-white flex justify-center items-center text-4xl">
          {itemObj.review_owner[0]}
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold py-2">
              {itemObj.review_owner}
            </h2>
            <p className="bg-gray-700 text-white rounded-full py-1 w-fit px-3 text-center font-bold text-sm">
              VERIFIED
            </p>
          </div>
          <div className="flex justify-between">
            <ProgressBarWithStars iconSize={20} noOfStar={5} />
            <p className="text-sm text-gray-500">10th Aug, 2023</p>
          </div>
        </div>
      </div>
      <div className="h-48 lg:h-40">
        <h2 className="text-2xl font-semibold py-2">{itemObj.review_owner}</h2>
        <p className="text-sm">{itemObj.review_description}</p>
      </div>
    </div>
  );
};

export default Reviewcard;
