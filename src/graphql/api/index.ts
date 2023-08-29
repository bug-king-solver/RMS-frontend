import { useQuery,useMutation } from "@apollo/client";
import { GET_All_BOOKS, ADD_NEW_BOOK_MUTATION, REMOVE_BOOK_MUTATION, UPDATE_BOOK_MUTATION } from "../schema";

export const useGetAllBooks = () => {
    const {data, loading, error} =  useQuery(GET_All_BOOKS);
    const books = data ? data.findAll : []; 
    return {books, loading, error}
}

export const useAddBook = () => {
    const [addNewBook, {loading}] = useMutation(ADD_NEW_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}],
        awaitRefetchQueries: true,
    });
    return {addNewBook, loading};
}

export const useUpdateBook = () => {
    const [updateBook, {loading}] = useMutation(UPDATE_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}]
    });
    return {updateBook, loading};
}

export const useRemoveBook = () => {
    const [removeBookMutation, {loading}] = useMutation(REMOVE_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}],
    });
    return {removeBookMutation, loading};
}
