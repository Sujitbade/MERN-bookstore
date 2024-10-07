import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      <div className="flex flex-col items-center border-2 border-red-500 rounded-xl w-[600px] p-6 mx-auto bg-red-50">
        <h2 className="text-xl text-red-600 mb-4">
          Are you sure you want to delete this book?
        </h2>
        <div className="flex space-x-4">
          <button
            className="p-2 bg-red-600 text-white rounded w-32 hover:bg-red-700 transition"
            onClick={handleDeleteBook}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Delete"}
          </button>
          <button
            className="p-2 bg-gray-300 text-gray-700 rounded w-32 hover:bg-gray-400 transition"
            onClick={() => navigate("/")}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
