import { ActionsType } from '../actions'
import { TodoType } from '../components/TodoList'

const todos = (state: TodoType[] = [], action: ActionsType) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map( (todo: TodoType) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
