import React from 'react'
import Book from './Book'
const BookList = ({books}) => {
  return (
    <div className='d-flex align-items-center gap-2'>
      {
        books.map((book) =>(
          <Book key={book.id} book ={book}/>
        ))
      }
        
      
    </div>
  )
}

export default BookList;
