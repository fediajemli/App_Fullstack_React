import { createContext, useState } from "react";
import AddBook from "../components/AddBook";

import httpClient from "../services/httpClient";
export const BooksContext = createContext();
const BooksProvider = ({children})=>{
    // tasks 
    const [books, setBooks]=useState([]);
   const fetchBooks = async()=>{
    try{
      const {data}= await httpClient.get('/books');
      setBooks(data);
    }catch(error){
      console.log(error);
    }
  }
  const createBook = async (book)=>{

    try{
      const newBook = {
        name: book,
        image:'https://picsum.photos/200/300',
      }
      // update ui
      setBooks([...books,newBook]);
      // inform server
      await httpClient.post('/books',newBook)

    }catch(error){
      console.log(error);
    }
  }
const deleteBook = async (id)=>{
  try{
    // update ui
    setBooks(books.filter(book => book.id != id)) 
    // update server
 const response =  await httpClient.delete(`/books/${id}`)
 console.log(response)
  }catch(error){
      console.log(error);
    }
}
const updateBook = async (update, id)=>{
  try{
    // console.log(update,id)
    // update ui
    setBooks(books.map(book => book.id === id? {...book, name: update}:book))
    // update server
    // patch to update one field
    // put to update many field
    const response = await httpClient.patch(`/books/${id}`,{name: update})

  }catch(error){
      console.log(error);
    }
}

    
     
    return <BooksContext.Provider value={{books,fetchBooks, createBook, updateBook,deleteBook}}>{children}</BooksContext.Provider>
}
export default BooksProvider