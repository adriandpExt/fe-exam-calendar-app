import Login from "../pages/login/Login";
import ViewSchedule from "../pages/view-schedule/ViewSchedule";

export const routesConfig = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ViewSchedule />,
  },
];
