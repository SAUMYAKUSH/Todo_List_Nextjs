import React, { useState, useEffect } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (props.editingTodo) {
      setTodo(props.editingTodo.todo);
      setIsEditing(true);
    }
  }, [props.editingTodo]);

  const submitHandler = async(e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedTodo = { _id: props.editingTodo._id, todo };
      await props.onEditTodo(updatedTodo);
      setIsEditing(false);
    } else {
      const todoData = {
        todo,
        completed: false,
      };

      await props.onAddTodo(todoData);
    }

    setTodo("");
  };

  return (
    <form onSubmit={submitHandler} className="w-50 mx-auto mt-5">
      <div className="form-group">
        <label htmlFor="exampleInputTodo">Your todo</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTodo"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
