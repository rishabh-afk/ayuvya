const Ingredients = ({ ingredients }) => {
  return (
    <div className="text-center">
      <h2 className="flex flex-col text-5xl font-bold pb-5">
        <span>A Powerful Trio of</span>
        <span>Ayurvedic Ingredients</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {ingredients.map((ingredient) => {
          return (
            <div className="w-full md:w-1/3 flex justify-center p-4">
              <img src={ingredient.ingredient_image} alt="" className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredients;
