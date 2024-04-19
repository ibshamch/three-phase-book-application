import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";
const BookShow = ({ book }) => {
  const { deleteBookById } = useBookContext();
  const { title, id } = book;
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBookById(id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${id}/300/200`} />
      {!showEdit ? title : <BookEdit onSubmit={handleSubmit} book={book} />}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
