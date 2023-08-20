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
    deletableId: undefined,
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
        setDelectableBookId(state, action: PayloadAction<number>) {
            state.deletableId = action.payload;
        }
    }
})

export default bookSlice;