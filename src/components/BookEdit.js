import { useState } from "react";

const BookEdit = ({ book , onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
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
