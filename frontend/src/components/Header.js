import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <header>
      <h1>Application Tracker</h1>
      <hr></hr>
      <div className="headerText">
        {path === "/" && (
          <div>
            <p>Browse current internship listings.</p>
            <p>
              Fill in listing details to easily track your application status
              and save data to your account.
            </p>
          </div>
        )}
        {path === "/statistics" && <p>View application statistics and data.</p>}
        {path === "/statistics/visualize" && <p>Visualize application data.</p>}
        {path === "/login" && (
          <p>Login to save application data to your profile.</p>
        )}
        {path === "/login/new-account" && (
          <p>Create a new account to keep track of your applications.</p>
        )}
      </div>
    </header>
  );
};

export default Header;
