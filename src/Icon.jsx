import PropTypes from "prop-types";

Icon.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

function Icon({ icon = null, children = null, className = "" }) {
  return (
    <div className={className}>
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default Icon;
