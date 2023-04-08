const CardHoc = (props) => {
  return (
      <div className={`rounded-xl border ${props.className}`}>
        {props.children}
      </div>
  );
};

export default CardHoc;
