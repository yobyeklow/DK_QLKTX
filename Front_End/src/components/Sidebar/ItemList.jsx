import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ItemList = ({ content = "", children, to = "#" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "active link-item mb-7" : "link-item mb-7"
      }
    >
      <span>{children}</span>
      <span className="font-semibold text-lg text-white">{content}</span>
    </NavLink>
  );
};
ItemList.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};
export default ItemList;
