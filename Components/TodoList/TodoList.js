// TodoList.js
import React from "react";

const TodoList = ({ todos, onDeleteTodo, onCompleteTodo, onEditTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="d-flex justify-content-between w-50 mx-auto mt-2 p-2 align-items-center"
        >
          <p className="col-4">{todo.todo}</p>

          <button
            className="btn btn-success m-2"
            style={{ width: "100px" }}
            onClick={() => onEditTodo(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger m-2"
            style={{ width: "100px" }}
            onClick={() => onDeleteTodo(todo._id)}
          >
            Delete
          </button>
          <button
            className="btn btn-warning m-2"
            style={{ width: "100px" }}
            onClick={() => onCompleteTodo(todo._id)}
          >
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
