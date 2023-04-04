const CardHoc = (props) => {
  return (
    <div className={props.parentClassName}>
      <div className={`rounded-xl border ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default CardHoc;
