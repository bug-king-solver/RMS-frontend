import BookTable from "../components/book";
import { CreateModal, DeleteModal } from "../components/modals";
import {BookItemType, BookModalStatusType, ModalStatus} from "../constant";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { changeBookModalStatus } from "../store/book-actions";

const BookPage = () => {
  const dispatch = useAppDispatch();
  const bookModalStatus = useAppSelector(state => state.book.bookModalStatus);

  const closeModal = () => {
    const configData: BookItemType = {
      title: '',
      description: '',
      body: '',
      published: false,
    }
    const modalStatus: BookModalStatusType = {
      status: ModalStatus.CLOSE,
      data: configData,
    }
    dispatch(changeBookModalStatus(modalStatus));
  };
    return (
        <div className='container mx-auto'>
        <div className='flex justify-center my-20'>
          <p className='font-mono font-medium text-3xl'> 
            Book Management System
          </p>
        </div>
        <BookTable /> 
        {
          bookModalStatus === 'create' || bookModalStatus === 'edit' || bookModalStatus === 'process' ? <CreateModal onClose={closeModal} /> : null
        }
        {
          bookModalStatus === 'remove' ? <DeleteModal onClose={closeModal} /> : null
        }
      </div>
    )
}

export default BookPage;