import { BookItemType, BookStateType } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialBookState: BookStateType = {
    createModalOpened: false,
    deleteModalOpened: false,
    isEditable: false,
    isLooking: false,
    editableBook: {
        id: undefined,
        title: '',
        desc: '',
        isPublished: false,
        body: ''
    },
    deletableId: undefined,
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
        setLookingStatus(state, action: PayloadAction<boolean>) {
            state.isLooking = action.payload;
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