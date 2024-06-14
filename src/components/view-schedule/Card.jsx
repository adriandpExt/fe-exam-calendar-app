/* eslint-disable react/prop-types */

import moment from "moment";

export const Card = ({ data, onView }) => {
  const trimData =
    data?.description.length >= 100
      ? `${data?.description.slice(0, 100)} ...`
      : data?.description;

  return (
    <div
      className="card w-60 bg-base-100 shadow-2xl hover:cursor-pointer"
      onClick={() => onView(data)}
    >
      <div className="card-title px-5 pt-4">
        <p className="text-sm">
          ✭✭✭ DATE:
          {moment(data?.calendarDate)
            .format("MMMM DD, YYYY")
            .toLocaleUpperCase()}
        </p>
      </div>

      <div className="card-body">
        <p className="whitespace-pre-wrap h-32 ">{trimData}</p>
      </div>

      <hr />
      <div className="card-actions flex justify-between p-5">
        <p className="font-semibold">STATUS: {data?.status.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Card;
