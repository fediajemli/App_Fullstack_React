import React, { useState } from 'react'


const AddBook = ({createBook}) => {
    const [text,setText]= useState('');
  return (
    <div style={{maxWidth:'450px'}} className='border rounded p-4 '>
      <form onSubmit={(event)=>{event.preventDefault(); createBook(text)}}>
        <div className='form-group'>
            <label className='form-labes'>Add Book</label>
            <input onChange={(event)=>setText(event.target.value)} value={text} type="text" className='form-control' placeholder='type book name' />

        </div>
        <button className='btn btn-outline-dark mt-2'>Add</button>
      </form>
    </div>
  )
}

export default AddBook
