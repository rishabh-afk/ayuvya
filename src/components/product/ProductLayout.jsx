import ProductCard from "./ProductCard";

const ProductLayout = ({ pageTitle, products }) => {
  return (
    <section>
      <p className="text-4xl mx-4 font-semibold mb-4">{pageTitle}</p>
      <div className="flex flex-wrap">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-3 lg:p-4"
            >
              <ProductCard
                key={product.id}
                cardStarSize={20}
                product={product}
                headingSize={"text-sm"}
                isNotSwiperProduct={true}
                cardDescriptionSize={"text-md md:text-xl"}
                productBriefHeight={"h-36 md:h-32"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductLayout;
