import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const PersonItem = ({ index, name }) => (
  <div className="personitem">
    {index} - {name}
  </div>
);

PersonItem.propTYpes = {
  name: PropTypes.string.isRequired
};

export default PersonItem;
