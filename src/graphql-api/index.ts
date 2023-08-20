import { useQuery } from "@apollo/client";
import { ADD_BOOK, GET_All_BOOKS } from "../graphql/queries";
import { convertInputItemType, convertOutputItemType } from "../utils";
import { BookItemType, GraphQLBooksType } from "../types";

export const useGetAllBooks = (): GraphQLBooksType => {
    const {data, loading, error} =  useQuery(GET_All_BOOKS);
    const books = data ? convertInputItemType(data.findAll) : []; 
    return {books, loading, error}
}

