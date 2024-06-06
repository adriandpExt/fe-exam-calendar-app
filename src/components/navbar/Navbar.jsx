/* eslint-disable react/prop-types */

import Filter from "./component/Filter";
import UserDropdown from "./component/UserDropdown";
import { SvgIcons } from "../svg-icons";
import { useState } from "react";

export const Navbar = ({ onFilterChange }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
          <li className="font-extrabold text-2xl">CALENDAR APP</li>
          <li>
            <UserDropdown />
          </li>
          <li>
            <Filter onFilterChange={onFilterChange} />
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
          <a className="btn btn-ghost font-extrabold text-2xl">CALENDAR APP</a>
        </div>

        <div className="hidden lg:flex items-center justify-evenly">
          <Filter onFilterChange={onFilterChange} />
          <UserDropdown />
        </div>

        <button className="lg:hidden" onClick={toggleDrawer}>
          <SvgIcons name={"ic_menu"} style={{ height: 30 }} />
        </button>
      </div>

      {renderDrawer()}
    </>
  );
};

export default Navbar;
