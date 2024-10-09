import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setPublishYear(res.data.publishYear);
        setDescription(res.data.description);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to fetch book details.");
        console.log(err);
      });
  }, [id]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear || !description) {
      setError("All fields are required.");
      return;
    }

    const data = {
      title,
      author,
      publishYear,
      description,
    };

    setLoading(true);
    setError("");
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to update the book.");
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col border-2 border-black bg-white rounded-lg w-[600px] p-4 mx-auto dark:bg-gray-800">
        <BackButton />
        {loading && <Spinner />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="my-4">
          <label className="text-xl font-semibold mr-4 text-gray-500 dark:text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 rounded-lg border-gray-500 px-4 py-2 w-full mt-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 font-semibold dark:text-white">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 rounded-lg border-gray-500 px-4 py-2 w-full mt-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 font-semibold dark:text-white">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 rounded-lg border-gray-500 px-4 py-2 w-full mt-2 "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 font-semibold dark:text-white">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 rounded-lg border-gray-500 px-4 py-2 w-full mt-2"
          />
        </div>

        <div className="text-center">
          <button
            className="p-2 bg-green-500 text-white rounded my-4 w-44"
            onClick={handleEditBook}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Save Book"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
