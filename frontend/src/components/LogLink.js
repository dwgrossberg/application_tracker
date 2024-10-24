import { NavLink } from "react-router-dom";

const LogLink = () => {
  return (
    <div className="loginLogout">
      <div>
        <NavLink to="/login">Login</NavLink> /{" "}
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  );
};

export default LogLink;
