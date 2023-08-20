import { useQuery,useMutation } from "@apollo/client";
import { GET_All_BOOKS } from "../graphql/queries";
import { convertInputItemType, convertOutputItemType } from "../utils";
import { GraphQLBooksType } from "../types";
import { ADD_New_BOOK } from "../graphql/mutations";

export const useGetAllBooks = (): GraphQLBooksType => {
    const {data, loading, error} =  useQuery(GET_All_BOOKS);
    const books = data ? convertInputItemType(data.findAll) : []; 
    return {books, loading, error}
}

export const useAddBook = () => {
    const [addNewBook, {data, loading, error}] = useMutation(ADD_New_BOOK, {
        refetchQueries: [{query: GET_All_BOOKS}]
    });
    return [addNewBook];
}