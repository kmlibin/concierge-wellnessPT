import { Link } from "react-router-dom";

const DropdownMenu = ({ toggle, handleLinkClick }) => {
  return (
    <div className={`${!toggle ? "dropdown-menu" : "resp-dropdown-menu"}`}>
      <ul className={`${!toggle ? "dropdown-list" : "resp-dropdown-list"}`}>
        <li className={`${!toggle ? "dropdown-item nav-link" : "drop-link"}`}>
          <Link to="/physicaltherapy" onClick={handleLinkClick}>
            Physical Therapy
          </Link>
        </li>
        <li className="dropdown-item nav-link">
          <Link to="/wellnesscoaching" onClick={handleLinkClick}>
            Wellness Coaching
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
