import BookTable from './components/BookTable';
import './App.css';
import CreateModal from './components/CreateModal';
import DeleteModal from './components/DeleteModal';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { editableStatusChange, createModalStatausChange, deleteModalStatusChange, lookingStatusChange } from './store/book-actions';


function App() {
  
  const dispatch = useAppDispatch();
  const createModalOpened = useAppSelector(state => state.book.createModalOpened);
  const deleteModalOpened = useAppSelector(state => state.book.deleteModalOpened);

  const closeModal = () => {
    if (createModalOpened) {
      dispatch(createModalStatausChange(false));
      dispatch(editableStatusChange(false));
      dispatch(lookingStatusChange(false))
    } else if (deleteModalOpened) {
      dispatch(deleteModalStatusChange(false));
    }
  };
  
  return (
    <div className="App">
      <div className='container mx-auto'>
        <div className='flex justify-center my-20'>
          <p className='font-mono font-medium text-3xl'> 
            Book Management System
          </p>
        </div>
        <BookTable /> 
        {
          createModalOpened ? <CreateModal onClose={closeModal} /> : null
        }
        {
          deleteModalOpened ? <DeleteModal onClose={closeModal} /> : null
        }
      </div>
    </div>
  );
}

export default App;
