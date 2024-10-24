const NewAccount = () => {
  return (
    <div className="login">
      <div className="loginRow">
        <label htmlFor="email">Email</label>
        <input type="email"></input>
      </div>
      <div className="loginRow">
        <label htmlFor="confirmEmail">Confirm Email</label>
        <input type="confirmEmail"></input>
      </div>
      <div className="loginRow">
        <label htmlFor="password">Password</label>
        <input type="password"></input>
      </div>
      <div className="loginRow">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="confirmPassword"></input>
      </div>
      <button>Create New Account</button>
    </div>
  );
};

export default NewAccount;
