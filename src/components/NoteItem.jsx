import React from "react";
import { Link } from "react-router-dom";

const NoteItem = (props) => {
  const { id, title, details, date } = props;
  return (
    <Link to={`/edit-notes/${id}`} className="note">
      <h4>{title.length > 40 ? title.substr(0, 40) + "..." : title}</h4>
      <p>{date}</p>
    </Link>
  );
};

export default NoteItem;
