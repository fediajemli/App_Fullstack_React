import React from 'react'
import Book from './Book'
import useBooks from '../hooks/useContext'
const BookList = ({}) => {
  const {books} =useBooks()
  return (
    <div className='bookList d-flex align-items-center gap-2'>
      {
        books.map((book) =>(
          <Book key={book.id} book ={book}/>
        ))
      }
        
      
    </div>
  )
}

export default BookList;
