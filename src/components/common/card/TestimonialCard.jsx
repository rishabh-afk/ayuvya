import { AiFillStar } from "react-icons/ai";
import CardHoc from "../../UI/CardHoc";

const TestimonialCard = ({ testimonial }) => {
  const items = new Array(Math.round(testimonial.rating)).fill(null);
  return (
    <CardHoc className="bg-white p-8 my-10 cursor-none lg:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-y-105 duration-300">
      <figure className="flex justify-center">
        <img className="rounded-full w-24" src={testimonial.imageUrl} alt="" />
      </figure>
      <figcaption className="flex flex-col justify-center items-center">
        <div className="flex gap-1 py-5">
          {items.map((item, i) => {
            return <AiFillStar key={i} size={20} color="yellowGreen" />;
          })}
        </div>
        <div className="text-center h-80">
          <h3 className="text-2xl font-normal pb-3">{testimonial.title}</h3>
          <p className="text-lg">{testimonial.description}</p>
          <p className="text-lg">
            - {testimonial.name}, Buyer{" "}
            <span className="font-semibold text-lg">
              {testimonial.productName}
            </span>
          </p>
        </div>
      </figcaption>
    </CardHoc>
  );
};

export default TestimonialCard;
