import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoryTop from "./StoryTop";
import StoryBottom from "./StoryBottom";

gsap.registerPlugin(ScrollTrigger);

const Story = ({ story }) => {

    const ref = useRef(null);

    useEffect(() => {
        const story = ref.current;
        const cover = story.querySelector(`.cover`);
        const summary = story.querySelector(`.summary`);
        story.style.height = (cover.offsetHeight + summary.offsetHeight) + "px"
        // console.log(story.offsetHeight, cover.offsetHeight, summary.offsetHeight)
        gsap.to(cover, {
            stagger: 0.5,
            scrollTrigger: {
                trigger: summary,
                pin: true,
                // end: "+10px",
            }
        })
    }, [])

    return (
        <div className="relative min-h-screen" ref={ref}>
            <div className="w-full min-h-screen bg-red-500 absolute top-0 left-0 z-20 cover">
                <StoryTop title={story.title} coverImage={story.coverImage} />
            </div>
            <div className="w-full h-full bg-blue-500 absolute top-0 left-0 z-10 summary">
                <StoryBottom topLeftImage={story.topLeftImage} topCenterImage={story.topCenterImage} topRightImage={story.topRightImage} centerLeftImage={story.centerLeftImage} centerRightImage={story.centerRightImage}/>
            </div>
        </div>
    )
}

export default Story