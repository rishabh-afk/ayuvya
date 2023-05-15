const Form = (props) => {
  return (
    <div className="relative">
      <input
        {...props}
        onChange={props.onChange}
        className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
        placeholder=" "
      />
      <label
        htmlFor={props.id}
        className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:w-auto peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:w-auto peer-focus:-translate-y-4 left-3"
      >
        {props.label}
      </label>
    </div>
  );
};

export default Form;
