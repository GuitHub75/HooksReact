import { TodoList } from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import { useTodos } from "../hooks/useTodos";


export const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, onToggleTodo, todosCount,pendingTodosCount} = useTodos();

  return (
    <>
      <h1 className="text-center mt-5 mb-5">
        TodoApp : {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={ onToggleTodo } />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
