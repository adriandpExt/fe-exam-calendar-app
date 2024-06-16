/* eslint-disable react/prop-types */

export const Selectfield = ({
  name,
  label,
  value,
  onChange,
  options,
  error,
  helperText,
  disabled = false,
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
    <div className="font-mono">
      {label}
      <select
        className="select select-bordered w-full pl-8"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {renderError()}
    </div>
  );
};

export default Selectfield;
