import React, { useState } from 'react';
import AddBookForm from './Components/AddBookForm';
import BookList from './Components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { title: 'The Alchemist', author: 'Paulo Coelho' },
    { title: 'Atomic Habits', author: 'James Clear' }
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Book Store</h1>
      <AddBookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
