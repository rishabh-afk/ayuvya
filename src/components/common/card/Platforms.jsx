const Platforms = ({ product }) => {
  return (
    <img
      className="mx-auto w-5 object-contain"
      src={product.image_url}
      alt={product.id}
    />
  );
};

export default Platforms;
