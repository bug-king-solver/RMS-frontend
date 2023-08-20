import Api from "./Api";
import { datas } from "../mockData";

export default{
    async getAllBooks() {
        try {
            // var response = await Api().get('/books');
            return datas;
        } catch (error) {
            console.error("Error fetching books: ", error);
            throw error;
        }
    }

    
}