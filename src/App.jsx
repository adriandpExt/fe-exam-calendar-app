/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "./pages/not-found/NotFound";
import { privateRoutes, publicRoutes } from "./routes/routeConfig";
import { useAuth } from "./hooks/useAuth";
import { AuthProvider } from "./context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoute element={route.element} />}
          />
        ))}

        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
