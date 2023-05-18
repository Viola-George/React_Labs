import { NavLink } from "react-router-dom";
import "../style.css";
let Header = () => {
  return (
    <div className="header">
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#89CFF0" : "inherit" })}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#89CFF0" : "inherit" })}
          to={"/students/5"}
        >
          Student Details
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#89CFF0" : "inherit" })}
          to={"/profile"}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#89CFF0" : "inherit" })}
          to={"/error"}
        >
          Error
        </NavLink>
      </li>
    </div>
  );
};
export default Header;