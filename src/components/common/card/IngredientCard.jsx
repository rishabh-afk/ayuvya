import CardHoc from "../../UI/CardHoc";

const IngredientCard = ({ imageUrl, description, title }) => {
  console.log(imageUrl, description, title);
  return (
    <CardHoc className="w-1/3">
      <div className="">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="">{description}</p>
      </div>
      <img src={imageUrl} alt="" className="w-32 rounded-full" />
    </CardHoc>
  );
};

export default IngredientCard;
