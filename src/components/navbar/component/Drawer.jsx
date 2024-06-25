/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

import { getEmailFromLocalStorage } from "~/utils/localStorage";
import useLoginStore from "~/store/useLogin";

import { SvgIcons } from "../../svg-icons";

import Avatar from "./Avatar";

import { detailsList } from "../utils";

export const Drawer = ({ onFilterChange, isDrawerOpen, setIsDrawerOpen }) => {
  const { logout } = useLoginStore();
  const email = getEmailFromLocalStorage();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleFilterClick = (status) => {
    onFilterChange(status);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderDetailList = () => {
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

  const renderSideMenuList = () => {
    return (
      <ul className="menu p-4 w-80 min-h-full bg-blue-50 text-base-content space-y-4">
        <li className="font-extrabold text-2xl ">
          <div className="flex">
            <Avatar name={email} />
            <p>{email}</p>
          </div>
        </li>
        <li>
          <button onClick={handleLogout} className="text-lg font-semibold ">
            <SvgIcons name={"ic_logout"} style={{ height: 20, width: 20 }} />
            Logout
          </button>
        </li>
        <li>
          <details className="collapse collapse-arrow bg-blue-50">
            <summary className="collapse-title text-lg font-semibold">
              <p className="flex items-center gap-2">
                <SvgIcons
                  name={"ic_filter"}
                  style={{ height: 20, width: 20 }}
                />
                Filter
              </p>
            </summary>
            <div className="collapse-content">
              <ul>{renderDetailList()}</ul>
            </div>
          </details>
        </li>
      </ul>
    );
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
        {renderSideMenuList()}
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

  return <aside>{renderDrawer()}</aside>;
};

export default Drawer;
