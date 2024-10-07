import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState(""); // Empty String for title.
  const [author, setAuthor] = useState(""); // Empty String for author.
  const [publishYear, setPublishYear] = useState(""); // Empty String for publish year.
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateBook = () => {
    const data = {
      title,
      author,
      publishYear,
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
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full mt-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full mt-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full mt-2"
          />
        </div>
        <div className="text-center">
          <button
            className="p-2 bg-green-500 text-white rounded my-4 w-44"
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
