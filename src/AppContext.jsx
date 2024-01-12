import React, { createContext, useContext, useEffect, useState } from "react";

const ApplicationContext = createContext();

export const AppProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const AddNewNote = (note) => {
    if (notes) {
      setNotes((notes) => [...notes, note]);
    } else {
      setNotes((notes) => [note]);
    }
  };

  const saveNotes = (note) => {
    let fetchNotes = localStorage.getItem("notes");
    let dbNotes = [];
    if (fetchNotes) {
      dbNotes = JSON.parse(fetchNotes);
      dbNotes = [...dbNotes, note];
    } else {
      dbNotes = [note];
    }
    localStorage.setItem("notes", JSON.stringify(dbNotes));
  };

  const fetchNotes = () => {
    let fetchNotes = localStorage.getItem("notes");
    setNotes(JSON.parse(fetchNotes));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ApplicationContext.Provider value={{ notes, AddNewNote, saveNotes }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ApplicationContext);
};
