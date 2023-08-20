import TableItem from "./TableItem";
import Spinner from "./Spinner";
import {useGetAllBooks} from '../graphql-api'
import { createModalStatausChange } from "../store/book-actions";
import { useAppDispatch } from "../hooks/redux-hooks";

const BookTable = () => {
    const {books, loading, error} = useGetAllBooks()
    const dispatch = useAppDispatch();
    if (loading) return <Spinner />
    if (error) return <p>{error.message}</p>;
    const openModal = () => {
        dispatch(createModalStatausChange(true));
      };
    return (
        <>
        <div className='flex justify-end'>
          <button className="rounded-lg border-solid border-2 border-gray-300 p-2 mr-5 md:w-40 hover:border-gray-500" onClick={openModal}>
            New
          </button>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            {
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Title</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Published</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Body</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
                        </tr>
                    </thead> 
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {
                            books.map((data) => <TableItem item={data} key={data.id} />)
                        }
                    </tbody>
                </table>
            }
            
        </div>
        </>
    );
}

export default BookTable;