const CardHoc = (props) => {
  return (
    <div className={`rounded-lg border ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CardHoc;
