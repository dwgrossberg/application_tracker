import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn, email, setEmail }) => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log(`Information posted.`);
        const tokenData = await response.json();
        console.log(tokenData);
        setLoggedIn(true);
        navigate("/");
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
  };

  const handleClick = () => {
    login({
      email: email,
      password: password,
    });
  };

  return (
    <div className="login">
      <div className="loginRow">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className="loginRow">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="newAccountLink">
        <NavLink to="new-account">Create New Account</NavLink>
      </div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
