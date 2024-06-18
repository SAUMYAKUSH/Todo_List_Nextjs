import CompletedTodos from "@/Components/CompletedTodo/CompletedTodos";
import { MongoClient } from "mongodb";
import React from "react";

const Completed = (props) => {
  return (
    <div>
      <CompletedTodos todos={props.todos} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://MayankTiwari:x3vyqTqhpWEGXcwR@cluster0.qg8qp18.mongodb.net/todos?retryWrites=true&w=majority"
  );

  const db = client.db();

  const completedTodoCollection = db.collection("todos");

  const completedTodos = await completedTodoCollection
    .find({ completed: true })
    .toArray();

  const serializedTodos = completedTodos.map((todo) => {
    return {
      ...todo,
      _id: todo._id.toString(),
    };
  });

  client.close();

  return {
    props: {
      todos: serializedTodos,
    },
  };
}

export default Completed;
