// src/protect/Privacyroute.jsx
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("admin");

  return token ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
