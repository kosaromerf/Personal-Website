import React from "react";

const ListItem = ({ content, img }) => {
  return (
    <li>
      <img src={img} />
      {content}
    </li>
  );
};

export default ListItem;
