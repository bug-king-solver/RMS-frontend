import { useAppDispatch } from "../../hooks/redux-hooks";
import { deleteModalStatusChange, editableStatusChange, createModalStatausChange, setDeletableId, setEditableData, lookingStatusChange } from "../../store/book-actions";
import { BookItemPropsType } from "../../types";
import { truncateText } from "../../utils/truncateText";

const TableItem = ({ item }: BookItemPropsType) => {

    const dispatch = useAppDispatch()

    const handleEdit = () => {
        dispatch(createModalStatausChange(true));
        dispatch(editableStatusChange(true));
        dispatch(setEditableData(item));
    }

    const handleDelete = () => {
        dispatch(deleteModalStatusChange(true));
        dispatch(setDeletableId(Number(item.id)))
    }

    const handleLook = () => {
        dispatch(setEditableData(item));
        dispatch(lookingStatusChange(true));
        dispatch(createModalStatausChange(true));
    }

    return (
        <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <span> { item.title } </span>
            </th>
            <td className="px-6 py-4">
                {item.isPublished ? <span
                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Active
                </span> : <span
                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    Inactive
                </span>}
            </td>
            <td className="px-6 py-4">
                <span> { truncateText(item.desc) } </span> 
            </td>
            <td className="px-6 py-4">
                <span>
                    { truncateText(item.body, 40) }
                </span>
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-start gap-4">
                    <span x-data="{ tooltip: 'Edite' }" className="rounded-lg p-2 hover:bg-green-100 cursor-pointer" onClick={handleEdit}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                        </svg>
                    </span>
                    <span x-data="{ tooltip: 'Delete' }" className="rounded-lg p-2 hover:bg-red-100 cursor-pointer" onClick={handleDelete}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </span>
                    <span x-data="{ tooltip: 'See' }" className="rounded-lg p-2 hover:bg-sky-100 cursor-pointer" onClick={handleLook}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                        >
                            <path 
                            strokeLinecap="round"
                            strokeLinejoin="round" 
                            d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/>
                            <path 
                            strokeLinecap="round"
                            strokeLinejoin="round" 
                            d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/>
                        </svg>
                    </span>
                </div>
            </td>
        </tr>
    );
    
}

export default TableItem;