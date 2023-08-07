import PropTypes from "prop-types";
const CustomIcon = ({ content = "", className = "", children, ...props }) => {
  return (
    <div className={` flex items-center gap-x-2 mb-4 ${className}`}>
      <span>{children}</span>
      <span className="font-normal text-base ">{content}</span>
    </div>
  );
};
CustomIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string.isRequired,
};
export default CustomIcon;
