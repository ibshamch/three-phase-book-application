import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const { title, id } = book;
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, title) => {
    onEdit(id, title);
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
          Delet
        </button>
      </div>
    </div>
  );
};

export default BookShow;
