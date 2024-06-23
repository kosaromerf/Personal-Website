import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ content, img }) => {
  return (
    <li>
      <img src={img} alt={content + "Icon"} />
      {content}
    </li>
  );
};

ListItem.propTypes = {
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ListItem;
