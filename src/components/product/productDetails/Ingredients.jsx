const Ingredients = ({ ingredients }) => {
  return (
    <div className="text-center">
      <h2 className="flex flex-col text-3xl lg:text-5xl font-bold pb-5">
        <span>{ingredients[0]?.first_title}</span>
        <span>{ingredients[0]?.second_title}</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {ingredients[0]?.ingredient.map((ingredient, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-1/3 flex justify-center p-4"
            >
              <img
                src={ingredient?.ingredient_image}
                alt={ingredient?.ingredient_name}
                className=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredients;
