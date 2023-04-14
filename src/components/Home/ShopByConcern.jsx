import product1 from "../../assets/images/product/Combo.webp";
import product2 from "../../assets/images/product/Hair-Care.webp";
import product3 from "../../assets/images/product/Intimate-Wellness.webp";
import product4 from "../../assets/images/product/Skin-Care_Shop_by_concern_New_Webp.webp";
import product5 from "../../assets/images/product/Weight-Care.webp";
import product6 from "../../assets/images/product/Wellness.webp";
import { Link } from "react-router-dom";
import HeadingText from "../common/HeadingText";

const ShopByConcern = () => {
  const products = [
    {
      id: 1,
      title: "Combos",
      url: "ayuvya-combo-packs",
      image: product1,
    },
    {
      id: 2,
      title: "Hair Care",
      url: "hair-care",
      image: product2,
    },
    {
      id: 3,
      title: "Intimate Care",
      url: "wellness",
      image: product3,
    },
    {
      id: 4,
      title: "Skin care",
      url: "skin-care",
      image: product4,
    },
    {
      id: 5,
      title: "Weight Issue",
      url: "weight-management",
      image: product5,
    },
    {
      id: 6,
      title: "Wellness",
      url: "nutrition",
      image: product6,
    },
  ];
  return (
    <div className="bg-[#f8f9fa] p-6">
      <HeadingText heading={"Shop By Concern"} />
      <div className="flex flex-wrap gap-5 justify-center py-5">
        {products.map((product) => {
          return (
            <Link key={product.id} to={product.url}>
              <div className="shadow-xl rounded-md">
                <figure className="max-[380px]:w-28 w-[10rem] md:w-40 lg:w-48">
                  <img
                    className="rounded-t-md"
                    src={product.image}
                    alt={product.title}
                  />
                </figure>
                <figcaption>
                  <p className="rounded-b-md text-center py-2 bg-white">
                    {product.title}
                  </p>
                </figcaption>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByConcern;
