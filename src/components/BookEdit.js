import { useState } from "react";
import useBookContext from "../hooks/use-books-context";
const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
