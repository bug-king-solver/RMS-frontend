import { useQuery,useMutation } from "@apollo/client";
import { GET_All_BOOKS } from "../graphql/queries";
import { convertInputItemType } from "../utils";
import { ADD_New_BOOK_MUTATION, REMOVE_BOOK_MUTATION, UPDATE_BOOK_MUTATION } from "../graphql/mutations";

export const useGetAllBooks = () => {
    const {data, loading, error} =  useQuery(GET_All_BOOKS);
    const books = data ? convertInputItemType(data.findAll) : []; 
    return {books, loading, error}
}

export const useAddBook = () => {
    const [addNewBook] = useMutation(ADD_New_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}]
    });
    return [addNewBook];
}

export const useUpdateBook = () => {
    const [updateBook] = useMutation(UPDATE_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}]
    });
    return [updateBook]
}

export const useRemoveBook = () => {
    const [removeBookMutation] = useMutation(REMOVE_BOOK_MUTATION, {
        refetchQueries: [{query: GET_All_BOOKS}],
    });
    return [removeBookMutation];
}