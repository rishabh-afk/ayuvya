const Platforms = ({ itemObj }) => {
  return (
    <img
      className="mx-auto w-5 object-contain"
      src={itemObj.image_url}
      alt={itemObj.id}
    />
  );
};

export default Platforms;
