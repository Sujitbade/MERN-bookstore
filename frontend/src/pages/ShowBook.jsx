import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { FaBook } from "react-icons/fa";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className="border-2 border-black bg-white rounded-lg max-w-4xl w-full h-auto p-6 my-8 shadow-lg dark:bg-gray-800 dark:text-white dark:border-sky-400">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-gray-500 font-semibold">
                TITLE
              </label>
              <span className="block text-5xl uppercase dark:text-sky-500">
                {book.title}
              </span>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold">
                ADDED TIME
              </label>
              <span className="common-span-class">
                {new Date(book.createdAt).toString()}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-row gap-5">
              <div>
                <label className="text-xs text-gray-500 font-semibold ">
                  BOOK ID #
                </label>
                <span className="common-span-class">{book._id}</span>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold">
                  Author
                </label>
                <span className="common-span-class uppercase">
                  {book.author}
                </span>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold">
                  Publish Year
                </label>
                <span className="common-span-class">{book.publishYear}</span>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold">
                Last Updated
              </label>
              <span className="common-span-class">
                {new Date(book.updatedAt).toString()}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div>
              <label className="text-xs text-gray-500 font-semibold">
                Book Description
              </label>
              <span className="common-span-class max-w-xl h-40 overflow-y-scroll mt-2 text-justify scrollbar-hide">
                {book.description}
              </span>
            </div>
            <div className="border-y-4 flex items-center rounded-lg dark:border-sky-800">
              <FaBook className="h-40 w-40 text-gray-700 p-4 dark:text-gray-500" />
              <FaBook className="h-40 w-40 text-gray-600 p-4" />
              <FaBook className="h-40 w-40 text-gray-500 p-4 dark:text-gray-700" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
