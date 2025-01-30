import { useEffect, useState } from 'react'
import BookList from './components/BookList'
import Header from './components/Header'
import Book from './components/Book'
import httpClient from './services/httpClient'
import AddBook from './components/AddBook'

function App() {
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
      await httpClient.post('/books',book)

    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    
fetchBooks();
},[])
 

  return (
    <>
    <div>
      <Header/>
      <BookList books={books}/>
      <AddBook createBook={createBook}/>

      

    </div>
    </>
  )
}

export default App
