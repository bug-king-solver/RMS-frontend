import { BookItemType, BookStateType } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialBookState: BookStateType = {
    isLoading: true,
    createModalOpened: false,
    deleteModalOpened: false,
    isEditable: false,
    editableBook: {
        id: undefined,
        title: '',
        desc: '',
        isPublished: undefined,
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
        updateBook(state, action: PayloadAction<BookItemType>) {
            state.allBooks = state.allBooks.map(book => book.id === action.payload.id ? book = action.payload : book);
        },
        deleteBook(state) {
            state.allBooks = state.allBooks.filter(book => book.title !== state.deletableTitle);
        },
        setEditableStatus(state, action: PayloadAction<boolean>) {
            state.isEditable = action.payload;
            state.editableBook = {
                title: '',
                desc: '',
                body: '',
                isPublished: undefined
            }
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