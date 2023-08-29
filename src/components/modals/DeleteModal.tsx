import { useRemoveBook } from "../../graphql/api";
import { useAppSelector } from "../../hooks/redux-hooks";
import { ModalProps } from "../../constant";
import { Spinner } from "../common";

const DeleteModal = ({ onClose }: ModalProps) => {
    const deletableId = useAppSelector(state => state.book.bookState.id);
    const {removeBookMutation, loading, error} = useRemoveBook();

    if (loading) {
        return <Spinner />
    }

    const handleSubmit = () => {
        removeBookMutation({variables: {
            input: Number(deletableId)
        }})
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <form className="block max-w-md rounded-lg bg-white p-6" onSubmit={handleSubmit}>
                <div className='flex justify-between space-x-5 mb-5'>
                    <button type='submit' className='rounded-lg border-solid border-2 border-gray-300 p-2 mr-5 md:w-40 hover:border-gray-500'>Remove</button>
                    <button className='rounded-lg border-solid border-2 border-gray-300 p-2 mr-5 md:w-40 hover:border-gray-500' onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default DeleteModal;
