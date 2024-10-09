import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState(""); // Empty String for title.
  const [author, setAuthor] = useState(""); // Empty String for author.
  const [publishYear, setPublishYear] = useState(""); // Empty String for publish year.
  const [description, setDescription] = useState(""); //Empty String for book decription.
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateBook = () => {
    const data = {
      title,
      author,
      publishYear,
      description: description || "No description available for the book.",
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/"); // Navigate to homepage after successful creation.
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong, check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center font-semibold dark:text-white">
        Add a new Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col font-semibold text-black border-2 border-black rounded-xl w-[400px] p-4 mx-auto dark:bg-gray-800 ">
        <div className="my-2">
          <label className="text-xl dark:text-white">Title </label>
          <input
            type="text"
            placeholder="Enter the title of the book."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-black px-4 py-2 w-full mt-1 rounded-lg"
          />
        </div>
        <div className="my-2">
          <label className="text-xl dark:text-white">Author </label>
          <input
            type="text"
            placeholder="Enter the author of the book."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-black px-4 py-2 w-full mt-1 rounded-lg"
          />
        </div>
        <div className="my-2">
          <label className="text-xl dark:text-white">Publish Year </label>
          <input
            type="text"
            placeholder="Enter the publish year."
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-black px-4 py-2 w-full mt-1 rounded-lg"
          />
        </div>
        <div className="my-2">
          <label className="text-xl  dark:text-white">Description </label>
          <input
            type="text"
            placeholder="Short description of the book"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-black px-4 py-2 w-full mt-1 rounded-lg"
          />
        </div>
        <div className="text-center">
          <button
            className="p-2 bg-green-600 text-xl text-white rounded-lg mt-2 w-40 font-semibold hover:bg-green-700 dark:bg-slate-600 dark:hover:bg-green-700"
            onClick={handleCreateBook}
          >
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
