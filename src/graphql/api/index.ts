import { useQuery,useMutation } from "@apollo/client";
import { GET_All_BOOKS, ADD_NEW_BOOK_MUTATION, REMOVE_BOOK_MUTATION, UPDATE_BOOK_MUTATION } from "../schema";

export const useGetAllBooks = () => {
    const {data, loading, error} =  useQuery(GET_All_BOOKS);
    console.log(loading)
    const books = data ? data.findAll : []; 
    return {books, loading, error}
}

export const useAddBook = () => {
    const [addNewBook] = useMutation(ADD_NEW_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}]
    });
    return [addNewBook];
}

export const useUpdateBook = () => {
    const [updateBook] = useMutation(UPDATE_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}]
    });
    return [updateBook];
}

export const useRemoveBook = () => {
    const [removeBookMutation] = useMutation(REMOVE_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}],
    });
    return [removeBookMutation];
}
