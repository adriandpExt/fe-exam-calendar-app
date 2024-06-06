/* eslint-disable react/prop-types */
export const Avatar = ({ name }) => {
  const initial = name ? name[0].toUpperCase() : "";

  return (
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content rounded-full w-8">
        <span className="text-lg">{initial}</span>
      </div>
    </div>
  );
};

export default Avatar;
