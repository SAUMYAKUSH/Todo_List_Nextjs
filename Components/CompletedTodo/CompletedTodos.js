import React from "react";

const CompletedTodos = (props) => {
  return (
    <div>
      <h1 className="d-flex justify-content-center m-3">Completed Todos</h1>
      {props.todos &&
        props.todos.map((item) => {
          return (
            <ul className="list-group w-50 mx-auto m-2 border" key={item._id}>
              <li className="list-group-item">{item.todo}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default CompletedTodos;
