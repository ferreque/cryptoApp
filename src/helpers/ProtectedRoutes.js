import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("crypto_app_user") || null;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
