const CardHoc = (props) => {
  return (
    <div
      className={`rounded-lg border-none shadow-3xl shadow-blue-300 transition ease-in-out hover:-translate-y-2 duration-500 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardHoc;
