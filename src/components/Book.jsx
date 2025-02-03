import React, {  useState } from 'react'

import EditBook from './EditBook';
import { FaEdit, FaTrash } from "react-icons/fa";
import useBooks from '../hooks/useContext'
const Book = ({book}) => {
  const {deleteBook}=useBooks()
  const [isVisible,setIsVisible] = useState(false)
    const [text,setText]= useState('');
  
  return (
    <div className="card shadow-lg p-3 rounded" style={{ width: "18rem" }}>
      {/* Book Image */}
      <img src={book.image} className="card-img-top"  style={{ height: "200px", objectFit: "cover" }} />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{book.name}</h5>
        {/* conditional rendring */}
       {isVisible && <EditBook book={book} setText={setText} text={text}/>} 
       

        {/* Action Icons */}
        <div className="d-flex justify-content-between mt-3 actions">
          <FaEdit onClick={()=>{setIsVisible(!isVisible)
         

          }} size={20} color='purple' cursor="pointer"  />
          <FaTrash size={20} color='red' cursor="pointer"onClick={()=>deleteBook(book.id)}/>
        </div>
      </div>
    </div>
  );
};


export default Book
