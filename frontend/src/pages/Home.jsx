import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import TableView from "../components/home/TableView";
import CardView from "../components/home/CardView";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewType, setViewType] = useState("table");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5555/books");
        setBooks(response.data.books);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-4 font-mono">
      <div className="flex justify-center items-center gap-5 text-white">
        <button
          className="bg-blue-500 font-semibold py-1 px-3 rounded-full hover:scale-105 transition-transform duration-200 dark:bg-white dark:text-black"
          onClick={() => setViewType("table")}
        >
          Table
        </button>
        <button
          className="bg-blue-500 font-semibold py-1 px-3 rounded-full hover:scale-105 transition-transform duration-200 dark:bg-white dark:text-black"
          onClick={() => setViewType("card")}
        >
          Cards
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-2 font-bold dark:text-white flex gap-2 ">
          {" "}
          Your Library
          <Link to="/books/create">
            <MdAdd className=" text-black py-0 text-3xl rounded-full  dark:text-white dark:hover:bg-gray-800" />
          </Link>
        </h1>
      </div>
      {loading ? (
        <Spinner />
      ) : viewType === "table" ? (
        <TableView books={books} />
      ) : (
        <CardView books={books} />
      )} 
    </div>
  );
};

export default Home;
