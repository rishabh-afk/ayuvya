const FormInput = (props) => {
  return (
    <div className="flex flex-col gap-1">
      {props?.label && <label>{props.label}:</label>}
      <input
        {...props}
        required
        onChange={props.onChange}
        className={`border border-gray-300 p-2 mb-3 outline-none ${props.className}`}
      />
    </div>
  );
};

export default FormInput;
