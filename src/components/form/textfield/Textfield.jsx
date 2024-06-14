/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import SvgIcons from "../../svg-icons/SvgIcons";

export const Textfield = ({
  placeholder = "Please input...",
  type = "text",
  name,
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
    <>
      <label className="input input-bordered flex items-center gap-2">
        {renderIsSvg()}
        <input
          type={type}
          className="grow pl-8 whitespace-pre"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      <div className="flex sm:justify-end justify-start">{renderError()}</div>
    </>
  );
};

export default Textfield;
