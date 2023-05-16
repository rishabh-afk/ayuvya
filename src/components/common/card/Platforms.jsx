const Platforms = ({ product }) => {
  return (
    <img
      className="mx-auto object-cover"
      src={product.image_url}
      alt={product.id}
    />
  );
};

export default Platforms;
