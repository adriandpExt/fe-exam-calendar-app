/* eslint-disable react/prop-types */
export const SvgIcons = ({
  name,
  prefix = "icon",
  color = "#333",
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`;
  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
};

export default SvgIcons;
