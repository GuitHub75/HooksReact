import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
} 


export const useTodos = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, [] , init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatchTodo(action);
  }

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({
      type: 'remove',
      payload: todoId,
    });
  }

  const onToggleTodo = (todoId) => {
    dispatchTodo({
      type: 'toggle',
      payload: todoId,
    });
  }

  return {
    todos: todos,
    handleNewTodo: handleNewTodo,
    handleDeleteTodo: handleDeleteTodo,
    onToggleTodo: onToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  };
};
