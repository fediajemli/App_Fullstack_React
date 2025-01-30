import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
const Book = ({book}) => {
  return (
    <div className="card shadow-lg p-3 rounded" style={{ width: "18rem" }}>
      {/* Book Image */}
      <img src={book.image} className="card-img-top"  style={{ height: "200px", objectFit: "cover" }} />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{book.name}</h5>
       

        {/* Action Icons */}
        <div className="d-flex justify-content-between mt-3 actions">
          <FaEdit size={20} className="text-warning cursor-pointer"  />
          <FaTrash size={20} className="text-danger cursor-pointer"  />
        </div>
      </div>
    </div>
  );
};


export default Book
