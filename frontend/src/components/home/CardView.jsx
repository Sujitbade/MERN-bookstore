import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdDateRange, MdOutlineDelete } from "react-icons/md";

const CardView = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((item) => (
        <div
          key={item._id}
          className="border bg-white border-slate-600 rounded-lg p-4 relative dark:bg-gray-800"
        >
          <h4 className="my- text-gray-500">{item._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-600 text-2xl" />
            <h2 className="my-1 text-lg font-bold dark:text-white"> - {item.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-600 text-2xl" />
            <h2 className="my-1 font-bold text-lg dark:text-white"> - {item.author}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <MdDateRange className="text-red-600 text-2xl" />
            <h2 className="my-1 font-bold text-lg dark:text-white"> - {item.publishYear}</h2>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-500 hover:text-green-900" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-blue-500 hover:text-blue-900" />
            </Link>
            <button className="text-red-600 hover:text-red-900">
              <Link to={`/books/delete/${item._id}`}>
                <MdOutlineDelete className="text-2xl" />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
