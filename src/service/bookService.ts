import { BookItemType } from "../types";
import { convertInputItemType, convertOutputItemType } from "../utils/convertType";
import Api from "./Api";

const getAllBooks = async (): Promise<BookItemType[]> => {
    try {
        const response = await Api().get('books');
        const books = convertInputItemType(response.data);
        return books;
    } catch (error) {
        console.error("Error fetching books: ", error);
        throw error;
    }
}

const addBook = async (data: BookItemType) => {
    try {
    console.log(data);
    const output = convertOutputItemType(data);
    const response = await Api().post('books', output);
    
    console.log(response.data)
    } catch (error) {
        
    }
}

export default {
    getAllBooks,
    addBook
}