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
  multiple = false,
}) => {
  const renderError = () => {
    return (
      <>
        {error && <span className="text-red-500">{error}</span>}
        {helperText && <span className="text-red-500">{helperText}</span>}
      </>
    );
  };

  const renderIsSvg = () => {
    return isSvg ? <SvgIcons name={iconName} className="w-6 h-6" /> : null;
  };

  return (
    <>
      {multiple ? (
        <>
          <textarea
            className="input input-bordered flex items-center gap-2 w-full resize-none "
            name={name}
            placeholder={placeholder}
            rows={5}
            value={value}
            onChange={onChange}
          >
            {renderError()}
          </textarea>
        </>
      ) : (
        <label className="input input-bordered flex items-center gap-2">
          {renderIsSvg()}
          <input
            type={type}
            className="grow pl-8"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
          {renderError()}
        </label>
      )}
    </>
  );
};

export default Textfield;
