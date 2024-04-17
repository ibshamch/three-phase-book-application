import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
const App = () => {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = (id, title) => {
    // Updating/Editing Books array
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const createBook = (title) => {
    // Add new elements to books array
    const updatedBooks = [
      ...books,
      {
        title,
        id: Math.floor(Math.random() * 100),
      },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
