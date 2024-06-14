/* eslint-disable react/prop-types */
export const Textarea = ({
  placeholder,
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
    <>
      <textarea
        className="input input-bordered flex items-center gap-2 w-full h-40 resize-none whitespace-pre-line grow pl-8 "
        name={name}
        placeholder={placeholder}
        rows={5}
        value={value}
        onChange={onChange}
      ></textarea>
      <div className="flex sm:justify-end justify-start">{renderError()}</div>
    </>
  );
};

export default Textarea;
