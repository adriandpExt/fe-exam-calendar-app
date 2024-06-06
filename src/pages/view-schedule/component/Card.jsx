/* eslint-disable react/prop-types */

export const Card = ({ data, onView }) => {
  return (
    <div
      className="card w-60 bg-base-100 shadow-2xl"
      onClick={() => onView(data)}
    >
      <div className="card-body">
        <h2>{data?.description}</h2>
      </div>
      <div className="card-actions flex justify-between p-5">
        <p className="font-semibold">{data?.status}</p>
        <p>{data?.calendarDate}</p>
      </div>
    </div>
  );
};

export default Card;
