import { VisibilityFilters } from '../actions'
import { ActionsType } from '../actions'
import { TodoType } from '../components/TodoList'

const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: ActionsType) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
