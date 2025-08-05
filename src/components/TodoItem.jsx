import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between item-cursor">
      <p onClick={()=> onToggleTodo(todo.id)} className={`align-self-center ${(todo.done) ?  'text-decoration-line-through' : ''}`}>
        {todo.desc}
      </p>
      <button className="btn btn-danger btn-block mt-1" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
