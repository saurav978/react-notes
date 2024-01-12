import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/edit-notes/:id" element={<EditNote />} />
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
