export const Button = (props) => {
  return (
    <button
      className={`flex gap-1 items-center cursor-none lg:cursor-pointer px-3 py-2 rounded transition-all ease-in-out duration-300 ${props.className}`}
      type={props.type || "button"}
      onClick={props.handler}
    >
      {props.children}
    </button>
  );
};

export default Button;
