const Platforms = ({ product }) => {
  return (
    <figure className="">
      <img className="" src={product.image_url} alt={product.id} />
    </figure>
  );
};

export default Platforms;
