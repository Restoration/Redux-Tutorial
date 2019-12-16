let nextTodoId = 0

export interface FilterType {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export interface ActionsType {
  type: 'ADD_TODO' | 'SET_VISIBILITY_FILTER' | 'TOGGLE_TODO';
  id?: number;
  text?: string;
  filter?: FilterType;
}

export const addTodo = (text: string): ActionsType => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: FilterType): ActionsType => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id: number): ActionsType => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters: FilterType = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
