import classes from "./StoryBottom.module.css";

const StoryBottom = ({ topLeftImage, topCenterImage, topRightImage, centerLeftImage, centerRightImage}) => {
    return (
        <div className="h-full text-centers relative overflow-x-hidden">
            <div className="absolute w-96 -top-32 -left-24 rotate-[115deg]">
                <div className={`${classes.move} origin-bottom`}>
                    <img src={topLeftImage} alt="" />
                </div>
            </div>
            <div className="absolute w-96 -top-32 left-1/2 -translate-x-1/2 rotate-[115deg]">
                <div className={`${classes.move} origin-center`}>
                    <img src={topCenterImage} alt="" />
                </div>
            </div>
            <div className="absolute w-96 -top-32 -right-28 rotate-[180deg]">
                <div className={`${classes.move} origin-bottom`}>
                    <img src={topRightImage} alt="" />
                </div>
            </div>
            <div className="absolute w-96 top-1/2 -left-28 rotate-12">
                <div className={`${classes.move} origin-bottom-left`}>
                    <img src={centerLeftImage} alt="" />
                </div>
            </div>
            <div className="absolute w-96 top-1/2 -right-28 -rotate-[102deg]">
                <div className={`${classes.move} origin-bottom`}>
                    <img src={centerLeftImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default StoryBottom