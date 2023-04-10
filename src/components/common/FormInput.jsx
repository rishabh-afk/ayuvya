const FormInput = (props) => {
  return (
    <div className="flex flex-col gap-1">
      {props?.label && <label>{props.label}:</label>}
      <input
        {...props}
        required
        onChange={props.onChange}
        className="border border-gray-300 rounded-sm p-2 w-80 mb-3 outline-none"
      />
    </div>
  );
};

export default FormInput;
