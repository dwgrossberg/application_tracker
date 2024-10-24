import { NavLink } from "react-router-dom";


const Nav = (() => {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li>
                        Listings
                    </li>
                </NavLink>
                <NavLink to="/statistics">
                    <li>
                        My Applications
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
});

export default Nav;