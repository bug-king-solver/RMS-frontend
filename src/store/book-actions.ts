import bookSlice from "./book-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { BookItemType } from "../types";

export const bookActions = bookSlice.actions

export const createModalStatausChange = (status: boolean): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(bookActions.setCreateModalStatus(status));
    }
}

export const deleteModalStatusChange = (status: boolean): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(bookActions.setDeleteModalStatus(status));
    }
}

export const editableStatusChange = (status: boolean): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(bookActions.setEditableStatus(status));
    }
} 

export const setEditableData = (data: BookItemType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(bookActions.setEditableBook(data));
    }
}

export const setDeletableId = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(bookActions.setDelectableBookId(id));
    }
}