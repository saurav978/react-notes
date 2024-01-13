import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useGlobalContext } from "../AppContext";
import useFormattedDate from "../hooks/useFormattedDate";

const EditNote = () => {
  const { notes, updateNotes, deleteNote } = useGlobalContext();
  const idObj = useParams();
  const note = notes.find((item) => item.id === idObj.id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const navigate = useNavigate();

  const date = useFormattedDate();

  const saveHandler = () => {
    let note = { id: idObj.id, title, details, date };
    updateNotes(note);
  };

  const deletehandler = () => {
    navigate("/");
    deleteNote(idObj.id);
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={saveHandler}>
          save
        </button>
        <button className="btn danger" onClick={deletehandler}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form action="" className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
