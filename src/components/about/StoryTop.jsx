import SparkleText from "../common/SparkleText";
import rays from "../../assets/images/about/rays.png";

const StoryTop = ({ title, coverImage }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-16 gap-8">
            <div className="max-w-sm mx-auto text-center">
                <div className="flex flex-col items-center">
                    <img src={rays} alt="" className="w-3/5 max-w-[200px]" />
                    <SparkleText text={title} />
                    <img src={rays} alt="" className="rotate-180 w-3/5 mt-2 max-w-[200px]" />
                </div>
            </div>
            <div className="max-w-md mx-auto">
                <img src={coverImage} alt="" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default StoryTop