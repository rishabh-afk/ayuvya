const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients && (
        <>
          {ingredients.map((item) => {
            return (
              <div key={item.id} className="text-center">
                <h2 className="flex flex-col text-3xl lg:text-5xl font-bold py-8">
                  <span>{item?.first_title}</span>
                  <span>{item?.second_title}</span>
                </h2>
                <div className="flex flex-wrap justify-center">
                  {item.ingredient.map((ingredient) => {
                    return (
                      <div key={ingredient.id} className="w-full md:w-1/3 p-2">
                        <div className="shadow-xl rounded-lg hover:shadow-md transition-all duration-300">
                          <img
                            src={ingredient?.ingredient_image}
                            alt={ingredient?.ingredient_name}
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Ingredients;
