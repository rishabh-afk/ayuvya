export const Button = (props) => {
  return (
    <button
      className={`flex gap-1 items-center cursor-none lg:cursor-pointer px-3 py-[7px] rounded ${props.className}`}
      type={props.type || "button"}
      onClick={props.handler}
    >
      {props.children}
    </button>
  );
};

export default Button;
