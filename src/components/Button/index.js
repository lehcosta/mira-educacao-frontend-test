import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./style.css";

const Button = ({ children, type, onClick, disabled }) => {
  const classes = classnames("btn", {
    [`btn--${type}`]: type,
    "btn--disabled": disabled
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  onClick: () => {}
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "default"])
};

export default Button;
