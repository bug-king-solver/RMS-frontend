import TableItem from "./TableItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useEffect } from "react";
import { fetchBooks } from "../store/book-actions";
import Spinner from "./Spinner";

const BookTable = () => {
    
    const dispatch=useAppDispatch();
    
    const allBooks = useAppSelector(state => state.book.allBooks);
    const isLoading = useAppSelector(state => state.book.isLoading);
    
    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch])

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            {
                isLoading ? <Spinner /> : 
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
                            allBooks.map((data, index) => <TableItem tableData={data} key={index} />)
                        }    
                    </tbody>
                </table>
            }
            
        </div>
    );
}

export default BookTable;