import { useContext } from "react";
import { BooksContext } from "../context/booksContext";
const useBooks = ()=>{
    return useContext(BooksContext);
}
export default useBooks