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
      {multiple ? (
        <>
          <textarea
            className="input input-bordered flex items-center gap-2 w-full h-28 resize-none whitespace-pre-line grow pl-8 "
            name={name}
            placeholder={placeholder}
            rows={5}
            value={value}
            onChange={onChange}
          >
            <div className="text-red-500 hidden sm:hidden md:block">
              {renderError()}
            </div>
          </textarea>
          <div className="hidden:sm"> {renderError()}</div>
        </>
      ) : (
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
          <div className="text-red-500 hidden sm:hidden md:block">
            {renderError()}
          </div>
        </label>
      )}
      <div className="text-red-950 sm:hidden  md:hidden">{renderError()}</div>
    </>
  );
};

export default Textfield;
