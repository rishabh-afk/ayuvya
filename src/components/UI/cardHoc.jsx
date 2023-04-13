const CardHoc = (props) => {
  return (
    <div className={`rounded-lg border-none shadow-lg ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CardHoc;
