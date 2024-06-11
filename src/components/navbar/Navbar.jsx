/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SvgIcons } from "../svg-icons";

import Filter from "./component/Filter";
import UserDropdown from "./component/UserDropdown";
import Avatar from "./component/Avatar";

import { detailsList } from "./utils";

export const Navbar = ({ onFilterChange }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleFilterClick = (status) => {
    onFilterChange(status);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderList = () => {
    return detailsList?.map((item, id) => (
      <li key={id}>
        <button
          onClick={() => handleFilterClick(item)}
          className="font-semibold"
        >
          {item}
        </button>
      </li>
    ));
  };

  const renderDrawerSide = () => {
    return (
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={toggleDrawer}
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-blue-50 text-base-content space-y-4">
          <li className="font-extrabold text-2xl ">
            <div className="flex">
              <Avatar name={email} />
              <p>{email}</p>
            </div>
          </li>
          <li>
            <button onClick={handleLogout} className="text-lg font-semibold">
              Logout
            </button>
          </li>
          <li>
            <details className="collapse collapse-arrow bg-blue-50">
              <summary className="collapse-title text-lg font-semibold">
                Filter
              </summary>
              <div className="collapse-content">
                <ul>{renderList()}</ul>
              </div>
            </details>
          </li>
        </ul>
      </div>
    );
  };

  const renderDrawer = () => {
    return (
      isDrawerOpen && (
        <div className="drawer" style={{ zIndex: 999 }}>
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={toggleDrawer}
          />

          {renderDrawerSide()}
        </div>
      )
    );
  };

  return (
    <>
      <div className="navbar bg-blue-50  z-20">
        <div className="flex items-center flex-1">
          <SvgIcons name="ic_calendar" style={{ height: 30, width: 30 }} />
          <a className="btn btn-ghost font-extrabold text-2xl">CALENDAR APP</a>
        </div>

        <div className="hidden lg:flex items-center justify-evenly">
          <Filter onFilterChange={onFilterChange} />
          <UserDropdown />
        </div>

        <SvgIcons
          className="lg:hidden"
          name={"ic_menu"}
          style={{ height: 30 }}
          onClick={toggleDrawer}
        />
      </div>

      {renderDrawer()}
    </>
  );
};

export default Navbar;
