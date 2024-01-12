import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useGlobalContext } from "../AppContext";

const Notes = () => {
  const { notes } = useGlobalContext();

  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* <input type="text" autoFocus placeholder="Keywords..." /> */}
        <button className="btn">
          <CiSearch />
        </button>
      </header>
      <div className="notes__container">
        {notes?.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </div>
      <Link className="btn add__btn" to="/create-note">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
