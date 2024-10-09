import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const TableView = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2  dark:text-white">
      <thead className="font-bold text-xl bg-white dark:bg-gray-800">
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border rounded-md border-slate-600">Title</th>
          <th className="border  border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Operations
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800">
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-600 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-600 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-600 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-600 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-600 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-500" />
                </Link>
                <Link to={`books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-500" />
                </Link>
                <Link to={`books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-500 " />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
