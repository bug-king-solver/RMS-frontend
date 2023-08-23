import { useAppDispatch } from "../../hooks/redux-hooks";
import { changeBookModalStatus } from "../../store/book-actions";
import { BookItemPropsType, BookModalStatusType } from "../../constant";
import { truncateText } from "../../utils";
import { ModalStatus } from "../../constant";
import { EditIcon, EyeIcon, TrushIcon } from "../icons";


const TableItem = ({ item }: BookItemPropsType) => {

    const dispatch = useAppDispatch()

    const handleEdit = () => {
        const modalStatus: BookModalStatusType = {
            status: ModalStatus.EDIT,
            data: item
        } 
        dispatch(changeBookModalStatus(modalStatus))
    }

    const handleDelete = () => {
        const modalStatus: BookModalStatusType = {
            status: ModalStatus.REMOVE,
            data: item
        } 
        dispatch(changeBookModalStatus(modalStatus)) 
    }

    const handleProcess = () => {
        const modalStatus: BookModalStatusType = {
            status: ModalStatus.PROCESS,
            data: item,
        }
        dispatch(changeBookModalStatus(modalStatus));
    }

    return (
        <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <span> { item.title } </span>
            </th>
            <td className="px-6 py-4">
                {item.published ? <span
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
                <span> { truncateText(item.description) } </span> 
            </td>
            <td className="px-6 py-4">
                <span>
                    { truncateText(item.body, 40) }
                </span>
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-start gap-4">
                    <span x-data="{ tooltip: 'Edite' }" className="rounded-lg p-2 hover:bg-green-100 cursor-pointer" onClick={handleEdit}>
                        <EditIcon />
                    </span>
                    <span x-data="{ tooltip: 'See' }" className="rounded-lg p-2 hover:bg-sky-100 cursor-pointer" onClick={handleProcess}>
                        <EyeIcon />
                    </span>
                    <span x-data="{ tooltip: 'Delete' }" className="rounded-lg p-2 hover:bg-red-100 cursor-pointer" onClick={handleDelete}>
                        <TrushIcon />
                    </span>
                </div>
            </td>
        </tr>
    );
    
}

export default TableItem;