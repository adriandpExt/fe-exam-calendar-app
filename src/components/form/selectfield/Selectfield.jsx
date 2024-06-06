/* eslint-disable react/prop-types */

export const Selectfield = ({
  name,
  value,
  onChange,
  options,
  error,
  helperText,
  placeholder = "Please select",
}) => {
  const renderError = () => {
    if (!value && error) {
      return (
        <div className="flex sm:justify-end justify-start text-red-500">
          <span>{error}</span>
          {helperText && <span>{helperText}</span>}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <select
        className="select select-bordered w-full"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value} className="pl-8">
            {option.label}
          </option>
        ))}
      </select>
      {renderError()}
    </>
  );
};

export default Selectfield;
