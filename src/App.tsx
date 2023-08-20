import React, { useState } from 'react';
import BookTable from './components/BookTable';
import './App.css';
import CreateModal from './components/CreateModal';


function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="App">
      <div className='container mx-auto'>
        <div className='flex justify-center my-20'>
          <p className='font-mono font-medium text-3xl'> 
            Book Management System
          </p>
        </div>
        <div className='flex justify-end'>
          <button className="rounded-lg border-solid border-2 border-gray-300 p-2 mr-5 md:w-40 hover:border-gray-500" onClick={openModal}>
            New
          </button>
          {
            isModalOpen ? <CreateModal onClose={closeModal} /> : null
          }
        </div>
        <BookTable />
      </div>
    </div>
  );
}

export default App;
