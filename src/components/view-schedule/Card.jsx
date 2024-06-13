/* eslint-disable react/prop-types */

import moment from "moment";

export const Card = ({ data, onView }) => {
  return (
    <div
      className="card w-60 bg-base-100 shadow-2xl"
      onClick={() => onView(data)}
    >
      <div className="card-body">
        <h2 className="font-semibold">Description</h2>
        <p className="whitespace-pre-wrap h-32 overflow-auto">
          {data?.description}
        </p>
      </div>
      <div className="card-actions flex justify-between p-5">
        <p className="font-semibold">Status:{data?.status}</p>
        <p>Date: {moment(data?.calendarDate).format("MMMM DD YYYY")}</p>
      </div>
    </div>
  );
};

export default Card;
