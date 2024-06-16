/* eslint-disable react/prop-types */
export const Textarea = ({
  placeholder,
  label,
  value,
  onChange,
  error,
  helperText,
  name,
}) => {
  const renderError = () => {
    return (
      <div className=" text-red-500">
        {error && <span>{error}</span>}
        {helperText && <span>{helperText}</span>}
      </div>
    );
  };

  return (
    <div className="font-mono">
      {label}
      <textarea
        className="input input-bordered flex items-center gap-2 w-full h-40 resize-none whitespace-pre-line grow pl-8 pt-4 "
        name={name}
        placeholder={placeholder}
        rows={5}
        value={value}
        onChange={onChange}
      ></textarea>
      <div className="flex sm:justify-end justify-start">{renderError()}</div>
    </div>
  );
};

export default Textarea;
