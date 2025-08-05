import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;
    const NewTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    onNewTodo(NewTodo);
    onResetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button
        className="btn btn-outline-primary mt-1 btn-block mt-3">
        Agregar
      </button>
    </form>
  );
};
