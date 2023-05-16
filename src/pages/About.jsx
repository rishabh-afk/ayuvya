import Story from "../components/about/Story";
import Banner from "../components/about/Banner";
import stories from "../assets/data/about/stories";

const About = () => {
  return (
    <>
      <Banner />
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
      <div className="h-screen bg-red-300"></div>
    </>
  );
};

export default About;
