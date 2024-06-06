import { Routes, Route } from "react-router-dom";
import { routesConfig } from "./routes/routeConfig";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
