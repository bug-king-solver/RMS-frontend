import TableItem from "./TableItem";
import { datas } from "../mockData"
import { tableItemType } from "../types";

const BookTable = () => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
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
                        datas.map((data : tableItemType) => <TableItem tableData={data} key={data.id} />)
                    }    
                </tbody>
            </table>
        </div>
    );
}

export default BookTable;