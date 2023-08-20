import { BookItemType, BookStateType } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialBookState: BookStateType = {
    isLoading: true,
    isEditable: false,
    editableBook: {
        title: '',
        desc: '',
        isPublished: null,
        body: ''
    },
    allBooks: [],
}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialBookState,
    reducers: {
        setIsLoding(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setBooks(state, action: PayloadAction<BookItemType[]>){
            state.allBooks = action.payload;
        },
        addBook(state, action: PayloadAction<BookItemType>) {
            state.allBooks.push(action.payload);
        }
    }
})

export default bookSlice;