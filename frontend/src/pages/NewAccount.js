import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NewAccount = ({ email, setEmail }) => {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const new_user = async (data) => {
    if (email !== confirmEmail) {
      window.alert("Emails do not match.");
      return;
    } else if (password !== confirmPassword) {
      window.alert("Passwords do not match.");
      return;
    } else if (password.length < 8) {
      window.alert("Password must be at least 8 characters.");
      return;
    }
    try {
      const response = await fetch(`/api/new_user`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log(`Information posted.`);
        const responseData = await response.json();
        console.log(responseData);
        navigate("/login");
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
    new_user({
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
        <label htmlFor="confirmEmail">Confirm Email</label>
        <input
          type="email"
          onChange={(e) => setConfirmEmail(e.target.value)}
        ></input>
      </div>
      <div className="loginRow">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="loginRow">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </div>
      <div className="newAccountLink">
        <NavLink to="/login">Back To Login</NavLink>
      </div>
      <button onClick={handleClick}>Create New Account</button>
    </div>
  );
};

export default NewAccount;
