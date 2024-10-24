import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="loginRow">
        <label htmlFor="email">Email</label>
        <input type="email"></input>
      </div>
      <div className="loginRow">
        <label htmlFor="password">Password</label>
        <input type="password"></input>
      </div>
      <div className="newAccountLink">
        <NavLink to="new-account">Create New Account</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
