import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const updateNotes = (note) => {
    let fetchNotes = localStorage.getItem("notes");
    let dbNotes = [];
    if (fetchNotes) {
      dbNotes = JSON.parse(fetchNotes);
      dbNotes.forEach((element) => {
        if (element.id === note.id) {
          element.title = note.title;
          element.details = note.details;
        }
      });
    }
    localStorage.setItem("notes", JSON.stringify(dbNotes));
    setNotes(dbNotes);
  };

  const deleteNote = (id) => {
    console.log(id);
    let fetchNotes = localStorage.getItem("notes");
    let dbNotes = [];
    if (fetchNotes) {
      dbNotes = JSON.parse(fetchNotes);
      let newNotes = dbNotes.filter((item) => {
        console.log(item.id);
        return !(item.id === id);
      });
      localStorage.setItem("notes", JSON.stringify(newNotes));
      setNotes(newNotes);
    }
  };

  const fetchNotes = () => {
    let fetchNotes = localStorage.getItem("notes");
    setNotes(JSON.parse(fetchNotes));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ApplicationContext.Provider
      value={{ notes, AddNewNote, saveNotes, updateNotes, deleteNote }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ApplicationContext);
};
