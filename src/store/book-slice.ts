import ModalStatus from "../constant/enum";
import { BookItemType, BookModalStatusType, BookStateType } from "../constant/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialBookState: BookStateType = {
    bookModalStatus: ModalStatus.CLOSE,
    bookState: {
        title: '',
        description: '',
        published: false,
        body: ''
    },
}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialBookState,
    reducers: {
        setBookModalStatus(state, action: PayloadAction<BookModalStatusType>) {
            state.bookModalStatus = action.payload.status;
            state.bookState = action.payload.data;
        },
        setEditableBook(state, action: PayloadAction<BookItemType>) {
            state.bookState = action.payload;
        },
    }
})

export default bookSlice;