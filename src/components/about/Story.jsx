import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoryTop from "./StoryTop";
import StoryBottom from "./StoryBottom";

gsap.registerPlugin(ScrollTrigger);

const Story = ({ story }) => {
    const { title, coverImage, topCenterImage, topLeftImage, topRightImage, centerLeftImage, centerRightImage, summary, mainImage } = story;

    const ref = useRef(null);

    useEffect(() => {
        const story = ref.current;
        const cover = story.querySelector('.cover');
        const summary = story.querySelector('.summary');
        // story.style.height = (cover.offsetHeight + summary.offsetHeight) + "px"
        // console.log(story.offsetHeight, cover.offsetHeight, summary.offsetHeight)
        gsap.to(cover, {
            stagger: 0.5,
            scrollTrigger: {
                trigger: summary,
                pin: true,
                markers: true,
                // end: "+10px",
            }
        })
    }, [])

    return (
        <div className="py-8 bg-green-500 relative" ref={ref}>
            <div className="w-full bg-red-500 cover absolute top-0 left-0 z-40 cover">
                <StoryTop title={title} coverImage={coverImage} />
            </div>
            <div className="w-full overflow-hidden summary absolute top-0 left-0 z-20 summary">
                <StoryBottom topLeftImage={topLeftImage} topCenterImage={topCenterImage} topRightImage={topRightImage} centerLeftImage={centerLeftImage} centerRightImage={centerRightImage} summary={summary} mainImage={mainImage} />
            </div>
        </div>
    )
}

export default Story