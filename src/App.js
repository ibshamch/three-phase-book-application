/* eslint-disable no-lone-blocks */
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useEffect } from "react";
import useBookContext from "./hooks/use-books-context";
const App = () => {
  const { fetchBooks } = useBookContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
