import { NavLink, useNavigate } from "react-router-dom";

const LogLink = ({ loggedIn, setLoggedIn, email }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch(`/api/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log(`Information posted.`);
        const res = response.json();
        console.log(res);
        setLoggedIn(false);
      } else {
        const errMessage = await response.json();
        console.log(
          `Unable to post information: ${response.status}. ${errMessage.Error}`
        );
      }
    } catch (e) {
      if (!(e instanceof Error)) {
        e = new Error(e);
      }
      console.error(e.message);
    }
    navigate("/");
  };

  return (
    <div className="loginLogout">
      <div>
        {!loggedIn && <NavLink to="/login">Login</NavLink>}
        {loggedIn && <span>{email} </span>} /{" "}
        <NavLink to="/logout" onClick={logout}>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default LogLink;
