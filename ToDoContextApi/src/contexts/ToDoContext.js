import React from "react";
import { useContext } from "react";

export const ToDoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "todoMsg",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useTodo = () => {
  return useContext(ToDoContext);
};
