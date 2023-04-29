import React from "react";

const TodoItem = ({ title, author, deleteHandler, id }) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
      <article>
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </article>
    </div>
  );
};

export default TodoItem;
