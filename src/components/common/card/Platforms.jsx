const Platforms = ({ product }) => {
  return (
    <figure className="">
      <img loading="lazy" src={product.image_url} alt={product.id} />
    </figure>
  );
};

export default Platforms;
