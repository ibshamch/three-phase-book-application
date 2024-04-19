import { useState } from "react";
import useBookContext from "../hooks/use-books-context";
const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title :
          <input
            className="input"
            placeholder="Enter Book Title"
            onChange={handleChange}
            value={title}
          />
        </label>
        <button className="button" type="submit">
          Create !
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
