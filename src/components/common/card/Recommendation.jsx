const Recommendation = ({
  title,
  related_products,
  componentToBeRender: Component,
}) => {
  return (
    <>
      {related_products && (
        <>
          <h4 className="text-xl md:text-3xl font-bold mx-3 md:mx-8 lg:mx-24 mb-5">
            {title}
          </h4>
          <div className="flex flex-wrap mx-3 md:mx-8 lg:mx-20">
            {related_products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-1/2 md:w-1/3 lg:w-1/4 p-2 lg:p-3"
                >
                  <Component
                    key={item.id}
                    product={item}
                    cardStarSize={20}
                    headingSize="text-md"
                    isNotSwiperProduct={true}
                    cardDescriptionSize={"text-md md:text-xl"}
                    productBriefHeight={"h-36 md:h-32"}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Recommendation;
