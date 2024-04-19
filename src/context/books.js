import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };
  const deleteBookById = async (id) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== res.data.id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = async (id, title) => {
    // Updating/Editing Books array

    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...res.data,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const createBook = async (title) => {
    // Add new elements to books array
    const { data } = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };
  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
