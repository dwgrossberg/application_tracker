import { NavLink } from "react-router-dom";

const Nav = ({ internships, setFilteredInternships }) => {
  const handleClick = () => {
    setFilteredInternships(internships);
  };

  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Listings</li>
        </NavLink>
        <NavLink to="/statistics">
          <li onClick={handleClick}>My Applications</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
