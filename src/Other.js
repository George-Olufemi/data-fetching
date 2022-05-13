import React, { useState, useEffect } from 'react';
import './Other.css';
import axios from 'axios';

function Other() {
  const [books, setBooks] = useState([]);
    useEffect(() => {
      axios.get('https://fakerapi.it/api/v1/books?_quantity=50')
      .then(response => setBooks(response.data.data))
    }, [])
  return (
    <div className="box">
      {
        books ? books.map((book, idx) => (
        <div key={idx} className='other'>
            <img className='image' src={book.image} alt=""/>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <h3>{book.genre}</h3>
          <h2>{book.description}</h2>
          <h2>{book.published}</h2>
        </div>
        ) )
        : null
      }
    </div>
  )
}

export default Other;