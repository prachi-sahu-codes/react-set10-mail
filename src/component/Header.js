import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeStyle = ({ isActive }) => ({
    borderRight: isActive ? "4px solid black" : "",
    color: isActive ? "red" : "gray",
  });
  return (
    <nav className="sidebar">
      <NavLink to="/" style={activeStyle} className="navLink">
        Inbox
      </NavLink>
      <NavLink to="/spam" style={activeStyle} className="navLink">
        Spam
      </NavLink>
      <NavLink to="/trash" style={activeStyle} className="navLink">
        Trash
      </NavLink>
    </nav>
  );
};
