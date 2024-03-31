import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const jwtToken = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (jwtToken === undefined) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};
export default ProtectedRoute;
