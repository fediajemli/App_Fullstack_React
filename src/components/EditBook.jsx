import React, { useState } from 'react'
import useBooks from '../hooks/useContext'
const EditBook = ({text,setText , book}) => {
   const {updateBook}=useBooks();
  return (
    <div  className='border rounded p-4 '>
      <form onSubmit={(event)=>{event.preventDefault(); updateBook(text, book.id)}}>
        <div className='form-group'>
            <label className='form-labes'>Add Book</label>
            <input onChange={(event)=>setText(event.target.value)} value={text} type="text" className='form-control' placeholder='type book name' />

        </div>
        <button className='btn btn-outline-dark mt-2'>Save</button>
      </form>
    </div>
  )
}

export default EditBook
