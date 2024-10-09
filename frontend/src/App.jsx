import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        className="absolute top-4 right-4 bg-blue-600 text-white font-semibold font-mono px-3 py-1 rounded-full dark:bg-gray-700"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <div className="bg-zinc-200 dark:bg-neutral-900 min-h-screen transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
