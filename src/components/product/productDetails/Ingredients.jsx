import IngredientCard from "../../common/card/IngredientCard";
import imgData from "../../../assets/images/userPlaceholder.jpg";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="text-center mt-10">
      <h2 className="flex flex-col text-5xl font-bold">
        <span>A Powerful Trio of</span>
        <span>Ayurvedic Ingredients</span>
      </h2>
      <div className="flex justify-between gap-10">
        <IngredientCard
          description={"New producysjfd ndsfjds fndsf dsfmds,fds"}
          title={"AYuvya Pro"}
          imageUrl={imgData}
        />
        <IngredientCard
          description={"New producysjfd ndsfjds fndsf dsfmds,fds"}
          title={"AYuvya Pro"}
          imageUrl={imgData}
        />
        <IngredientCard
          description={"New producysjfd ndsfjds fndsf dsfmds,fds"}
          title={"AYuvya Pro"}
          imageUrl={imgData}
        />
        {/* {ingredients.map((ingredient) => {
          <img src={ingredient.ingredient_image} alt="" className="" />;
        })} */}
      </div>
    </div>
  );
};

export default Ingredients;
