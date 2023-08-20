import TableItem from "./TableItem";
import Spinner from "./Spinner";
import {useGetAllBooks} from '../graphql-api'
import { GraphQLBooksType } from "../types";

const BookTable = () => {
    const {books, loading, error}: GraphQLBooksType = useGetAllBooks()
    const isLoading = loading;
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
                            books.map((data) => <TableItem itemData={data} key={data.id} />)
                        }
                    </tbody>
                </table>
            }
            
        </div>
    );
}

export default BookTable;