import bookSlice from "./book-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { BookItemType } from "../types";
import BookService from "../service/bookService"

export const bookActions = bookSlice.actions

export const fetchBooks = ():ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if (getState().book.allBooks.length === 0) {
            const response: BookItemType[] = await BookService.getAllBooks();
            dispatch(bookActions.setBooks(response));
            dispatch(bookActions.setIsLoding(false));
        }
    }
}

export const addBook = (data: BookItemType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(bookActions.addBook(data));
    }
}