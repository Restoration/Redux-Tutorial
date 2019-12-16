import * as React from 'react'
import * as PropTypes from 'prop-types'
import Todo from './Todo'

export type TodoType = {
  id: number,
  completed: boolean,
  text: string
}


interface TodoListProps {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
}
const TodoList: React.SFC<TodoListProps> = ({ todos, toggleTodo }): JSX.Element => (
  <ul>
    {todos.map( (todo :TodoType) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
