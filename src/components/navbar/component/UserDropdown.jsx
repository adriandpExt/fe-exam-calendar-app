import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "./Avatar";
import { SvgIcons } from "../../svg-icons";

export const UserDropdown = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-blue-50">
      <div tabIndex={0} role="button" className="btn btn-outline m-1">
        <Avatar name={email} />

        {email}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={handleLogout} className="flex justify-between">
            Logout
            <SvgIcons name={"ic_logout"} style={{ height: 20, width: 20 }} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
