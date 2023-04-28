import whyAyuvyaImage from "../../assets/images/why_ayuvya.webp";

const WhyAyuvya = () => {
  return (
    <div className="max-w-7xl m-auto p-6 lg:px-20">
      <figure>
        <img src={whyAyuvyaImage} alt="Why Ayuvya Ayurveda" />
      </figure>
      <figcaption className="py-8">
        <p className="text-lg lg:text-xl text-center">
          Ayuvya Ayurveda is one of the most trusted platforms in India that has
          over 2 lakhs plus satisfied customers. A wellness brand where the past
          meets the future. Every product is a rare blend of potent herbs
          inspired by ancient herbal secrets. After travelling the holy lands of
          India, Ayuvya Ayurveda brings a premium range of products that is
          perfected through science and will fit perfectly into your self-care
          regime and not the other way around.
        </p>
      </figcaption>
    </div>
  );
};

export default WhyAyuvya;
