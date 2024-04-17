import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
