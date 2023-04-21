import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/" className="navLink">
        Inbox
      </NavLink>
      <NavLink to="/spam" className="navLink">
        Spam
      </NavLink>
      <NavLink to="/trash" className="navLink">
        Trash
      </NavLink>
    </nav>
  );
};
