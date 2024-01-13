import React from "react";
import { Link } from "react-router-dom";

const NoteItem = (props) => {
  const { id, title, details, date } = props;
  const colors = [
    "#283618",
    "#264653",
    "#8338ec",
    "#4a4e69",
    "#6a994e",
    "#0f4c5c",
    "#0077b6",
    "#0081a7",
  ];
  return (
    <Link
      to={`/edit-notes/${id}`}
      style={{
        backgroundColor:
          colors[Math.floor(Math.random() * (colors.length - 1))],
      }}
      className="note"
    >
      <h4>{title.length > 40 ? title.substr(0, 40) + "..." : title}</h4>
      <p>{date}</p>
    </Link>
  );
};

export default NoteItem;
