import Login from "../pages/login/Login";
import ViewSchedule from "../pages/view-schedule/ViewSchedule";

export const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <ViewSchedule />,
  },
];
