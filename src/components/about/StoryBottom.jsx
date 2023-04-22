import classes from "./StoryBottom.module.css";

const StoryBottom = ({ topLeftImage, topCenterImage, topRightImage, centerLeftImage, centerRightImage, summary, mainImage }) => {
    return (
        <div className="min-h-screen">
        <div className="text-centers relative overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 bg-red-200/10 -z-10">
                <img src={topLeftImage} alt="" className={`absolute max-w-md h-auto w-40 -top-4 -left-14 md:w-60 md:-left-20 lg:w-72 lg:-top-8 lg:-left-24 xl:w-96 xl:-left-32 origin-bottom ${classes.move}`}/>
                <img src={topCenterImage} alt="" className={`absolute max-w-md h-auto w-44 md:w-64 lg:w-72 xl:w-96 -top-8 left-1/2 -translate-y-1/2 -translate-x-1/2 origin-top-left ${classes.move}`} />
                <img src={topRightImage} alt="" className={`absolute max-w-md h-auto w-40 -top-4 -right-14 md:w-60 md:-right-20 lg:w-72 lg:-right-24 xl:w-96 xl:-top-16 xl:-right-40 ${classes.move}`}/>
                <img src={centerLeftImage} alt="" className={`absolute max-w-md h-auto w-44 -left-14 md:w-64 md:-left-20 lg:w-72 lg:-left-24 xl:w-96 xl:-left-32 top-1/2 -translate-y-1/2 -scale-x-100 ${classes.move}`}/>
                <img src={centerRightImage} alt="" className={`absolute max-w-md h-auto w-44 -right-14 md:w-64 md:-right-20 lg:w-72 lg:-right-24 xl:w-96 xl:-right-36 top-1/2 -translate-y-1/2 ${classes.move}`}/>
            </div>
            <div className="px-12 pt-16 md:px-20 md:pt-40 text-center max-w-4xl mx-auto">
                {
                    summary.map((text) => <div key={text.id} className="mb-12 md:mb-20 font-sans"><p className="text-2xl pb-12 md:text-3xl lg:text-4xl font-medium leading-10">{text.text}</p></div>)
                }
                <div>
                    <img src={mainImage} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default StoryBottom