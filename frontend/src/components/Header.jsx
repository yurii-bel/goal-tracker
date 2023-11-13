import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Lik, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link ti="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
