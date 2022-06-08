import { useState, useEffect, useRef } from "react"
import { ITodo } from "../types/data"
import { TodoList } from "./TodoList"

const App: React.FC = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo()
  }

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ])
      setValue("")
    }
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    )
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export { App }
