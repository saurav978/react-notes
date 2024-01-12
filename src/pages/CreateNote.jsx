import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import useFormattedDate from "../hooks/useFormattedDate";
import { useGlobalContext } from "../AppContext";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useFormattedDate();

  const { AddNewNote, saveNotes } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    const note = { id: uuid(), title, details, date };
    AddNewNote(note);
    setDetails("");
    setTitle("");
    saveNotes(note);
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={submitHandler}>
          save
        </button>
      </header>
      <form action="" className="create-note__form" onSubmit={submitHandler}>
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

export default CreateNote;
