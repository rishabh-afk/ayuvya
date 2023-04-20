import ProductCard from "../common/card/ProductCard";

const ProductLayout = ({ pageTitle, products }) => {
  return (
    <section>
      <p className="text-4xl mx-4 font-semibold mb-4">{pageTitle}</p>
      <div className="flex flex-wrap">
        {products.map((product) => {
          return (
            <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 p-3">
              <ProductCard
                key={product.id}
                itemObj={product}
                isProductPage={true}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductLayout;
