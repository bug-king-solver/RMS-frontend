import { BookItemType, BookStateType } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialBookState: BookStateType = {
    isLoading: true,
    createModalOpened: false,
    deleteModalOpened: false,
    isEditable: false,
    editableBook: {
        title: '',
        desc: '',
        isPublished: null,
        body: ''
    },
    deletableTitle: '',
    allBooks: [],
}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialBookState,
    reducers: {
        setCreateModalStatus(state, action: PayloadAction<boolean>) {
            state.createModalOpened = action.payload;
        },
        setDeleteModalStatus(state, action: PayloadAction<boolean>) {
            state.deleteModalOpened = action.payload;
        },
        setIsLoding(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setBooks(state, action: PayloadAction<BookItemType[]>){
            state.allBooks = action.payload;
        },
        addBook(state, action: PayloadAction<BookItemType>) {
            state.allBooks.push(action.payload);
        },
        deleteBook(state) {
            state.allBooks = state.allBooks.filter(book => book.title !== state.deletableTitle);
        },
        setEditableStatus(state, action: PayloadAction<boolean>) {
            state.isEditable = action.payload;
        },
        setEditableBook(state, action: PayloadAction<BookItemType>) {
            state.editableBook = action.payload;
        },
        setDelectableBook(state, action: PayloadAction<string>) {
            state.deletableTitle = action.payload;
        }
    }
})

export default bookSlice;