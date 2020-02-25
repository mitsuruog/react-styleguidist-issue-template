import * as React from "react";
import * as classnames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

export const Button = props => {
  const { color, size, disable, onClick, children } = props;
  const rootStyle = classnames("example-button", {
    [`is-${size}`]: Boolean(size),
    [`is-${color}`]: Boolean(color)
  });
  return (
    <button className={rootStyle} disabled={disable} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "normal",
  disable: false
};

Button.propTypes = {
  /**
   * The color for the button
   */
  color: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(["small", "normal", "large"]),
  /**
   * Set true to make the button disable
   */
  disable: PropTypes.bool,
  /**
   * Gets called when the user clicks on the button
   */
  onClick: PropTypes.func,
  /**
   * Button label
   */
  children: PropTypes.node.isRequired
};
