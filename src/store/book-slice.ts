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
        isPublished: false,
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
            const data = action.payload;
            data.id = state.allBooks.length + 1;
            state.allBooks.push(data);
        },
        updateBook(state, action: PayloadAction<BookItemType>) {
            const data = {
                id: state.editableBook.id,
                ...action.payload,
            }
            state.allBooks = state.allBooks.map(book => book.id === state.editableBook.id ? data : book);
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
                isPublished: false
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