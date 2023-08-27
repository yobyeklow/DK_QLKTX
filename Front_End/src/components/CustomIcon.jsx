import PropTypes from "prop-types";
const CustomIcon = ({ content = "", className = "", children }) => {
  return (
    <div className={` flex items-center gap-x-2 mb-4 ${className}`}>
      <span>{children}</span>
      <span className="font-normal text-base ">{content}</span>
    </div>
  );
};
CustomIcon.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
};
export default CustomIcon;
