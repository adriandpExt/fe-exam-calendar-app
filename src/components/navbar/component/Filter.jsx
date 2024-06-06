import { detailsList } from "../utils";

// eslint-disable-next-line react/prop-types
export const Filter = ({ onFilterChange }) => {
  const handleFilterClick = (status) => {
    onFilterChange(status);
  };

  const renderList = () => {
    return detailsList?.map((item, id) => (
      <li key={id}>
        <button onClick={() => handleFilterClick(item)}>{item}</button>
      </li>
    ));
  };
  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-blue-50">
      <div tabIndex={0} role="button" className="btn btn-outline m-1">
        FILTER
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {renderList()}
      </ul>
    </div>
  );
};

export default Filter;
