import * as React from 'react'
import * as PropTypes from 'prop-types'

export interface TodoProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: React.SFC<TodoProps> = ({ onClick, completed, text }): JSX.Element => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
