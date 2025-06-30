import React from 'react';

function BookList({ books, onDelete }) {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books?.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
