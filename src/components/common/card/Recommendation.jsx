const Recommendation = ({
  title,
  related_products,
  componentToBeRender: Component,
}) => {
  return (
    <>
      <h4 className="text-3xl font-bold mx-4 lg:mx-24 mb-5">{title}</h4>
      <div className="flex flex-wrap mx-3 lg:mx-20">
        {related_products.map((item) => {
          return (
            <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/4 p-2 lg:p-3">
              <Component key={item.id} product={item} headingSize="text-lg" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recommendation;
