import { ITodo } from "../types/data"

interface ITodoItem extends ITodo {
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, completed, deleteTodo, toggleTodo } = props
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          display: "inline-block",
          margin: "0 10",
        }}
      >
        {" "}
        {title}
      </span>
      <button
        onClick={() => deleteTodo(id)}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "red",
        }}
      >
        x
      </button>
    </div>
  )
}

export { TodoItem }
