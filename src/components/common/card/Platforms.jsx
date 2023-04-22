const Platforms = ({ itemObj }) => {
  return (
    <img
      className="mx-auto object-contain"
      src={itemObj.image_url}
      alt={itemObj.id}
    />
  );
};

export default Platforms;
