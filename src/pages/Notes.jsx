import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useGlobalContext } from "../AppContext";

const Notes = () => {
  const { notes, search } = useGlobalContext();

  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
    search(e.target.value);
  };

  return (
    <section>
      <header className="notes__header">
        {isSearch || <h2>My Notes</h2>}
        {isSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keywords..."
            value={searchText}
            onChange={onChangeHandler}
          />
        )}
        <button className="btn" onClick={() => setIsSearch(!isSearch)}>
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
