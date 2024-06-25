/* eslint-disable react/prop-types */
import { useState } from "react";

import { SvgIcons } from "../svg-icons";

import { Filter, UserDropdown, Drawer } from "./component";

export const Navbar = ({ onFilterChange }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFilterClick = (status) => {
    onFilterChange(status);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar bg-blue-50  z-20">
        <div className="flex items-center flex-1">
          <SvgIcons name="ic_calendar" style={{ height: 30, width: 30 }} />
          <a className="btn btn-ghost font-extrabold text-2xl">CALENDAR APP</a>
        </div>

        <div className="hidden lg:flex items-center justify-evenly">
          <Filter onFilterChange={onFilterChange} />
          <UserDropdown />
        </div>

        <SvgIcons
          className="lg:hidden cursor-pointer"
          name={"ic_menu"}
          style={{ height: 30 }}
          onClick={toggleDrawer}
        />
      </nav>

      <Drawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={toggleDrawer}
        onFilterChange={handleFilterClick}
      />
    </>
  );
};

export default Navbar;
