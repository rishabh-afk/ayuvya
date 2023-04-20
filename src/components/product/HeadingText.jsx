const HeadingText = ({ heading }) => {
  return (
    <>
      {heading && (
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold pb-3 border-b-2">{heading}</h2>
        </div>
      )}
    </>
  );
};

export default HeadingText;
