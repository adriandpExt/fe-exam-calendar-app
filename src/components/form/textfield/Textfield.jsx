/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import SvgIcons from "../../svg-icons/SvgIcons";

export const Textfield = ({
  placeholder = "Please input...",
  type = "text",
  name,
  label,
  iconName,
  isSvg,
  value,
  onChange,
  error,
  helperText,
}) => {
  const renderError = () => {
    return (
      <div className=" text-red-500">
        {error && <span>{error}</span>}
        {helperText && <span>{helperText}</span>}
      </div>
    );
  };

  const renderIsSvg = () => {
    return isSvg ? <SvgIcons name={iconName} className="w-6 h-6" /> : null;
  };

  return (
    <div className="font-mono">
      {label}
      <div className="input input-bordered flex items-center gap-2 pl-8 h-10 ">
        {renderIsSvg()}
        <input
          type={type}
          className="grow whitespace-pre "
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="flex sm:justify-end justify-start">{renderError()}</div>
    </div>
  );
};

export default Textfield;
