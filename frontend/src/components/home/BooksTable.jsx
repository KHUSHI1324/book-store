import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr className='bg-blue-500 text-white shadow-md'>
          <th className='p-2 rounded-md'>No</th>
          <th className='p-2 rounded-md'>Title</th>
          <th className='p-2 rounded-md max-md:hidden'>Author</th>
          <th className='p-2 rounded-md max-md:hidden'>Publish Year</th>
          <th className='p-2 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr 
            key={book._id} 
            className='h-8 even:bg-blue-100 odd:bg-white hover:bg-blue-200 transition-colors duration-200'>
            <td className='p-2 text-center shadow-md rounded-md'>
              {index + 1}
            </td>
            <td className='p-2 text-center shadow-md rounded-md'>
              {book.title}
            </td>
            <td className='p-2 text-center shadow-md rounded-md max-md:hidden'>
              {book.author}
            </td>
            <td className='p-2 text-center shadow-md rounded-md max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='p-2 text-center shadow-md rounded-md'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-blue-700' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-blue-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
