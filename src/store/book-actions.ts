import bookSlice from "./book-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { BookItemType, BookModalStatusType } from "../constant/types";

export const bookActions = bookSlice.actions

export const changeBookModalStatus = (modalStatus: BookModalStatusType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch) => {
        dispatch(bookActions.setBookModalStatus(modalStatus))
    }
}

export const setEditableData = (data: BookItemType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch) => {
        dispatch(bookActions.setEditableBook(data));
    }
}
