import Banner from "../components/about/Banner";
import Story from "../components/about/Story";
import stories from "../assets/data/about/stories";


const About = () => {
  return (
    <>
        <Banner />
        {
            stories.map(story => <Story key={story.id} story={story} />)
        }
    </>
  )
}

export default About