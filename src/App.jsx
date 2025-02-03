import { useEffect, useState } from 'react'
import BookList from './components/BookList'
import Header from './components/Header'
import Book from './components/Book'
import httpClient from './services/httpClient'
import AddBook from './components/AddBook'
import useBooks from './hooks/useContext'
function App() {

 const {fetchBooks} = useBooks();
  useEffect(()=>{
    fetchBooks();
},[])
 

  return (
    <>
    <div>
      <Header/>
      <BookList />
      <AddBook  />

      

    </div>
    </>
  )
}

export default App
