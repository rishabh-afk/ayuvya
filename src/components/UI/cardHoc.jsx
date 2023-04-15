const CardHoc = (props) => {
  return (
    <div
      className={`rounded-lg border-none shadow-lg transition ease-in-out delay-50 hover:-translate-y-2 hover:shadow-xl duration-300 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardHoc;
