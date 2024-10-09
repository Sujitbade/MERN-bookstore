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
    <div className="flex items-center justify-center h-screen">
      <BackButton />
      <div className="flex flex-col items-center justify-center border-2 border-red-700 rounded-xl w-[600px] p-6 bg-white dark:bg-gray-800">
        <h2 className="text-xl text-red-600 mb-4">
          Are you sure you want to delete
        </h2>
        <div className="flex gap-4">
          <button
            className="p-2 bg-red-600 text-white rounded w-32 hover:bg-red-8e00 transition"
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
